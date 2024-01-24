const userServices = require("../services/user-service");
const { validationResult } = require("express-validator");

// get all users
exports.getUsers = (_req, res) => {
  const users = userServices.getUsers();
  res.status(200).json(users);
};

// get a user by id
exports.getUserById = (req, res) => {
  const user = userServices.getUserById(req.params.id);
  res.status(200).json(user);
};

// create a new user
exports.createUser = (req, res) => {
  const newUser = userServices.createUser(req.body);
  res.status(201).json(newUser);
};

// update a user
exports.updateUser = (req, res) => {
  const updatedUser = userServices.updateUser(req.params.id, req.body);
  res.status(200).json(updatedUser);
};

// delete a user
exports.deleteUser = (req, res) => {
  const deletedUser = userServices.deleteUser(req.params.id);
  res.status(200).json(deletedUser);
};
