const { Schema, model } = require('mongoose');

const fiscalYearSchema = new Schema(
    {
        fiscalYear: {
            type: String,
            trim: true,
            required: [true, 'Fiscal year must have a name'],
        },
        startDate: {
            type: Date,
            required: [true, 'Fiscal year must have a start date'],
        },
        endDate: {
            type: Date,
            required: [true, 'Fiscal year must have a end date'],
        },
    },
    { timestamps: true }
);

const FiscalYear = model('FiscalYear', fiscalYearSchema);

module.exports = FiscalYear;
