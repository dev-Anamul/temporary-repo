const facilityService = require('../services/facility');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all facility
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */
exports.getAllFacility = catchAsync(async (req, res) => {
    const facility = await facilityService.getAllFacility(req.query);
    res.status(200).json({
        status: 'success',
        data: facility,
    });
});

/**
 * @description get a facility by id
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */
exports.getFacility = catchAsync(async (req, res) => {
    const facility = await facilityService.getFacility(req.params.id);
    res.status(200).json({
        status: 'success',
        data: facility,
    });
});

/**
 * @description get a facility by property
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */
exports.getFacilityByProperty = catchAsync(async (req, res) => {
    const facility = await facilityService.getFacilityByProperty(req.query);
    res.status(200).json({
        status: 'success',
        data: facility,
    });
});

/**
 * @description create a new facility
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */

exports.createFacility = catchAsync(async (req, res) => {
    const facility = await facilityService.createFacility(req.body);
    res.status(201).json({
        status: 'success',
        data: facility,
    });
});

/**
 * @description update a facility
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */

exports.updateFacility = catchAsync(async (req, res) => {
    const facility = await facilityService.updateFacility(req.params.id, req.body);
    res.status(200).json({
        status: 'success',
        data: facility,
    });
});

/**
 * @description delete a facility
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<Facility>}
 */

exports.deleteFacility = catchAsync(async (req, res) => {
    const facility = await facilityService.deleteFacility(req.params.id);
    res.status(200).json({
        status: 'success',
        data: facility,
    });
});
