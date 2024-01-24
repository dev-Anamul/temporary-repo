/* eslint-disable operator-linebreak */

const { AppError } = require('./AppError');

/* eslint-disable no-nested-ternary */
const formatCsv = (data) => {
    const dataArr = data.split('\n');

    // check if file is empty
    if (dataArr.length < 2) throw new AppError('File is empty', 400, 'Bad Request');

    // keys of the csv file
    const keys = dataArr[0]?.split(',');

    // split the csv file into array of arrays
    const expenses = dataArr?.map((row) => row.split(','));

    // filter out the rows that have the same length as the keys
    const filteredExpenses = expenses?.filter((expense) => expense.length === keys.length);

    // check if file is empty
    if (filteredExpenses.length < 2) throw new AppError('File is empty', 400, 'Bad Request');

    // create an object for each row
    const expenseObj = filteredExpenses?.map((expense) => {
        const obj = {};
        keys.forEach((key, i) => {
            obj[key?.trim()] =
                key === 'totalAmount'
                    ? parseFloat(expense[i])
                    : key === 'isGSTClaimable'
                    ? expense[i] === 'true' || expense[i] === 'TRUE'
                    : expense[i];
        });
        return obj;
    });

    // return the array of objects
    return expenseObj?.slice(1);
};

module.exports = {
    formatCsv,
};
