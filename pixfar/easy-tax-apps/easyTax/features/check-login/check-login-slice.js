const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  token: null,
  user: null,
  isLoggedIn: false,
};

const checkLoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginState: (state, action) => {
      state.token = action.payload;
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logOutState: state => {
      state.token = null;
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const {loginState, logOutState} = checkLoginSlice.actions;

export default checkLoginSlice.reducer;
