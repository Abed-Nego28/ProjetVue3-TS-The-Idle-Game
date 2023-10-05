import { Express } from "express"
import { getUsines } from "./usines.services";


export function usinesController(app: Express) {
    app.get('/usines', async (_req, res) => {
        try {
            const result = await getUsines();
            res.json(result)
        }catch (err){
            console.log("Erreur", err);
            res.status(500).json({ message: "Erreur" })
        }
    })
}