import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const multisigSchema = new mongoose.Schema({
    pubkeyJSON: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    prefix: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.Multisig || mongoose.model('Multisig', multisigSchema);