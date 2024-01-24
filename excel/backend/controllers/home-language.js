const homeLanguageService = require('../services/home-language');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all homeLanguage
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */
exports.getAllHomeLanguage = catchAsync(async (req, res) => {
    const homeLanguage = await homeLanguageService.getAllHomeLanguage(req.query);
    res.status(200).json({
        status: 'success',
        data: homeLanguage,
    });
});

/**
 * @description get a homeLanguage by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */

exports.getHomeLanguage = catchAsync(async (req, res) => {
    const homeLanguage = await homeLanguageService.getHomeLanguage(req.params.id);
    res.status(200).json({
        status: 'success',
        data: homeLanguage,
    });
});

/**
 * @description get a homeLanguage by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */

exports.getHomeLanguageByProperty = catchAsync(async (req, res) => {
    const homeLanguage = await homeLanguageService.getHomeLanguageByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: homeLanguage,
    });
});

/**
 * @description create a new homeLanguage
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */

exports.createHomeLanguage = catchAsync(async (req, res) => {
    const homeLanguage = await homeLanguageService.createHomeLanguage(req.body);
    res.status(201).json({
        status: 'success',
        data: homeLanguage,
    });
});

/**
 * @description update a homeLanguage
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */

exports.updateHomeLanguage = catchAsync(async (req, res) => {
    const homeLanguage = await homeLanguageService.updateHomeLanguage(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: homeLanguage,
    });
});

/**
 * @description delete a homeLanguage
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<HomeLanguage>}
 */

exports.deleteHomeLanguage = catchAsync(async (req, res) => {
    await homeLanguageService.deleteHomeLanguage(req.params.id);
    res.status(200).json({
        status: 'success',
        data: null,
    });
});
