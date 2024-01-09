import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const multisigByAdressSchema = new mongoose.Schema({
    createFrom: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
});

module.exports = mongoose.models.MultisigByAddress || mongoose.model('MultisigByAddress', multisigByAdressSchema);