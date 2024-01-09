import { Router } from "express";
import { onCreateTransaction } from "../controllers/createTransaction.controller";

export const createTransaction = Router()

createTransaction.post("/", onCreateTransaction.doCreateTransaction);