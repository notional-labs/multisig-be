import { Router } from "express";
import { onGetTransaction } from "../controllers/getTransaction.controller";

export const getTransaction = Router()

getTransaction.get("/", onGetTransaction.doGetTransaction);