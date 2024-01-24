import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectMessage: {},
};

export const supportSlice = createSlice({
  name: "support",
  initialState,
  reducers: {
    setSelectMessage: (state, action) => {
      state.selectMessage = action.payload;
    },
    removeSelectMessage: (state) => {
      state.selectMessage = {};
    },
  },
});

export const { setSelectMessage, removeSelectMessage } = supportSlice.actions;

export const selectSelectMessage = (state) => state.support.selectMessage;

export default supportSlice.reducer;
