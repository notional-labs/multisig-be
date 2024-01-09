import { Router } from "express";
import { onGetAllTransaction } from "../controllers/getAllTransaction.controller";

export const getAllTransaction = Router()

getAllTransaction.get("/", onGetAllTransaction.doGetAllTransaction);