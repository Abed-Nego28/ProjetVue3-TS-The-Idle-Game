"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopController = void 0;
const shop_services_1 = require("../../modules/shop/shop.services");
function shopController(app) {
    app.get('/shop/usines', async (_req, res) => {
        try {
            const result = await (0, shop_services_1.getShopItems)();
            res.json(result);
            console.log(result);
        }
        catch (error) {
            console.log('Erreur lors de la récupération des usines', error);
            res.status(500).json({ message: 'Erreur lors de la récupération des usines' });
        }
    });
}
exports.shopController = shopController;
//# sourceMappingURL=shop.controller.js.map