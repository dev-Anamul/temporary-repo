const express = require('express');
const userController = require('../controllers/user-account');

const router = express.Router();

router.route('/').get(userController.getAllUsers).post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUserById)
    .delete(userController.deleteUserById);

router.route('/:property/:value').get(userController.getUserByProperty);

module.exports = router;
