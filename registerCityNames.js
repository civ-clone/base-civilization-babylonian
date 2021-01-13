"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Babylonian_1 = require("./Babylonian");
const CityName_1 = require("@civ-clone/core-civilization/CityName");
const CityNameRegistry_1 = require("@civ-clone/core-civilization/CityNameRegistry");
[
    'Babilim',
    'Eshnunna',
    'Diniktum',
    'Tutub',
    'Der',
    'Sippar',
    'Kutha',
    'Jemdet Nasr',
    'Kish',
    'Borsippa',
    'Mashkan-shapir',
    'Dilbat',
    'Nippur',
    'Marad',
    'Adab',
    'Isin',
    'Kisurra',
    'Shuruppak',
    'Bad-tibira',
    'Zabalam',
    'Umma',
    'Girsu',
    'Lagash',
    'Urum',
    'Uruk',
    'Larsa',
    'Ur',
    'Kuara',
    'Eridu',
    'Akshak',
    'Akkad',
].forEach((name, i) => CityNameRegistry_1.instance.register(new CityName_1.default(name, Babylonian_1.default, i === 0)));
//# sourceMappingURL=registerCityNames.js.map