const { calculateTaxableIncome } = require('../../utils');
const { fiscalYearExpense } = require('../expense');
const { fiscalYearIncome } = require('../income-source');
const { calculateTax } = require('./calculate-tax');

const fiscalYearTaxes = async ({ userId }) => {
    const fiscalYearExpenses = await fiscalYearExpense({ userId, numOfYear: 10 });
    const fiscalYearIncomes = await fiscalYearIncome({ userId, numOfYear: 10 });

    const taxes = fiscalYearExpenses.map((expense, index) => {
        const income = fiscalYearIncomes[index]?.totalIncome || 0;
        const expenseAmount = expense?.totalExpenses || 0;
        const taxableIncome = calculateTaxableIncome(income, expenseAmount);

        return {
            fiscal_year: expense?.fiscal_year,
            income,
            expense: expenseAmount,
            taxableIncome,
        };
    });

    const taxAmounts = taxes.map(async (tax) => ({
        ...tax,
        tax: await calculateTax(tax.taxableIncome),
    }));

    const finalTax = await Promise.all(taxAmounts);

    return finalTax.filter((e) => e.fiscal_year);
};

module.exports = { fiscalYearTaxes };
