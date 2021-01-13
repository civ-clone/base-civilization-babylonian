import Babylonian from './Babylonian';
import CityName from '@civ-clone/core-civilization/CityName';
import { instance as cityNameRegistryInstance } from '@civ-clone/core-civilization/CityNameRegistry';

([
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
] as string[]).forEach((name, i): void =>
  cityNameRegistryInstance.register(new CityName(name, Babylonian, i === 0))
);
