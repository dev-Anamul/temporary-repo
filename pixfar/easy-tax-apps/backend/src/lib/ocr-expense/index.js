const createOcr = require('./create');
const update = require('./update');
const findSingle = require('./find-single');
const remove = require('./delete');
const findAll = require('./find-all');
const ocrProcess = require('./ocr-process');

module.exports = {
    ...createOcr,
    ...update,
    ...findSingle,
    ...remove,
    ...findAll,
    ...ocrProcess,
};
