const { OCRExpense } = require('../../model');

const orcProcess = async ({ ocrIds = [] }) => {
    const query = {
        _id: { $in: ocrIds },
    };

    const options = {
        sort: { createdAt: -1 },
    };

    const ocrExpenses = await OCRExpense.find(query, null, options);

    console.log('ocrExpenses => ', ocrExpenses);

    return ocrExpenses;
};

module.exports = { orcProcess };
