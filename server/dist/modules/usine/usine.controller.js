"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usinesController = void 0;
const usine_services_1 = require("../../modules/usine/usine.services");
const User_1 = require("../../db/models/User");
const Usine_1 = require("../../db/models/Usine");
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
            const result = await Usine_1.Usines.updateOne({ _id: req.params.id }, { $set: { level: req.body.level } });
            console.log(result);
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
    app.get('/lookup/:id', async (_req, res) => {
        try {
            const result = User_1.Users.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "_id",
                        foreignField: "_id",
                        as: "user_id"
                    }
                }
            ]);
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
    app.post('/get/usines:id', async (req, res) => {
        try {
            // @ts-ignore
            const result = await Usine_1.Usines.findOne({ _id: req.params.id });
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
}
exports.usinesController = usinesController;
//# sourceMappingURL=usine.controller.js.map