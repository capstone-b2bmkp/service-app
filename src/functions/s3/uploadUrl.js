import { succesfullResponse, errorResponse } from '../../utils/response_util';
import crypto from 'crypto';

const AWS = require('aws-sdk');
const S3 = require('aws-sdk/clients/s3');
const BUCKET_NAME = process.env.BUCKET_NAME;
const s3 = new S3({
  signatureVersion: 'v4',
  accessKeyId: process.env.AWS_ACCESS_KEY_IDP,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEYP
});

console.log('BUCKET_NAME', BUCKET_NAME);

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const s3Action = body.s3Action;
    const contentType = body.contentType;

    const rawBytes = crypto.randomBytes(16);
    const randomName = rawBytes.toString('hex');

    const params = {
      Bucket: BUCKET_NAME,
      Key: randomName,
      Expires: 3000
    };
    console.log(body);

    console.log('PARAMS', params);
    const url = s3.getSignedUrl('putObject', params);
    // const url = s3.getSignedUrl('putObject', {
    //   Bucket: BUCKET_NAME,
    //   Key: 'hola.png',
    //   Expires: 60
    // });
    // // const url = s3.getSignedUrl('getObject', {
    // //   Bucket: BUCKET_NAME,
    // //   Key: 'AWS-Trouble.png',
    // //   Expires: 60
    // // });
    console.log('hasta aqui 2');
    console.log('S3URL', url);
    // const imagen = await fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'multipart/form-data'
    //   }
    // });

    return succesfullResponse({ S3url: url }, 200);
  } catch (error) {
    console.log('error', error);
    return errorResponse({ error: 'No se pudo obtener el URL del bucket' }, 500);
  }
};
