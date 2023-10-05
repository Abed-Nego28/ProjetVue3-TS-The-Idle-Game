import {Usines} from "@/db/models/Shop";

export async function getShopItems() {

    return await Usines.find().toArray()
}