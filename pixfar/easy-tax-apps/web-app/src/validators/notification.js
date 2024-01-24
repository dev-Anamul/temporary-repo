export const createNotification = (notification) => {
  const errors = {};

  if (!notification.title) errors.title = "Title is required";

  if (!notification.description) errors.description = "Description is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
