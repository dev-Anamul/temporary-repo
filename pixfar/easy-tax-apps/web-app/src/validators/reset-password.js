import validator from "validator";

export const resetPasswordValidator = (data) => {
  const errors = {};

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (!data.token) {
    errors.token = "Token is required";
  }

  if (!data.newPassword) {
    errors.newPassword = "Password is required";
  } else if (data.newPassword.length < 8) {
    errors.newPassword = "Password must be at least 6 characters";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  } else if (data.confirmPassword !== data.newPassword) {
    errors.confirmPassword = "Confirm Password must be same as password";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
