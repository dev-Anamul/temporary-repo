import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.token = action.payload.access_token;
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
