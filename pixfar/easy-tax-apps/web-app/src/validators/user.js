export class UserValidator {
  constructor(validator) {
    this.validator = validator;
  }
  /**
   * ------------ Validate create user data ------------
   * @param {object} userData
   * @returns  {object} {errors, isValid}
   */

  userCreateValidator = (userData) => {
    const errors = {};

    // Validate first name
    if (!userData.firstName) errors.firstName = "First name is required";
    // else if (!this.validator.isAlpha(userData.firstName))
    //   errors.firstName = "First name is not valid";
    else if (userData.firstName.length < 2)
      errors.firstName = "First name is too short";
    else if (userData.firstName.length > 20)
      errors.firstName = "First name is too long";

    // Validate last name
    if (!userData.lastName) errors.lastName = "Last name is required";
    else if (!this.validator.isAlpha(userData.lastName))
      errors.lastName = "Last name is not valid";
    else if (userData.lastName.length < 2)
      errors.lastName = "Last name is too short";
    else if (userData.lastName.length > 20)
      errors.lastName = "Last name is too long";

    // Validate mobile
    if (!userData.mobile) errors.mobile = "Mobile is required";
    else if (!this.validator.isMobilePhone(userData.mobile))
      errors.mobile = "Mobile is not valid";

    // Validate email
    if (!userData.email) errors.email = "Email is required";
    else if (!this.validator.isEmail(userData.email))
      errors.email = "Email is not valid";

    // Validate date of birth
    if (!userData.dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    else if (!this.validator.isDate(userData.dateOfBirth))
      errors.dateOfBirth = "Date of birth is not valid";
    else if (new Date(userData.dateOfBirth) > new Date())
      errors.dateOfBirth = "Date of birth is not valid";

    // Validate password
    if (!userData.password) errors.password = "Password is required";

    // Validate terms and conditions
    if (!userData.termsAndConditions)
      errors.termsAndConditions = "Terms and conditions is required";

    // Validate status
    if (!userData?.status) errors.status = "Status is required";

    // Validate role
    if (!userData?.role) errors.role = "Role is required";

    return {
      errors,
      isValid: Object.keys(errors).length === 0,
    };
  };

  /**
   * ------------ Validate login data ------------
   * @param {object} loginData
   * @returns  {object} {errors, isValid}
   * */
}
