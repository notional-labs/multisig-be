import { Router } from "express";
import { onGetMultisigByAddress } from "../controllers/getMultisigByAddress.controller";

export const getMultisigByAddress = Router()

getMultisigByAddress.post("/", onGetMultisigByAddress.doGetMultisigByAddress);