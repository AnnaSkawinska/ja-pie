'use strict';
const _ = require('lodash');
const S3Client = require('aws-sdk/clients/s3');
const csv = require('csvtojson');

const S3 = new S3Client();

module.exports.pie = async (event) => {

  const params = {
    Bucket: 'birthday-pie-ingredients',
    Key: 'pies_pl.csv'
  }

  const stream = S3.getObject(params).createReadStream();
  const pies = await csv().fromStream(stream);

  const pie = pies[_.random(0, pies.length - 1)];
  return {
    statusCode: 200,
    body: JSON.stringify(
      pie,
      null,
      2
    ),
  };

};
