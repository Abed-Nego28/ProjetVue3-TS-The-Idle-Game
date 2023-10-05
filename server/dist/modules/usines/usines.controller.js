"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usinesController = void 0;
const usines_services_1 = require("./usines.services");
function usinesController(app) {
    app.get('/usines', async (_req, res) => {
        try {
            const result = await (0, usines_services_1.getUsines)();
            res.json(result);
        }
        catch (err) {
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" });
        }
    });
}
exports.usinesController = usinesController;
//# sourceMappingURL=usines.controller.js.map