"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Babylonian_1 = require("./Babylonian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Babylonian',
    nation: 'Babylon',
    colors: ['#D0B8A6', '#2f7b00'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Babylonian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map