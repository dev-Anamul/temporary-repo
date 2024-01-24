const { model, Schema } = require('mongoose');

const ocrExpenseSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'OCR must have a title'],
        },
        description: {
            type: String,
        },
        imageUrl: {
            type: String,
            required: [true, 'OCR must have a file reference'],
        },
        postingDate: {
            type: Date,
            required: [true, 'OCR must have a date'],
        },
        status: {
            type: String,
            enum: ['pending', 'approved', 'warning', 'rejected'],
            default: 'pending',
        },
        expenseType: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: [true, 'OCR must have a type'],
        },
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'OCR must belongs to a user'],
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

const OCRExpense = model('OCRExpense', ocrExpenseSchema);
module.exports = OCRExpense;
