import { Router } from "express";
import { VoteController } from "../controllers/vote.controller";

export const voteRouter = Router()

voteRouter.post("/", VoteController.voteForFruit);
