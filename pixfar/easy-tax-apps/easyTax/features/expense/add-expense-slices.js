const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  expenseType: null,
  expense: [],
  gst: null,
  isTimeUp: false,
  manualImage: null,
};

const expenseSlices = createSlice({
  name: 'expense',
  initialState,
  reducers: {
    expenseState: (state, action) => {
      state.expenseType = action.payload.expenseType;
      state.expense = action.payload.expense;
      state.gst = action.payload.gst;
      state.isTimeUp = action.payload.isTimeUp;
      state.manualImage = action.payload.manualImage;
    },

    resetExpense: state => {
      state.expenseType = null;
      state.expense = [];
      state.gst = null;
      state.isTimeUp = false;
      state.manualImage = null;
    },
  },
});

export const {expenseState, resetExpense} = expenseSlices.actions;

export default expenseSlices.reducer;
