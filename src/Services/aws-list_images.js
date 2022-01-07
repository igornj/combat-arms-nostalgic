/* eslint-disable no-unused-vars */
require('dotenv').config();

const AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });

const ACCESS_KEY_ID = process.env.aws_access_key_id;
const SECRET_ACCESS_KEY = process.env.aws_secret_access_key;
const BUCKET_NAME = process.env.aws_bucket_name;

const s3 = new AWS.S3({
  accessKeyId: ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
  Bucket: BUCKET_NAME,
});

// const params = {
//   Bucket: 'combatarms-lifetime-images',
//   Prefix: 'combatarms-lifetime-images/',
// };

exports.handler = async (event) => {
  const allKeys = await getAllKeys({ Bucket: BUCKET_NAME });
  return allKeys;
};

async function getAllKeys(params, allKeys = []) {
  const response = await s3.listObjectsV2(params).promise();
  response.Contents.forEach((obj) => allKeys.push(obj.Key));

  if (response.NextContinuationToken) {
    params.ContinuationToken = response.NextContinuationToken;
    await getAllKeys(params, allKeys); // RECURSIVE CALL
  }
  return allKeys;
}
