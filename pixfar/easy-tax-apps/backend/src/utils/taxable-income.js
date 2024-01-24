const calculateTaxableIncome = (income, expenses) => {
    const taxableIncome = income - expenses;
    return taxableIncome < 0 ? 0 : taxableIncome;
};

module.exports = { calculateTaxableIncome };
