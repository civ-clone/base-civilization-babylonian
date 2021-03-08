import Babylonian from './Babylonian';
import Attribute from '@civ-clone/core-civilization/Attribute';
import { instance as attributeRegistryInstance } from '@civ-clone/core-civilization/AttributeRegistry';

Object.entries({
  people: 'Babylonian',
  nation: 'Babylon',
  colors: ['#D0B8A6', '#2f7b00'],
}).forEach(([name, value]: [string, any]): void =>
  attributeRegistryInstance.register(new Attribute(Babylonian, name, value))
);
