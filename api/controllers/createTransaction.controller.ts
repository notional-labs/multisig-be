import { createTransaction } from "../libs/mongoClient";

export const onCreateTransaction = {
    doCreateTransaction: async (req: any, res: any, next: any) => {
        try {
            const data = req.body;
            const saveRes = await createTransaction(data);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}