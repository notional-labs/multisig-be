import { createSignature } from "../libs/mongoClient";

export const onCreateSignature = {
    doCreateSignature: async (req: any, res: any, next: any) => {
        try {
            const {transactionID} = req.query;
            const data = req.body
            const saveRes = await createSignature(data, transactionID);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}