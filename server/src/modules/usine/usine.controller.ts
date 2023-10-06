import {Express} from "express";
import {getUsines} from "@/modules/usine/usine.services";
import {Users} from "@/db/models/User";
import {Usines} from "@/db/models/Usine";

export function usinesController(app: Express) {
    app.get('/usines', async (_req, res) => {
        try {
            const result = await getUsines();
            res.json(result)
        } catch (err) {
            console.log("Erreur", err)
            res.status(500).json({ message: "Erreur" })
        }
    })

    app.post('/upgrade/:id', async (req, res) => {
        try {
            console.log(req.params.id)
            // @ts-ignore
            const result = await Usines.updateOne({ _id: req.params.id }, { $set: { level: req.body.level } });
            console.log(result)
            res.json(result)
        } catch (err) {
            console.log("Erreur", err)
            res.status(500).json({ message: "Erreur" })
        }
    })

    app.get('/lookup/:id', async (_req, res) => {
        try {
            const result = Users.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "_id",
                        foreignField: "_id",
                        as: "user_id"
                    }
                }
            ]);
            res.json(result)
        } catch (err) {
            console.log("Erreur", err)
            res.status(500).json({ message: "Erreur" })
        }
    })

    app.post('/get/usines:id', async (req, res) => {
        try {
            // @ts-ignore
            const result = await Usines.findOne({ _id: req.params.id });
            res.json(result)
        } catch (err) {
            console.log("Erreur", err)
            res.status(500).json({ message: "Erreur" })
        }
    })
}