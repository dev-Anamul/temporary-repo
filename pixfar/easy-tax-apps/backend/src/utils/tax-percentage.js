const actualTaxChargeRate = (taxRate) => {
    const intTaxRate = taxRate * 100;

    return +(intTaxRate / (100 + intTaxRate)).toFixed(4);
};

module.exports = { actualTaxChargeRate };
