#!groovy

def runNPM(command, nodeVersion) {
  def NODE_VERSION = 14;
  utilObj = new Utils();
  envVersion = utilObj.getEnvVersion(nodeVersion ? nodeVersion : NODE_VERSION);
  utilObj.runCmd(command, envVersion)
}

def runNPMInAllNodeVersion(command) {
  def NODE_VERSIONS = [14, 16, 18];
  NODE_VERSIONS.every{nodeVersion ->
    runNPM(command, nodeVersion);
  }
}

def uploadAndInvalidate(environment) {
  def STATIC_ASSETS = [
    release: [
      bucketName: credentials('DOCS_S3_BUCKET_NAME_PROD'),
      cdnDistributionId: credentials('DOCS_S3_BUCKET_NAME'),
      profile: 'prod'
    ],
    staging: [
      bucketName: credentials('DOCS_S3_BUCKET_NAME_STAGING'),
      profile: 'staging'
    ]
  ]

  uploadAssetsToS3('docs/dist', "s3://${STATIC_ASSETS[environment].bucketName}/api-sdk", 'us-east-1', true, false, 86400, STATIC_ASSETS[environment].profile)
  if (environment == 'release') {
    invalidateCDN(STATIC_ASSETS[environment].cdnDistributionId, '\"/*\"', STATIC_ASSETS[environment].profile)
  }
}

def publishToNpm(environment){
  if (environment == 'release') {
    runNPM('npm run dopublish');
  } else {
    runNPM('npm run dopublish-dry-run');
  }
}

pipeline {

  agent {
    kubernetes {
      inheritFrom 'eks-node-executor'
    }
  }

  environment {
    NPM_TOKEN = credentials('NPM_TOKEN')
  }

  parameters {
      choice(choices: 'None\nstaging\nrelease\ndeploydocs', description: 'Deploys docs to S3 bucket', name: 'deployTo')
  }

  stages {

    stage('Checkout & Setup') {
      steps {
        checkout scm
        runNPMInAllNodeVersion('npm ci')
      }
    }

    stage('Run unit tests') {
      steps {
        runNPMInAllNodeVersion('npm test')
      }
    }

    stage ('Remove target folder') {
      steps {
        sh 'rm -rf dist'
        sh 'rm -rf docs/dist'
      }
    }

    stage ('Build SDK') {
      steps {
        runNPM('npm run build:lib')
      }
    }

    stage ('Build Docs') {
      steps {
        runNPM('npm run build:docs')
      }
    }

    stage ('NPM publish dry-run') {
      when {
        expression {
          params.deployTo == 'staging' || params.deployTo == 'release'
        }
      }
      steps {
        publishToNpm('staging')
      }
    }

    stage ('Deploy docs to Staging') {
      when {
        expression {
          params.deployTo == 'staging' && BRANCH_NAME == 'main'
        }
      }
      steps {
        uploadAndInvalidate('staging')
      }
    }

    stage ('Deploy to Release') {
      when {
        expression {
          params.deployTo == 'release' && BRANCH_NAME == 'main'
        }
      }
      steps {
        uploadAndInvalidate('release')
        publishToNpm('release')
      }
    }

    stage ('Deploy docs only') {
      when {
        expression {
          params.deployTo == 'deploydocs' && BRANCH_NAME == 'main'
        }
      }
      steps {
        uploadAndInvalidate('release')
      }
    }

  }

  post {
    always {
      echo 'Freshworks API SDK job finished'
      deleteDir()
    }
    success {
      echo 'Freshworks API SDK job successful'
    }
    failure {
      echo 'Freshworks API SDK job failed'
    }
  }
}
