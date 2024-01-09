import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const signatureSchema = new mongoose.Schema({
    transaction: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    bodyBytes: {
        type: String,
        required: true,
    },
    signature: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: Number,
    },
    sequence: {
        type: Number,
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.Signature || mongoose.model('Signature', signatureSchema);