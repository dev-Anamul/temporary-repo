/* eslint-disable object-curly-newline */
const DocumentIntelligence = require('document-intelligence');
const { catchAsync } = require('../../../../utils');

const createOCR = catchAsync(async (req, res) => {
    // file path
    const filePath = `${process.env.APP_URL}/ocrs/${req?.file?.filename}`;

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

    res.status(201).json({
        code: 201,
        status: 'success',
        filePath,
        data: parseResult,
    });
});

module.exports = {
    createOCR,
};
