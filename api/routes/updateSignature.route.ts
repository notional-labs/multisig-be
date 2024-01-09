import { Router } from "express";
import { onUpdateSignature } from "../controllers/updateSignature.controller";

export const updateSignature = Router()

updateSignature.post("/", onUpdateSignature.doUpdateSignature);