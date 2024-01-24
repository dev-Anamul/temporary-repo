import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  status: "idle",
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    categoryRequested(state) {
      state.status = "loading";
    },
    categoryReceived(state, action) {
      state.categories = action.payload;
      state.status = "succeeded";
    },
    categoryRequestFailed(state, action) {
      state.status = "failed";
      state.error = action.payload;
    },
    categoryAdded(state, action) {
      state.categories.push(action.payload);
    },
    categoryUpdated(state, action) {
      const { id, name } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        existingCategory.name = name;
      }
    },
    categoryDeleted(state, action) {
      const { id } = action.payload;
      const existingCategory = state.categories.find(
        (category) => category.id === id
      );
      if (existingCategory) {
        state.categories = state.categories.filter(
          (category) => category.id !== id
        );
      }
    },
  },
});

export const {
  categoryAdded,
  categoryUpdated,
  categoryDeleted,
  categoryReceived,
  categoryRequested,
  categoryRequestFailed,
} = categorySlice.actions;

export default categorySlice.reducer;
