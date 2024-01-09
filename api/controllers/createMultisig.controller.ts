import { createMultisig } from "../libs/mongoClient";

export const onCreateMultisig = {
    doCreateMultisig: async (req: any, res: any, next: any) => {
        try {
            const multisig = req.body
            const saveRes = await createMultisig(multisig);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message) 
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}