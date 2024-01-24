import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerSelected: false,
  selectedItemIds: [],
};

export const ocrExpenseSlice = createSlice({
  name: "ocrExpense",
  initialState,
  reducers: {
    toggleHeaderSelected: (state, action) => {
      state.headerSelected = action.payload;
    },
    setSelectedItemIds: (state, action) => {
      state.selectedItemIds = action.payload;
    },
    addSelectedItemIds: (state, action) => {
      state.selectedItemIds.push(action.payload);
    },
    removeSelectedItemIds: (state, action) => {
      state.selectedItemIds = state.selectedItemIds.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const {
  addSelectedItemIds,
  removeSelectedItemIds,
  setSelectedItemIds,
  toggleHeaderSelected,
} = ocrExpenseSlice.actions;

export default ocrExpenseSlice.reducer;
