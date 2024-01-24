const facilityAccessService = require('../services/facility-access');
const catchAsync = require('../utils/catchAsync');

/**
 * @description get all facilityAccess
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 */
exports.getAllFacilityAccess = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.getAllFacilityAccess();
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});

/**
 * @description get a facilityAccess by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 * @throws {Error} if facilityAccess not found
 */
exports.getFacilityAccess = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.getFacilityAccessById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});

/**
 * @description get a facilityAccess by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 */
exports.getFacilityAccessByProperty = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.getFacilityAccessByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});

/**
 * @description get a single facilityAccess by property
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 */
exports.getSingleFacilityAccessByProperty = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.getSingleFacilityAccessByProperty(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});

/**
 * @description create a new facilityAccess
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 */
exports.createFacilityAccess = catchAsync(async (req, res) => {
    const newFacilityAccess = await facilityAccessService.createFacilityAccess(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            facilityAccess: newFacilityAccess,
        },
    });
});

/**
 * @description update a facilityAccess by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 * @throws {Error} if facilityAccess not found
 * @throws {Error} if facilityAccess not found
 */
exports.updateFacilityAccess = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.updateFacilityAccessById(
        req.params.id,
        req.body
    );
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});

/**
 * @description delete a facilityAccess by id
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 * @returns {Promise<FacilityAccess>}
 */

exports.deleteFacilityAccess = catchAsync(async (req, res) => {
    await facilityAccessService.deleteFacilityAccessById(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
exports.approveFacilityAccess = catchAsync(async (req, res) => {
    const facilityAccess = await facilityAccessService.approveFacilityAccess(req.body);
    res.status(200).json({
        status: 'success',
        data: {
            facilityAccess,
        },
    });
});
