import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
  status: "idle",
  error: null,
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    expenseRequested(state) {
      state.status = "loading";
    },
    expenseReceived(state, action) {
      state.expenses = action.payload;
      state.status = "succeeded";
    },
    expenseRequestFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    expenseAdded(state, action) {
      state.expenses.push(action.payload);
    },
    expenseUpdated(state, action) {
      const { id, name } = action.payload;
      const existingExpense = state.expenses.find(
        (expense) => expense.id === id
      );
      if (existingExpense) {
        existingExpense.name = name;
      }
    },
    expenseDeleted(state, action) {
      const { id } = action.payload;
      const existingExpense = state.expenses.find(
        (expense) => expense.id === id
      );
      if (existingExpense) {
        state.expenses = state.expenses.filter((expense) => expense.id !== id);
      }
    },
  },
});

export const {
  expenseAdded,
  expenseUpdated,
  expenseDeleted,
  expenseReceived,
  expenseRequested,
  expenseRequestFailed,
} = expenseSlice.actions;

export default expenseSlice.reducer;
