echo 'building...'
rm -rf build && yarn build

echo 'syncing to s3'
aws s3 sync ./build/ s3://nnwizard-dev-fedeployment --profile piktekk --delete


echo 'removing cache'
aws cloudfront create-invalidation \
    --distribution-id E3RQ68V6V6FV9W \
    --paths "/*" --profile piktekk
