const express = require('express');
const loginHistoryController = require('../controllers/login-history');

const router = express.Router();

router
    .route('/')
    .get(loginHistoryController.getAllLoginHistory)
    .post(loginHistoryController.createLoginHistory);

router
    .route('/:id')
    .get(loginHistoryController.getLoginHistory)
    .patch(loginHistoryController.updateLoginHistory)
    .delete(loginHistoryController.deleteLoginHistory);

module.exports = router;
