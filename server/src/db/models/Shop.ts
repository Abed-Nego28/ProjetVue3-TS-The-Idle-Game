import { db } from "../mongo";
import { Usine } from "@/types/auth.types";

export const Usines = db!.collection<Usine>('shop')