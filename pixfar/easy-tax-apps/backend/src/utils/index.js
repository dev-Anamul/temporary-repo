const hashing = require('./hashing');
const AppError = require('./AppError');
const catchAsync = require('./catchAsync');
const date = require('./date');
const pagination = require('./pagination');
const queryString = require('./query-string');
const generateLinks = require('./hateoas');
const generateClaimableAmount = require('./generate-claimable-amount');
const formatCsv = require('./format-csv');
const addSelfLinks = require('./add-self-links');
const dayToName = require('./day-to-name');
const monthToName = require('./month-to-name');
const getDaysOfMonth = require('./get-days-of-month');
const generateFiscalRange = require('./generate-fiscal-range');
const taxChargeRate = require('./tax-percentage');
const startDateEndDate = require('./generate-start-endDate');
const taxableIncome = require('./taxable-income');

module.exports = {
    ...hashing,
    ...AppError,
    ...catchAsync,
    ...date,
    ...pagination,
    ...queryString,
    ...generateLinks,
    ...generateClaimableAmount,
    ...formatCsv,
    ...addSelfLinks,
    ...dayToName,
    ...monthToName,
    ...getDaysOfMonth,
    ...generateFiscalRange,
    ...taxChargeRate,
    ...startDateEndDate,
    ...taxableIncome,
};
