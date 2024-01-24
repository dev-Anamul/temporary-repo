const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  email: null,
};

const resetPasswordEmail = createSlice({
  name: 'email',
  initialState,
  reducers: {
    updateEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const {updateEmail} = resetPasswordEmail.actions;

export default resetPasswordEmail.reducer;
