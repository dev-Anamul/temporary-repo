const {createSlice} = require('@reduxjs/toolkit');

const initialState = {
  total: {},
  expenseArea: {},
  monthlyExpense: {},
  expenseCategory: {},
};

const initialDataSlice = createSlice({
  name: 'initial',
  initialState,
  reducers: {
    addInitialData: (state, action) => {
      state.total = action.payload.total;
      state.expenseArea = action.payload.expenseArea;
      state.monthlyExpense = action.payload.monthlyExpense;
      state.expenseCategory = action.payload.expenseCategory;
    },
  },
});

export const {addInitialData} = initialDataSlice.actions;

export default initialDataSlice.reducer;
