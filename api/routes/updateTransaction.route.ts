import { Router } from "express";
import { onUpdateTransaction } from "../controllers/updateTransaction.controller";

export const updateTransaction = Router()

updateTransaction.post("/", onUpdateTransaction.doUpdateTransaction);