'use strict';
const _ = require("lodash");

let PIES = [];

module.exports.pie = async (event) => {
  const pie = PIES[_.random(0, PIES.length-1)];
  return {
    statusCode: 200,
    body: JSON.stringify(
      pie,
      null,
      2
    ),
  };

};

PIES = [
  {
    'name': 'Anielskie ciasto na białkach',
    'weight': '100g',
    'kcal': 258
  },
  {
    'name': 'Babeczka',
    'weight': '100g',
    'kcal': 305
  },
  {
    'name': 'Babka marmurkowa',
    'weight': '100g',
    'kcal': 339
  },
  {
    'name': 'Babka piaskowa',
    'weight': '100g',
    'kcal': 390
  },
  {
    'name': 'Beza',
    'weight': '100g',
    'kcal': 285
  },
  {
    'name': 'Biszkopt',
    'weight': '100g',
    'kcal': 289
  },
  {
    'name': 'Biszkopty czarno-białe',
    'weight': '100g',
    'kcal': 381
  },
  {
    'name': 'Ciastka Profiterole',
    'weight': '100g',
    'kcal': 334
  },
  {
    'name': 'Ciasto cytrynowe',
    'weight': '100g',
    'kcal': 352
  },
  {
    'name': 'Ciasto czekoladowe',
    'weight': '100g',
    'kcal': 389
  },
  {
    'name': 'Ciasto czekoladowe bez mąki',
    'weight': '100g',
    'kcal': 509
  },
  {
    'name': 'Ciasto drożdżowe',
    'weight': '100g',
    'kcal': 375
  },
  {
    'name': 'Ciasto francuskie',
    'weight': '100g',
    'kcal': 558
  },
  {
    'name': 'Ciasto jagodowe',
    'weight': '100g',
    'kcal': 232
  },
  {
    'name': 'Ciasto kokosowe',
    'weight': '100g',
    'kcal': 356
  },
  {
    'name': 'Ciasto marchewkowe',
    'weight': '100g',
    'kcal': 408
  },
  {
    'name': 'Ciasto na maślance',
    'weight': '100g',
    'kcal': 380
  },
  {
    'name': 'Ciasto owocowe',
    'weight': '100g',
    'kcal': 324
  },
  {
    'name': 'Ciasto Tiramisu',
    'weight': '100g',
    'kcal': 291
  },
  {
    'name': 'Ciasto Trzech Króli',
    'weight': '100g',
    'kcal': 377
  },
  {
    'name': 'Ciasto z bananów i toffi',
    'weight': '100g',
    'kcal': 395
  },
  {
    'name': 'Ciasto z kruszonką',
    'weight': '100g',
    'kcal': 441
  },
  {
    'name': 'Ciasto z lodów',
    'weight': '100g',
    'kcal': 200
  },
  {
    'name': 'Ciasto z okrągłej formy',
    'weight': '100g',
    'kcal': 370
  },
  {
    'name': 'Ciasto śliwkowe',
    'weight': '100g',
    'kcal': 109
  },
  {
    'name': 'Deser Trifle',
    'weight': '100g',
    'kcal': 180
  },
  {
    'name': 'Duet',
    'weight': '100g',
    'kcal': 267
  },
  {
    'name': 'Gofr',
    'weight': '100g',
    'kcal': 312
  },
  {
    'name': 'Keks',
    'weight': '100g',
    'kcal': 376
  },
  {
    'name': 'Kremówka papieska',
    'weight': '100g',
    'kcal': 520
  },
  {
    'name': 'Makowiec',
    'weight': '100g',
    'kcal': 394
  },
  {
    'name': 'Mazurek wielkanocny',
    'weight': '100g',
    'kcal': 475
  },
  {
    'name': 'Miodownik',
    'weight': '100g',
    'kcal': 282
  },
  {
    'name': 'Muffinka czekoladowa',
    'weight': '100g',
    'kcal': 420
  },
  {
    'name': 'Muffinka jagodowa',
    'weight': '100g',
    'kcal': 377
  },
  {
    'name': 'Piernik',
    'weight': '100g',
    'kcal': 356
  },
  {
    'name': 'Placek brzoskwiniowy',
    'weight': '100g',
    'kcal': 223
  },
  {
    'name': 'Placek z malinami',
    'weight': '100g',
    'kcal': 240
  },
  {
    'name': 'Placek z rabarbarem',
    'weight': '100g',
    'kcal': 245
  },
  {
    'name': 'Placek z truskawkami',
    'weight': '100g',
    'kcal': 230
  },
  {
    'name': 'Placek z truskawkami i rabarbarem',
    'weight': '100g',
    'kcal': 281
  },
  {
    'name': 'Placek z wiśniami',
    'weight': '100g',
    'kcal': 260
  },
  {
    'name': 'Profiterole',
    'weight': '100g',
    'kcal': 334
  },
  {
    'name': 'Pączek',
    'weight': '100g',
    'kcal': 403
  },
  {
    'name': 'Pączek francuski',
    'weight': '100g',
    'kcal': 412
  },
  {
    'name': 'Rolada biszkoptowa z kremem',
    'weight': '100g',
    'kcal': 428
  },
  {
    'name': 'Rożek jabłkowy',
    'weight': '100g',
    'kcal': 348
  },
  {
    'name': 'Sernik',
    'weight': '100g',
    'kcal': 321
  },
  {
    'name': 'Strucla z makiem',
    'weight': '100g',
    'kcal': 345
  },
  {
    'name': 'Strudel jabłkowy',
    'weight': '100g',
    'kcal': 274
  },
  {
    'name': 'Szarlotka',
    'weight': '100g',
    'kcal': 252
  },
  {
    'name': 'Sękacz',
    'weight': '100g',
    'kcal': 477
  },
  {
    'name': 'Tarta Tatin',
    'weight': '100g',
    'kcal': 210
  },
  {
    'name': 'Tiramisu',
    'weight': '100g',
    'kcal': 283
  },
  {
    'name': 'Tort Sachera',
    'weight': '100g',
    'kcal': 352
  },
  {
    'name': 'Tort Szwarcwaldzki',
    'weight': '100g',
    'kcal': 264
  },
  {
    'name': 'Tort urodzinowy',
    'weight': '100g',
    'kcal': 465
  },
  {
    'name': 'Tort weselny',
    'weight': '100g',
    'kcal': 381
  },
  {
    'name': 'Tort z musu czekoladowego',
    'weight': '100g',
    'kcal': 260
  },
  {
    'name': 'Wuzetka',
    'weight': '100g',
    'kcal': 353
  },
];
