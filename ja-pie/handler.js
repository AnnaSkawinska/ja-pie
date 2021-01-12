'use strict';

module.exports.pie = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: 'Szarlotka',
        kcal: '500',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
