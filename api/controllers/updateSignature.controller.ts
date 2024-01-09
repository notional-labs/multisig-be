import { updateSignature } from "../libs/mongoClient";

export const onUpdateSignature = {
    doUpdateSignature: async (req: any, res: any, next: any) => {
        try {
            const {signature, transactionID} = req.body;
            const saveRes = await updateSignature(signature, transactionID);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}