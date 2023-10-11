import { ethers } from "ethers";
import { MINIMAL_FORWARDER, OPERATOR_PRIVATE_KEY, RPC_URL } from "../constants";
const MinimalForwarder = require("../../contract/MinimalForwarder.json");

export const verifySignature = async (
  address: string,
  message: any,
  signature: string
) => {
  const arrayifyMessage = ethers.utils.arrayify(message)
  const recover = ethers.utils.verifyMessage(arrayifyMessage, signature);
  return address === recover;
};

export const VoteController = {
  voteForFruit: async (req: any, res: any, next: any) => {
    const { transactionMeta, address, message, signature } = req.body;
    try {
      if ((await verifySignature(address, message, signature)) == false) {
        next({ message: "Invalid signature" });
      }
      const provider = new ethers.providers.JsonRpcProvider(
        RPC_URL
      );
      const adminWallet = new ethers.Wallet(
        OPERATOR_PRIVATE_KEY,
        provider
      );
      const contract = new ethers.Contract(
        MINIMAL_FORWARDER,
        MinimalForwarder.abi,
        adminWallet
      );
      let tx = await contract.execute(transactionMeta, signature);
      const receipt = await tx.wait();
      res.json({
        message: receipt.transactionHash,
        success: true,
      });
    } catch (error) {
      next({ message: "Transaction failed" });
    }
  },
};
