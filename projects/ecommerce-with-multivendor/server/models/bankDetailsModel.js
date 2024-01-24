const { Schema, model } = require('mongoose');

const bankDetailsSchema = new Schema({
    accountHolderName: {},
    bankName: {},
    bankIfscCode: {},
    accountNumber: {},
    vendor_id: {
        type: Schema.Types.ObjectId,
        ref: '',
    },
});

const Bank = model('Bank', bankDetailsSchema);
module.exports = Bank;
