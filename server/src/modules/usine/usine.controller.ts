import {Express} from "express";
import {getUsines} from "@/modules/usine/usine.services";
import {Users} from "@/db/models/User";
import {Usines} from "@/db/models/Shop";
import {ObjectId} from "mongodb";

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

    // @ts-ignore
    app.post('/get/usines/:id', async (req, res) => {
        try {
            let usineId = new ObjectId(req.params.id);
            let userId = new ObjectId(req.body.userId);
            const result = await Usines.findOne({ _id: usineId });
            const user = await Users.findOne({ _id: userId });

            if(!result) {
                return res.status(404).json({ message: "Usine not found" })
            }
            if(!user) {
                return res.status(404).json({ message: "User not found" })
            }
            if(user?.gold < result.cost){
                return res.status(500).json({ message: "Not enough gold" })
            }

            const newUsine = await Usines.updateOne({ _id: usineId }, { $set: { user: user  } });
            const newGold = await Users.updateOne({ _id: userId }, { $set: { gold: user.gold - result.cost } });

            res.json({ user: user?._id, usine: newUsine, gold: newGold})
        } catch (err) {
            console.log("Erreur", err)
            res.status(500).json({ message: "Erreur" })
        }
    })
}