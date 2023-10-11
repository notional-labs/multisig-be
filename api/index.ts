import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandling';

const app = express();
const port = 4000;
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

import { getVoteRouter } from "./routes/getVotes.route";
import { voteRouter } from "./routes/vote.route";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/getVotes", getVoteRouter);
app.use("/voteForFruit", voteRouter);
app.use("/", async (req: any, res: any, next: any) => {
  return res.send('Hello')
});

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});