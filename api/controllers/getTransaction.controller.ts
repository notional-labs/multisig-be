import { getTransaction } from "../libs/mongoClient";

export const onGetTransaction = {
    doGetTransaction: async (req: any, res: any, next: any) => {
        try {
            const {transactionID} = req.query;
            const saveRes = await getTransaction(transactionID);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}