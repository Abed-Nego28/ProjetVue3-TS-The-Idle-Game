"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsines = void 0;
const Usine_1 = require("../../db/models/Usine");
async function getUsines() {
    return await Usine_1.Usines.find().toArray();
}
exports.getUsines = getUsines;
//# sourceMappingURL=usine.services.js.map