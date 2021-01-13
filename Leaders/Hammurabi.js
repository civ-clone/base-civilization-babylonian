"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hammurabi = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Babylonian_1 = require("../Babylonian");
class Hammurabi extends Leader_1.default {
    static civilization() {
        return Babylonian_1.default;
    }
    name() {
        return 'Hammurabi';
    }
}
exports.Hammurabi = Hammurabi;
exports.default = Hammurabi;
//# sourceMappingURL=Hammurabi.js.map