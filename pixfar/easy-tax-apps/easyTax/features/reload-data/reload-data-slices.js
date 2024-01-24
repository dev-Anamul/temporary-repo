const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  reload: 1,
  notificationReload: 1,
  internet: 1,
};

const reloadDataSlices = createSlice({
  name: 'reload',
  initialState,
  reducers: {
    reload: (state, action) => {
      state.reload = state.reload + 1;
    },
    notificationReload: (state, action) => {
      state.notificationReload = state.notificationReload + 1;
    },
    internet: (state, action) => {
      state.internet = state.internet + 1;
    },
  },
});

export const {reload, notificationReload, internet} = reloadDataSlices.actions;

export default reloadDataSlices.reducer;
