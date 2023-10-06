import {Usines} from "@/db/models/Shop";

export async function getUsines() {
    return await Usines.find().toArray()
}