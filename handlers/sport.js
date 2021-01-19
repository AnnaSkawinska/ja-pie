'use strict';
const _ = require('lodash');
const S3Client = require('aws-sdk/clients/s3');
const csv = require('csvtojson');

const S3 = new S3Client();

module.exports.sport = async (event) => {
  if (!event.queryStringParameters || !event.queryStringParameters.kcal)
    return {
      statusCode: 400,
      body: JSON.stringify(
        {
          error: 'Missing query param kcal'
        },
        null,
        2,
      )
    };

  const params = {
    Bucket: 'birthday-pie-ingredients',
    Key: 'sports_pl.csv'
  }

  const stream = S3.getObject(params).createReadStream();
  const sports = await csv().fromStream(stream);

  const kcal = event.queryStringParameters.kcal;
  const sport = sports[_.random(0, sports.length - 1)];

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: sport.name,
        duration: Math.floor(kcal / sport.kcalPerMin),
      },
      null,
      2,
    ),
  };

};
