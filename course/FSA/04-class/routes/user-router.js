const express = require("express");
const userController = require("../controllers/user-controller");
const userValidator = require("../validators/user-validator");
const {
  checkValidationResult,
} = require("../middlewares/check-validation-result");

const router = express.Router();

// get all user
router
  .route("/")
  .get(userController.getUsers)
  .post(
    userValidator.createUserValidator,
    checkValidationResult,
    userController.createUser
  );

// get a user by id
router
  .route("/:id")
  .get(userController.getUserById)
  .patch(
    userValidator.updateUserValidator,
    checkValidationResult,
    userController.updateUser
  )
  .delete(userController.deleteUser);

module.exports = router;
