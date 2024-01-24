const create = require('./controllers/create');
const update = require('./controllers/update-patch');
const find = require('./controllers/find-all');
const findSingle = require('./controllers/find-single');
const remove = require('./controllers/remove');
const findAll = require('./controllers/find-all');
const ocrProcess = require('./controllers/ocr-process');

module.exports = {
    ...create,
    ...update,
    ...find,
    ...findSingle,
    ...remove,
    ...findAll,
    ...ocrProcess,
};
