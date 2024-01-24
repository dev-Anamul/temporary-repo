/**
 *
 * @param {string} status
 * @returns
 */
export const getButtonColor = (status) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "bg-green-700 hover:bg-green-600";
    case "pending":
      return "bg-yellow-700 hover:bg-yellow-600";
    case "rejected":
      return "bg-red-700 hover:bg-red-600";
    default:
      return "";
  }
};

/**
 *
 * @param {string} status
 * @returns
 */

export const getTextColor = (status) => {
  switch (status.toLowerCase()) {
    case "approved":
      return "text-green-600";
    case "pending":
      return "text-yellow-600";
    case "rejected":
      return "text-red-600";
    default:
      return "";
  }
};
