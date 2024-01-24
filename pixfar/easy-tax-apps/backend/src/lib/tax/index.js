const calculateTax = require('./calculate-tax');
const fiscalTax = require('./find-taxable-income');

module.exports = { ...calculateTax, ...fiscalTax };
