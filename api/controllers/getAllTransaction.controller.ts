import { getTransactionsOfMultisig } from "../libs/mongoClient";

export const onGetAllTransaction = {
    doGetAllTransaction: async (req: any, res: any, next: any) => {
        try {
            const {multisigID} = req.query
            const saveRes = await getTransactionsOfMultisig(multisigID);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message) 
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}