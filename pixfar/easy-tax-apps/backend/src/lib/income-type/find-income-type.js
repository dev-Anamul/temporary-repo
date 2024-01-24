const { IncomeType } = require('../../model');

const findIncomeType = async (id) => IncomeType.findById(id);

module.exports = findIncomeType;
