import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomeSources: [],
  status: "idle",
  error: null,
};

const incomeSourceSlice = createSlice({
  name: "incomeSource",
  initialState,
  reducers: {
    incomeSourceRequested(state) {
      state.status = "loading";
    },
    incomeSourceReceived(state, action) {
      state.incomeSources = action.payload;
      state.status = "succeeded";
    },
    incomeSourceRequestFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    incomeSourceAdded(state, action) {
      state.incomeSources.push(action.payload);
    },
    incomeSourceUpdated(state, action) {
      const { id, name } = action.payload;
      const existingIncomeSource = state.incomeSources.find(
        (incomeSource) => incomeSource.id === id
      );
      if (existingIncomeSource) {
        existingIncomeSource.name = name;
      }
    },
    incomeSourceDeleted(state, action) {
      const { id } = action.payload;
      const existingIncomeSource = state.incomeSources.find(
        (incomeSource) => incomeSource.id === id
      );
      if (existingIncomeSource) {
        state.incomeSources = state.incomeSources.filter(
          (incomeSource) => incomeSource.id !== id
        );
      }
    },
  },
});

export const {
  incomeSourceAdded,
  incomeSourceUpdated,
  incomeSourceDeleted,
  incomeSourceReceived,
  incomeSourceRequested,
  incomeSourceRequestFailed,
} = incomeSourceSlice.actions;

export default incomeSourceSlice.reducer;
