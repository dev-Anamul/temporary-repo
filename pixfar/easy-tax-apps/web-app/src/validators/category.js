// this validator is used to validate the user input for adding a new category
export const addCategoryValidator = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Category name is required";
  }

  if (!values?.claimablePercentage)
    errors.claimablePercentage = "Claimable percentage is required";

  if (!values?.depreciationRate)
    errors.depreciationRate = "Depreciation rate is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

// this validator is used to validate the user input for editing a category
export const editCategoryValidator = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Category name is required";
  }

  if (!values?.claimablePercentage)
    errors.claimablePercentage = "Claimable percentage is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
