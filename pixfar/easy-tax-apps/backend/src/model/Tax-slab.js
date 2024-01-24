const mongoose = require('mongoose');

const taxSlabSchema = new mongoose.Schema(
    {
        min: {
            type: Number,
            min: 0,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        rate: {
            type: Number,
            required: true,
        },
        range: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const TaxSlab = mongoose.model('TaxSlab', taxSlabSchema);

module.exports = TaxSlab;
