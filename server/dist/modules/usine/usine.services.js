"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsines = void 0;
const Shop_1 = require("../../db/models/Shop");
async function getUsines() {
    return await Shop_1.Usines.find().toArray();
}
exports.getUsines = getUsines;
//# sourceMappingURL=usine.services.js.map