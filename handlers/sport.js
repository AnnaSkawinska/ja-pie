'use strict';

const _ = require("lodash");
let SPORTS = [];

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

  const kcal = event.queryStringParameters.kcal;
  const sport = SPORTS[_.random(0, SPORTS.length-1)];

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        verb: sport.verb,
        sport: sport.sport,
        duration: Math.floor(kcal / sport.kcalPerMin),
      },

      null,
      2,
    ),
  };

};

SPORTS = [
  {
    "verb": "uprawiać",
    "sport": "aerobiku",
    "kcalPerMin": 9.2
  },
  {
    "verb": "uprawiać",
    "sport": "erobiku w wodzie",
    "kcalPerMin": 9.7
  },
  {
    "verb": "grać w",
    "sport": "badmintona",
    "kcalPerMin": 6.7
  },
  {
    "verb": "",
    "sport": "biegać",
    "kcalPerMin": 20
  },
  {
    "verb": "ćwiczyć na",
    "sport": "siłowni",
    "kcalPerMin": 6.7
  },
  {
    "verb": "",
    "sport": "chodzić po sklepie",
    "kcalPerMin": 4.2
  },
  {
    "verb": "",
    "sport": "czytać",
    "kcalPerMin": 0.4
  },
  {
    "verb": "",
    "sport": "czytać głośno",
    "kcalPerMin": 2.5
  },
  {
    "verb": "grać w",
    "sport": "golfa",
    "kcalPerMin": 4.2
  },
  {
    "verb": "",
    "sport": "gotować",
    "kcalPerMin": 1.8
  },
  {
    "verb": "grać na",
    "sport": "pianinie",
    "kcalPerMin": 2
  },
  {
    "verb": "grać w",
    "sport": "kręgle",
    "kcalPerMin": 5
  },
  {
    "verb": "grać w",
    "sport": "piłkę nożną",
    "kcalPerMin": 10.8
  },
  {
    "verb": "ćwiczyć",
    "sport": "jogi",
    "kcalPerMin": 4.8
  },
  {
    "verb": "uprawiać",
    "sport": "intensywnej gimnastyki",
    "kcalPerMin": 5
  },
  {
    "verb": "jeździć",
    "sport": "konno",
    "kcalPerMin": 10.8
  },
  {
    "verb": "jeździć na",
    "sport": "deskorolce",
    "kcalPerMin": 6.2
  },
  {
    "verb": "jeździć na",
    "sport": "nartach",
    "kcalPerMin": 9.6
  },
  {
    "verb": "jeździć na",
    "sport": "nartach biegowych",
    "kcalPerMin": 7.4
  }
];
