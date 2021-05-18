import AWS from 'aws-sdk';

AWS.config.update({
  region: process.env.AWS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
});

const s3Client = new AWS.S3();
const bucketName = 'clapper-bucket';

export { s3Client, bucketName };
