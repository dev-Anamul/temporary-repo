export const createExpenseValidator = (expense) => {
  const errors = {};

  if (!expense.expenseName) errors.expenseName = "Expense name is required";

  if (!expense.expenseType) errors.expenseType = "Expense type is required";

  if (!expense.totalAmount) errors.totalAmount = "Total amount is required";

  if (!expense.expenseDate) errors.expenseDate = "Expense date is required";

  if (!expense.filePath) errors.filePath = "File path is required";

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
