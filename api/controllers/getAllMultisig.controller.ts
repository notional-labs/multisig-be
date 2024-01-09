import { getMultisigOfAddress } from "../libs/mongoClient";

export const onGetAllMultisig = {
    doGetAllMultisig: async (req: any, res: any, next: any) => {
        try {
            const {address} = req.body;
            const saveRes = await getMultisigOfAddress(address);
            res.status(200).send(saveRes);
        } catch (err: any) {
            console.log(err.message)
            res.status(400).send(err.message);
        }
        // no route matched
        res.status(405).end();
    }
}