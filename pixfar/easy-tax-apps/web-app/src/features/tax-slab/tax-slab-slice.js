import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taxSlab: [],
  loading: false,
  error: null,
};

const taxSlabSlice = createSlice({
  name: "taxSlab",
  initialState,
  reducers: {
    test: (state, action) => {
      state.taxSlab = action.payload;
    },
  },
});

export const { test } = taxSlabSlice.actions;
