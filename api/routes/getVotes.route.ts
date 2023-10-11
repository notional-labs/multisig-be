import { Router } from "express";
import { GetVotesController } from "../controllers/getVotes.controller";

export const getVoteRouter = Router()

getVoteRouter.get("/", GetVotesController.getVotes);