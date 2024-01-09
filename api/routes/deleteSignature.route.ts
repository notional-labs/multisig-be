import { Router } from "express";
import { onDeleteSignature } from "../controllers/deleteSignature.controller";

export const deleteSignature = Router()

deleteSignature.post("/", onDeleteSignature.doDeleteSignature);