const dayjs = require('dayjs');
const { model, Schema } = require('mongoose');

const incomeSourceSchema = new Schema(
    {
        incomeSource: {
            type: String,
            trim: true,
            required: [true, 'Income source is required'],
        },
        amount: {
            type: Number,
            required: [true, 'Income source must have amount'],
        },
        description: {
            type: String,
            trim: true,
        },
        startDate: {
            type: Date,
        },
        isStartDate: {
            type: Boolean,
        },
        endDate: {
            type: Date,
        },
        isEndDate: {
            type: Boolean,
        },
        incomeDate: {
            type: Date,
            required: [true, 'Income source must have income date'],
            default: dayjs().format('YYYY-MM-DD'),
        },
        incomeType: {
            type: Schema.Types.ObjectId,
            ref: 'IncomeType',
            required: [true, 'Income source must have income type'],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected'],
            default: 'pending',
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Income source must belongs to a user'],
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

const IncomeSource = model('IncomeSource', incomeSourceSchema);

module.exports = IncomeSource;
