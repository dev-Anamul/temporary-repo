/* eslint-disable no-restricted-syntax */
const { findAllTaxSlabs } = require('../tax-slab');

// const taxSlab = [
//     {
//         min: 0,
//         max: 14000,
//         rate: 0.105,
//     },
//     {
//         min: 14001,
//         max: 48000,
//         rate: 0.175,
//     },
//     {
//         min: 48001,
//         max: 70000,
//         rate: 0.3,
//     },
//     {
//         min: 70001,
//         max: 180000,
//         rate: 0.33,
//     },
//     {
//         min: 180001,
//         max: Infinity,
//         rate: 0.39,
//     },
// ];

const calculateTax = async (taxableIncome) => {
    if (taxableIncome <= 0) {
        return 0;
    }

    // find all the slabs
    const taxSlabs = await findAllTaxSlabs();

    // calculate tax
    let tax = 0;
    for (const slab of taxSlabs) {
        if (taxableIncome <= slab.max) {
            tax += (taxableIncome - slab.min) * slab.rate;
            break;
        }
        tax += (slab.max - slab.min + 1) * slab.rate;
    }
    return Math.round(tax);
};

module.exports = { calculateTax };
