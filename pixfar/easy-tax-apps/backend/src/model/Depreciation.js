const { model, Schema } = require('mongoose');

const depreciationSchema = new Schema(
    {
        assetId: {
            type: Schema.Types.ObjectId,
            ref: 'Asset',
        },
        fiscalYear: {
            type: String,
        },
        depreciation: {
            type: Number,
        },
        accumulatedDepreciation: {
            type: Number,
        },
        depreciationRate: {
            type: Number,
        },
        openingValue: {
            type: Number,
        },
        endingValue: {
            type: Number,
        },
    },
    {
        versionKey: false,
        timestamps: true,
        virtuals: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

const Depreciation = model('Depreciation', depreciationSchema);

module.exports = Depreciation;
