import {Express} from "express";
import {getShopItems} from "@/modules/shop/shop.services";

export function shopController(app: Express) {
    app.get('/shop/usines', async (_req, res) => {
        try {
            const result = await getShopItems();
            res.json(result);
            console.log(result)
        } catch (error) {
            console.log('Erreur lors de la récupération des usines', error)
            res.status(500).json({ message: 'Erreur lors de la récupération des usines' });
        }
    })
}