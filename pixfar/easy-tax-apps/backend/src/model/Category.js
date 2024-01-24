const { model, Schema } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: [true, 'Category already exists'],
            required: [true, 'Category must have a name'],
        },
        claimablePercentage: {
            type: Number,
            required: [true, 'Category must have a claimable percentage'],
            default: 0,
        },
        depreciationRate: {
            type: Number,
            required: [true, 'Category must have a depreciation rate'],
            default: 0,
        },
        description: {
            type: String,
            trim: true,
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

const Category = model('Category', categorySchema);

module.exports = Category;
