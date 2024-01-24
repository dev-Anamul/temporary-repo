/* eslint-disable operator-linebreak */
const DocumentIntelligence = require('document-intelligence');

const processOcr = async ({ filePath = '', totalAmount }) => {
    // azure options
    const options = {
        key: process.env.AZURE_OCR_KEY,
        endpoint: process.env.AZURE_OCR_ENDPOINT,
    };

    // create azure instance
    const documentIntelligence = new DocumentIntelligence(options);
    const formUrl = [filePath];

    const result = await documentIntelligence.analyzeDocuments(formUrl);
    const parseResult = JSON.parse(result);

    let amount = null;
    let status = null;

    if (parseResult?.[0]?.status === 'failed') {
        amount = 0;
        status = 'pending';
    }

    // todo: don't throw error
    if (parseResult?.[0]?.status === 'success') {
        const dataObj = parseResult?.[0]?.payload?.[0] || {};

        // find the amount
        Object.keys(dataObj).forEach((key) => {
            if (
                key.toLowerCase().includes('total') ||
                key.toLowerCase().includes('invoice charges') ||
                key.toLowerCase().includes('amount')
            ) {
                amount = parseFloat(dataObj[key].value) || 0;
                console.log(dataObj[key]);
            }
        });
    }

    // check if expense amount is valid
    if (amount === totalAmount) {
        status = 'approved';
    } else if (amount !== totalAmount) {
        status = 'pending';
    }

    return { amount, status };
};

module.exports = { processOcr };
