#!groovy

def runNPM(command) {
     def NODE_VERSION = 12;
     utilObj = new Utils();
     envVersion = utilObj.getEnvVersion(NODE_VERSION);
     utilObj.runCmd(command, envVersion)
}

def uploadAndInvalidate(environment) {
  def STATIC_ASSETS = [
    release: [
      bucketName: 'codelabs-prod',
      cdnDistributionId: 'E2OJAP80EGS5J2',
      profile: 'prod'
    ],
    staging: [
      bucketName: 'static.freshcloud.io',
      profile: 'staging'
    ]
  ]

  uploadAssetsToS3('docs/api', "s3://${STATIC_ASSETS[environment].bucketName}/freshworks-sdk", 'us-east-1', true, false, 86400, STATIC_ASSETS[environment].profile)
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

    agent any

    environment {
      NPM_TOKEN = credentials('NPM_TOKEN')
    }

    parameters {
        choice(choices: 'None\nstaging\nrelease', description: 'Deploys Freshworks API SDK and docs', name: 'deployTo')
    }

    stages {

        stage('Checkout & Install Dependencies') {
            steps {
                checkout scm
                runNPM('npm ci')
            }
        }

        stage('Run Linter & Build lib and docs'){
            steps {
                runNPM('npm run lint')
                runNPM('npm run build')
            }
        }

        stage ('Publish lib to NPM') {
            when {
                expression {
                    params.deployTo == 'release' && BRANCH_NAME == 'main'
                }
            }
            steps {
               publishToNpm('release')
            }
        }

        stage ('Publish Docs') {
            when {
                expression {
                    params.deployTo == 'release' && BRANCH_NAME == 'main'
                }
            }
            steps {
               uploadAndInvalidate('release')
            }
        }

    }

    post {
        always {
            echo 'Freshworks sdk job finished'
            deleteDir()
        }
        success {
            echo 'Freshworks sdk job successful'
        }
        failure {
            echo 'Freshworks sdk job failed'
        }
    }
}
