import { ethers } from "ethers";
import { FRUIT_VOTING, RPC_URL } from "../constants";
const FruitVoting = require('../../contract/FruitVoting.json');

export const GetVotesController = {
    getVotes: async (req: any, res: any, next: any) => {
        const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
        const contract = new ethers.Contract(FRUIT_VOTING, FruitVoting.abi, provider);
        let voteNumber = await contract.getVotesForFruit(req.query.fruit)
        return res.json({voteNumber: voteNumber.toNumber()})
    }
}