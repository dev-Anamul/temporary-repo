const router = require('express').Router();

// version route
router.use('/api/v1', require('./v1'));

module.exports = router;
