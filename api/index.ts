import express from 'express';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/errorHandling';
import mongoose from 'mongoose';
import { config } from './config';
import cors from 'cors'; 

const app = express();
app.use(cors()); 
const port = 4000;
require('dotenv').config();

mongoose
    .connect(config.database, { retryWrites: true, w: 'majority' })
    .then(() => {
        console.log('Mongo connected successfully.');
    })
    .catch((error) => console.log(error));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

import { createMultisig } from "./routes/createMultisig.route";
import { createSignature } from "./routes/createSignature.route";
import { createTransaction } from "./routes/createTransaction.route";
import { deleteSignature } from "./routes/deleteSignature.route";
import { deleteTransaction } from "./routes/deleteTransaction.route";
import { getAllMultisig } from "./routes/getAllMultisig.route";
import { getAllTransaction } from "./routes/getAllTransaction.route";
import { getMultisigByAddress } from "./routes/getMultisigByAddress.route";
import { getTransaction } from "./routes/getTransaction.route";
import { updateSignature } from "./routes/updateSignature.route";
import { updateTransaction } from "./routes/updateTransaction.route";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/api/multisig/create", createMultisig);
app.use("/api/transaction/create", createTransaction);
app.use("/api/transaction/signature", createSignature);
app.use("/api/signature/delete", deleteSignature);
app.use("/api/transaction/delete", deleteTransaction);
app.use("/api/multisig/all-multisig", getAllMultisig);
app.use("/api/multisig/all-transaction", getAllTransaction);
app.use("/api/multisig", getMultisigByAddress);
app.use("/api/transaction", getTransaction);
app.use("/api/signature/update", updateSignature);
app.use("/api/transaction/update", updateTransaction);

// app.use("/", async (req: any, res: any, next: any) => {
//   return res.send('Hello')
// });

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});