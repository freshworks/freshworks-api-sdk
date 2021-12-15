#!/bin/bash

set -e;

function usage()
{
    echo "Supported Commands"
    echo ""
    echo "--build -> Builds OpenAPI Generator Docker image"
    echo ""
    echo "--generate -> Generates TypeScript Node SDK for all APIs"
    echo ""
}

function build_openapi_generator()
{
    docker build -t openapi-generator codegen/
}

function generate_freshteam_client()
{
  rm -rf build/
  docker run --rm --network="host" \
    -v "${PWD}:/local" openapitools/openapi-generator-cli:latest-release generate --skip-validate-spec \
    -i /local/codegen/freshteam/freshteam-v1.0.0.swagger.json \
    -g javascript \
    -o /local/build \
    -c /local/codegen/freshteam/freshteam.config.json \
    -t /local/codegen/freshteam/templates;
  rm -f build/git_push.sh
  cd build
  npm install
  npm test
  cd ..
  rm -rf src/gen/freshteam
  mv build/src src/gen/freshteam
  mv build/docs src/gen/freshteam/
  rm -rf build/
  npm run format
}

while [[ $# > 0 ]] ; do
  case $1 in
      --help)
          usage
          exit
          ;;
      --build)
          build_openapi_generator
          exit
          ;;
      --generate)
          generate_freshteam_client
          exit
          ;;
      *)
          echo "Unknown option $1"
          usage
          ;;
  esac
  shift
done
