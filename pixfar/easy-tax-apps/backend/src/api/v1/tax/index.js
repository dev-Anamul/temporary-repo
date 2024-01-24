const findTaxes = require('./controllers/find-tax');
const adminTax = require('./controllers/admin-tax');

module.exports = {
    ...findTaxes,
    ...adminTax,
};
