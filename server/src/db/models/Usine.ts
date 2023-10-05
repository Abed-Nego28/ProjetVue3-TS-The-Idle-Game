import { Usine } from "@/types/auth.types";
import { db } from "../mongo";

export const Usines = db!.collection<Usine>('usines')