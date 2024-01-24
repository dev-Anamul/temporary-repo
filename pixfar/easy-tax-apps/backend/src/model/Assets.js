const { model, Schema } = require('mongoose');

const assetSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            // required: [true, 'Asset must have a name'],
        },
        description: {
            type: String,
            trim: true,
        },
        purchaseDate: {
            type: Date,
            required: [true, 'Asset must have a purchase date'],
        },
        lastDepreciationDate: {
            type: Date,
        },
        purchasePrice: {
            type: Number,
            required: [true, 'Asset must have a purchase price'],
        },
        accumulatedDepreciation: {
            type: Number,
            default: 0,
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Asset must have a category'],
        },
        depreciationMethod: {
            type: String,
            enum: ['straight-line', 'diminishing-value'],
            required: [true, 'Asset must have a depreciation method'],
            default: 'straight-line',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Asset must belongs to a user'],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected', 'pending for slip'],
            default: 'pending for slip',
        },
        endingValue: {
            type: Number,
            default: 0,
        },
        isSold: {
            type: Boolean,
            default: false,
        },
        saleDate: {
            type: Date,
        },
        salePrice: {
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

const Asset = model('Asset', assetSchema);

module.exports = Asset;
