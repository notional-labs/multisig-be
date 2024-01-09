import mongoose from 'mongoose';

const Multisig = require('../models/multisig.model')
const MultisigByAddress = require('../models/multisigByAddress.model')
const Signature = require('../models/signature.model')
const Transaction = require('../models/transaction.model')

export const createMultisig = async (multisig: any) => {
    try {
        await Multisig.create({
            pubkeyJSON: JSON.stringify(multisig.pubkeyJSON),
            address: multisig.address,
            prefix: multisig.prefix,
        })
    
        multisig.components.forEach(async (address: any) => {
            await MultisigByAddress.create({
                address: multisig.address, 
                createFrom: address
            })
        })
        return {
            address: multisig.address
        }
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const getMultisigByAddress = async (address: any) => {
    try {
        let mul = await Multisig.findOne({
            address: address
        }).exec()
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const getMultisigOfAddress = async (address: any) => {
    try {
        let mul = await MultisigByAddress.aggregate([
            {
                $match: {
                    createFrom: address
                }
            },
        ])
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const createTransaction = async (transaction: any) => {
    try {
        let mul = await Transaction.create({
            createBy: transaction.createBy,
            dataJSON: JSON.stringify(transaction.dataJSON),
            status: "PENDING",
        })
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const getTransaction = async (id: any) => {
    try {
        let mul = await Transaction.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "signatures",
                    localField: "_id",
                    foreignField: "transaction",
                    as: "signatures"
                }
            }
        ])
        return mul[0]
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const createSignature = async (signature: any, transactionId: any) => {
    try {
        let mul = await Signature.create({
            transaction: new mongoose.Types.ObjectId(transactionId), 
            bodyBytes: signature.bodyBytes,
            signature: signature.signature,
            address: signature.address,
            accountNumber: signature.accountNumber,
            sequence: signature.sequence
        })
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const updateSignature = async (signature: any, transactionId: any) => {
    try {
        let mul = await Signature.findByIdAndUpdate(signature.id, {
            transaction: new mongoose.Types.ObjectId(transactionId), 
            bodyBytes: signature.bodyBytes,
            signature: signature.signature,
            address: signature.address,
            accountNumber: signature.accountNumber,
            sequence: signature.sequence
        })
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const deleteSignature = async (id: any) => {
    try {
        let mul = await Signature.findByIdAndDelete(id)
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const updateTransaction = async (txHash: any, transactionID: any, multisigID: any) => {
    try {
        await Transaction.findByIdAndUpdate(transactionID, {
            txHash: txHash,
            status: "FINISHED",
            createBy: multisigID
        })
        let mul = await Transaction.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(transactionID)
                }
            },
            {
                $lookup: {
                    from: "signatures",
                    localField: "_id",
                    foreignField: "transaction",
                    as: "signatures"
                }
            }
        ])
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}

export const deleteTransaction = async (id: any) => {
    try {
        let mul = await Transaction.findByIdAndDelete(id)
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}


export const getTransactionsOfMultisig = async (multisig: any) => {
    try {
        let mul = await Transaction.aggregate([
            {
                $match: {
                    createBy: multisig
                }
            },
            {
                $lookup: {
                    from: "signatures",
                    localField: "_id",
                    foreignField: "transaction",
                    as: "signatures"
                }
            }
        ])
        return mul
    } catch (error) {
        console.log(error);
        throw error
    }
}
