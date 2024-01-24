import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUserIds: [],
  headerCheckbox: false,
  status: "idle",
  error: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addSelectedUserIds(state, action) {
      state.selectedUserIds.push(action.payload);
    },
    removeSelectedUserIds(state, action) {
      state.selectedUserIds = state.selectedUserIds.filter(
        (userId) => userId !== action.payload
      );
    },
    setSelectedUserIds(state, action) {
      state.selectedUserIds = action.payload;
    },
    toggleHeaderCheckbox(state, action) {
      state.headerCheckbox = action.payload;
    },
  },
});

export const {
  addSelectedUserIds,
  removeSelectedUserIds,
  toggleHeaderCheckbox,
  setSelectedUserIds,
} = userSlice.actions;

export default userSlice.reducer;
