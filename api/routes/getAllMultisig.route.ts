import { Router } from "express";
import { onGetAllMultisig } from "../controllers/getAllMultisig.controller";

export const getAllMultisig = Router()

getAllMultisig.post("/", onGetAllMultisig.doGetAllMultisig);