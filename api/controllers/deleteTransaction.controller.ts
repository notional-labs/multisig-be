import { deleteTransaction } from "../libs/mongoClient";

export const onDeleteTransaction = {
    doDeleteTransaction: async (req: any, res: any, next: any) => {
        try {
            const {id} = req.query;
            const saveRes = await deleteTransaction(id);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}