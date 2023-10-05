"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getShopItems = void 0;
const Shop_1 = require("../../db/models/Shop");
async function getShopItems() {
    return await Shop_1.Usines.find().toArray();
}
exports.getShopItems = getShopItems;
//# sourceMappingURL=shop.services.js.map