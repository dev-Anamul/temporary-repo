export const taxSlabValidator = (formData) => {
  const errors = {};

  if (!formData?.min) errors.min = "Min is required";
  if (!formData?.max) errors.max = "Max is required";
  if (!formData?.rate) errors.rate = "Rate is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
