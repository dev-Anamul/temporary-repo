export class AuthValidator {
  constructor(validator) {
    this.errors = {};
    this.validator = validator;
  }

  validateLoginData(user) {
    if (!user.email) this.errors.email = "Email is required";
    else if (!this.validator.isEmail(user.email))
      this.errors.email = "Invalid email";
    if (!user.password) this.errors.password = "Password is required";

    return {
      errors: this.errors,
      isValid: Object.keys(this.errors).length === 0,
    };
  }

  forgotPassword(user) {
    if (!user.email) this.errors.email = "Email is required";
    else if (!this.validator.isEmail(user.email))
      this.errors.email = "Invalid email";

    return {
      errors: this.errors,
      isValid: Object.keys(this.errors).length === 0,
    };
  }
}
