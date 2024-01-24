const { AppError } = require('../../utils');
const { findFiscalYearById } = require('./find-single');

const deleteFiscalYear = async (id) => {
    const fiscalYear = await findFiscalYearById(id);

    if (!fiscalYear) throw new AppError('Fiscal Year does not exist', 400, 'Bad Request');

    return fiscalYear.deleteOne();
};

module.exports = { deleteFiscalYear };
