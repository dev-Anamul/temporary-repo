const { IncomeType } = require('../../model');

const createIncomeType = async ({ name, description }) => {
    const newIncomeType = new IncomeType({ name, description });

    await newIncomeType.save();

    return newIncomeType;
};

module.exports = createIncomeType;
