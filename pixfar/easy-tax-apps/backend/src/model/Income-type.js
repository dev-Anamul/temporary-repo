const { model, Schema } = require('mongoose');

const incomeTypeSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            unique: [true, 'Income type already exists'],
            required: [true, 'Income type must have a name'],
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

const IncomeType = model('IncomeType', incomeTypeSchema);
module.exports = IncomeType;
