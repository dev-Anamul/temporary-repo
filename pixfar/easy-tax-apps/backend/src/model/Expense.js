const { model, Schema } = require('mongoose');

const expenseSchema = new Schema(
    {
        expenseName: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
        },
        expenseType: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'Expense must have an expense type'],
        },
        ocrAmount: {
            type: Number,
            required: [true, 'Expense must have OCR amount'],
            default: 0,
        },
        totalAmount: {
            type: Number,
            required: [true, 'Expense must have total amount'],
        },
        claimableAmount: {
            type: Number,
            required: [true, 'Expense must have claimable amount'],
        },
        gstAmount: {
            type: Number,
            required: [true, 'Expense must have GST amount'],
            default: 0,
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Expense must belongs to a user'],
        },
        isGSTClaimable: {
            type: Boolean,
            required: true,
            default: false,
        },
        expenseDate: {
            type: Date,
            required: [true, 'Expense must have a date'],
        },
        filePath: {
            type: String,
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'rejected', 'pending for slip'],
            default: 'pending',
        },
        type: {
            type: String,
            enum: ['expense', 'asset'],
            default: 'expense',
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

const Expense = model('Expense', expenseSchema);
module.exports = Expense;
