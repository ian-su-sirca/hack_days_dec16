#!/bin/sh
set -e
yarn run build
cd static
aws s3 --profile=hack sync .  s3://long-lived-lambda-demo-sirca-org-au --acl public-read
