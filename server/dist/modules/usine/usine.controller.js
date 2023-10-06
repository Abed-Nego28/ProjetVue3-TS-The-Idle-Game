"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usinesController = void 0;
const usine_services_1 = require("../../modules/usine/usine.services");
const User_1 = require("../../db/models/User");
const Shop_1 = require("../../db/models/Shop");
const mongodb_1 = require("mongodb");
function usinesController(app) {
    app.get('/usines', async (_req, res) => {
        try {
            const result = await (0, usine_services_1.getUsines)();
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
    app.post('/upgrade/:id', async (req, res) => {
        try {
            console.log(req.params.id);
            // @ts-ignore
            const result = await Shop_1.Usines.updateOne({ _id: req.params.id }, { $set: { level: req.body.level } });
            console.log(result);
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
    // @ts-ignore
    app.post('/get/usines/:id', async (req, res) => {
        try {
            let usineId = new mongodb_1.ObjectId(req.params.id);
            let userId = new mongodb_1.ObjectId(req.body.userId);
            const result = await Shop_1.Usines.findOne({ _id: usineId });
            const user = await User_1.Users.findOne({ _id: userId });
            if (!result) {
                return res.status(404).json({ message: "Usine not found" });
            }
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            if ((user === null || user === void 0 ? void 0 : user.gold) < result.cost) {
                return res.status(500).json({ message: "Not enough gold" });
            }
            const newUsine = await Shop_1.Usines.updateOne({ _id: usineId }, { $set: { user: user } });
            const newGold = await User_1.Users.updateOne({ _id: userId }, { $set: { gold: user.gold - result.cost } });
            res.json({ user: user === null || user === void 0 ? void 0 : user._id, usine: newUsine, gold: newGold });
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
}
exports.usinesController = usinesController;
//# sourceMappingURL=usine.controller.js.map