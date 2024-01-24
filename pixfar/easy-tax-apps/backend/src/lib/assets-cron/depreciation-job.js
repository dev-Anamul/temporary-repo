const dayjs = require('dayjs');
const { Asset } = require('../../model');
const categoryService = require('../category');
const assetService = require('../asset');
const depreciationService = require('../depreciation');
const expenseService = require('../expense');

const calculateDepreciation = async () => {
    // find all assets with ending  value greater than 0 and isSold false
    const assets = await Asset.find({ endingValue: { $gt: 0 }, isSold: false });

    // loop through assets and calculate depreciation
    assets.forEach(async (asset) => {
        // get the difference between the current date and the last depreciation date
        const category = await categoryService.getCategoryById(asset.category);

        // calculate total depreciation
        const totalDepreciation = asset.purchasePrice * category.depreciationRate;

        // find the difference between the current date and the last depreciation date
        const dateDifference = dayjs().diff(asset.lastDepreciationDate, 'days');

        // calculate the depreciation
        let depreciation = (totalDepreciation * dateDifference) / 365;

        // calculate the accumulated depreciation
        let accumulatedDepreciation = asset.accumulatedDepreciation + depreciation;
        if (accumulatedDepreciation >= asset?.purchasePrice) {
            accumulatedDepreciation = asset.purchasePrice;
        }

        // calculate the ending value
        let endingValue = asset.purchasePrice - accumulatedDepreciation;
        if (depreciation >= asset.endingValue) {
            depreciation = asset.endingValue;
            endingValue = 0;
        }

        // update the asset
        await assetService.updateAsset({
            id: asset._id,
            accumulatedDepreciation,
            endingValue,
            lastDepreciationDate: dayjs().format('YYYY-MM-DD'),
        });
        // if depreciation is less than or equal to 0 then return don't create a new depreciation
        // also don't create a new expense entry
        if (depreciation <= 0) return;

        // create a new depreciation entry
        await depreciationService.addDepreciation({
            accumulatedDepreciation,
            endingValue,
            assetId: asset._id,
            depreciation,
            depreciationRate: category.depreciationRate,
            fiscalYear: `${dayjs(asset.lastDepreciationDate).format('YYYY')}-${dayjs().format(
                'YYYY'
            )}`,
            openingValue: asset.endingValue,
        });

        // create a new entry to the expense table
        await expenseService.createExpense({
            claimableAmount: depreciation,
            description: 'Depreciation Expense',
            expenseDate: dayjs().format('YYYY-MM-DD'),
            expenseType: asset.category,
            isGSTClaimable: false,
            ocrAmount: depreciation,
            status: 'approved',
            totalAmount: depreciation,
            userId: asset.userId,
            expenseName: 'Depreciation Expense',
            gstAmount: 0,
        });
    });
};

module.exports = { calculateDepreciation };
