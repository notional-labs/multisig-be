import { Router } from "express";
import { onDeleteTransaction } from "../controllers/deleteTransaction.controller";

export const deleteTransaction = Router()

deleteTransaction.post("/", onDeleteTransaction.doDeleteTransaction);