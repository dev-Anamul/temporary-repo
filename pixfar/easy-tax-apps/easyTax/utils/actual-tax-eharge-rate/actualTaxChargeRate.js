/**
 *
 * @param {*} taxRate
 * @returns
 */
const actualTaxChargeRate = (taxRate: number) => {
  const intTaxRate = taxRate * 100;

  return +(intTaxRate / (100 + intTaxRate)).toFixed(4);
};

export default actualTaxChargeRate;

// value={(Number(amount) * 15) / 100}
