import { Usines } from "@/db/models/Usine";


export async function getUsines() {

    return await Usines.find().toArray()

}