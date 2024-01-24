export const replyChatValidator = (replyChat) => {
  const errors = {};

  if (!replyChat.subject) errors.subject = "Subject is required";

  if (!replyChat.message) errors.message = "Message is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
