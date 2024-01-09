import { updateTransaction } from "../libs/mongoClient";

export const onUpdateTransaction = {
    doUpdateTransaction: async (req: any, res: any, next: any) => {
        try {
            const {transactionID} = req.query;
            const { txHash, multisigID } = req.body;
            const saveRes = await updateTransaction(txHash, transactionID, multisigID);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}