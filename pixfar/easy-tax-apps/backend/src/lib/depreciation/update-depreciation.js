const { AppError } = require('../../utils');
const { findDepreciation } = require('./find-depreciation');

const updateDepreciation = async ({
    id,
    depreciationRate,
    fiscalYear,
    openingValue,
    accumulatedDepreciation,
    endingValue,
    assetId,
}) => {
    const depreciation = await findDepreciation(id);

    if (!depreciation) {
        throw new AppError('Depreciation not found', 404, 'Not Found');
    }

    depreciation.depreciation = depreciation ?? depreciation.depreciation;
    depreciation.depreciationRate = depreciationRate ?? depreciation.depreciationRate;
    depreciation.fiscalYear = fiscalYear ?? depreciation.fiscalYear;
    depreciation.openingValue = openingValue ?? depreciation.openingValue;
    // eslint-disable-next-line operator-linebreak
    depreciation.accumulatedDepreciation =
        accumulatedDepreciation ?? depreciation.accumulatedDepreciation;
    depreciation.endingValue = endingValue ?? depreciation.endingValue;
    depreciation.assetId = assetId ?? depreciation.assetId;

    await depreciation.save();

    return depreciation;
};

module.exports = updateDepreciation;
