// external dependencies
const express = require('express');
const swaggerUi = require('swagger-ui-express');

// internal dependencies
const AppError = require('../utils/AppError');
const swaggerDocument = require('../swagger.json');

// import routes
const authRoutes = require('./auth');
const facilityAccess = require('./facility-access');
const countryRoutes = require('./country');
const clientRoutes = require('./client');
const userRoutes = require('./userAccount');
const districtRoutes = require('./district');
const facilityRoutes = require('./facility');
const educationLevelRoutes = require('./education-level');
const homeLanguageRoutes = require('./home-language');
const loginHistoryRoutes = require('./login-history');
const nextOfKinRoutes = require('./next-of-kin');
const occupationRoutes = require('./occupation');
const provinceRoutes = require('./province');
const recoveryRequestRoutes = require('./recovery-request');
const townRoutes = require('./town');

// define top level router
const router = express.Router();

// controller level routes
router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/facility-access', facilityAccess);
router.use('/api/v1/country', countryRoutes);
router.use('/api/v1/client', clientRoutes);
router.use('/api/v1/users', userRoutes);
router.use('/api/v1/district', districtRoutes);
router.use('/api/v1/facility', facilityRoutes);
router.use('/api/v1/education-level', educationLevelRoutes);
router.use('/api/v1/home-language', homeLanguageRoutes);
router.use('/api/v1/login-history', loginHistoryRoutes);
router.use('/api/v1/next-of-kin', nextOfKinRoutes);
router.use('/api/v1/occupation', occupationRoutes);
router.use('/api/v1/province', provinceRoutes);
router.use('/api/v1/recovery-request', recoveryRequestRoutes);
router.use('/api/v1/town', townRoutes);

//  health check route
router.get('/health', (_req, res) => {
    res.status(200).json({ message: 'OK' });
});

//  swagger documentation
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//  global unhandle route handler
router.all('*', (req, _res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on thi server.`, 404));
});

module.exports = router;
