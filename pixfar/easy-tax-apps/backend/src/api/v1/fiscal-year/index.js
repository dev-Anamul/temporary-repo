const createFiscalYear = require('./controllers/create');
const deleteFiscalYear = require('./controllers/delete');
const findFiscalYear = require('./controllers/find-all');
const findFiscalYearById = require('./controllers/find-single');
const updateFiscalYear = require('./controllers/update');

module.exports = {
    ...createFiscalYear,
    ...deleteFiscalYear,
    ...findFiscalYear,
    ...findFiscalYearById,
    ...updateFiscalYear,
};
