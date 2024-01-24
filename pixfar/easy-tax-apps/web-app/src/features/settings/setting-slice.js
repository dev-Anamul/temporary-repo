import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  settings: [],
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default settingsSlice.reducer;
