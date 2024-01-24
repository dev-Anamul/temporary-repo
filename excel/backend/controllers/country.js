const countryService = require('../services/country');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all country
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 */
exports.getAllCountry = catchAsync(async (req, res) => {
    const country = await countryService.getAllCountry();
    res.status(200).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description get a country by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 * @throws {Error} if country not found
 * @throws {Error} if country not found
 */
exports.getCountry = catchAsync(async (req, res) => {
    const country = await countryService.getCountryById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description get a country by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getCountryByProperty = catchAsync(async (req, res) => {
    const country = await countryService.getCountryByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description get a single country by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.getSingleCountryByProperty = catchAsync(async (req, res) => {
    const country = await countryService.getSingleCountryByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description create a country
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.createCountry = catchAsync(async (req, res) => {
    const country = await countryService.createCountry(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description update a country by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.updateCountry = catchAsync(async (req, res) => {
    const country = await countryService.updateCountryById(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: {
            country,
        },
    });
});

/**
 * @description delete a country by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<Country>}
 * @throws {Error} if country not found
 */
exports.deleteCountry = catchAsync(async (req, res) => {
    await countryService.deleteCountryById(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
