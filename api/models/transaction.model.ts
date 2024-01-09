import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const transactionSchema = new mongoose.Schema({
    signatures: {
        type: Array,
    },
    dataJSON: {
        type: String,
    },
    txHash: {
        type: String,
    },
    createBy: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.Transaction || mongoose.model('Transaction', transactionSchema);