import { Router } from "express";
import { onCreateMultisig } from "../controllers/createMultisig.controller";

export const createMultisig = Router()

createMultisig.post("/", onCreateMultisig.doCreateMultisig);