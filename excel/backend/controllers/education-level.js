const educationLevelService = require('../services/education-level');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all education level
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.getAllEducationLevel = catchAsync(async (req, res) => {
    const educationLevel = await educationLevelService.getAllEducationLevel(req.query);
    res.status(200).json({
        status: 'success',
        data: {
            educationLevel,
        },
    });
});

/**
 * @description get a education level by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.getEducationLevel = catchAsync(async (req, res) => {
    const educationLevel = await educationLevelService.getEducationLevelById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            educationLevel,
        },
    });
});

/**
 * @description get a education level by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.getEducationLevelByProperty = catchAsync(async (req, res) => {
    const educationLevel = await educationLevelService.getEducationLevelByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            educationLevel,
        },
    });
});

/**
 * @description create a new education level
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.createEducationLevel = catchAsync(async (req, res) => {
    const educationLevel = await educationLevelService.createEducationLevel(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            educationLevel,
        },
    });
});

/**
 * @description update a education level by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.updateEducationLevel = catchAsync(async (req, res) => {
    const educationLevel = await educationLevelService.updateEducationLevelById(
        req.params.id,
        req.body
    );
    res.status(200).json({
        status: 'success',
        data: {
            educationLevel,
        },
    });
});

/**
 * @description delete a education level by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<EducationLevel>}
 */
exports.deleteEducationLevel = catchAsync(async (req, res) => {
    await educationLevelService.deleteEducationLevelById(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
