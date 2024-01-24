const { userDB } = require("../db/userDB");
const { v4: uuid } = require("uuid");
const { createError } = require("../utils/custom-error");

// get all users
exports.getUsers = () => {
  return userDB;
};

// get a user by id
exports.getUserById = (id) => {
  const user = userDB.find((user) => user.id === id);
  if (!user) createError("User not found", 404);
  return user;
};

// create a new user
exports.createUser = (newUser) => {
  const id = uuid();
  const user = { id, ...newUser };
  userDB.push(user);
  return user;
};

// update a user
exports.updateUser = (id, userPayload) => {
  const user = this.getUserById(id);

  // update user
  user.name = userPayload.name || user.name;
  user.email = userPayload.email || user.email;

  // return updated user
  return user;
};

// delete a user
exports.deleteUser = (id) => {
  const index = userDB.findIndex((user) => user.id === id);

  // if user not found
  if (index === -1) createError("User not found", 404);

  // delete user
  const deletedUser = userDB.splice(index, 1);

  // return deleted user
  return deletedUser;
};
