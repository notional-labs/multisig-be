import { Router } from "express";
import { onCreateSignature } from "../controllers/createSignature.controller";

export const createSignature = Router()

createSignature.post("/", onCreateSignature.doCreateSignature);