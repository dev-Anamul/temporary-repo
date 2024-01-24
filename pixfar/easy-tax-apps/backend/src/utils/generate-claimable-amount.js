const _default = require('../config/default');
const { actualTaxChargeRate } = require('./tax-percentage');

const generateGstClaimableAmount = ({
    amount,
    claimablePercentage = _default.claimablePercentage,
    isGSTClaimable = _default.isGSTClaimable,
}) => {
    // check if amount is provided
    if (!amount) throw new Error('Amount is required', 400);

    // check if claimablePercentage is provided
    if (isGSTClaimable === true) {
        return +(amount * actualTaxChargeRate(claimablePercentage)).toFixed(2);
    }

    // if GST is not claimable then return 0
    return 0;
};

module.exports = { generateGstClaimableAmount };
