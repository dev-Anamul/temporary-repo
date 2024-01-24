import React from 'react';
import {useDispatch} from 'react-redux';
import {
  useGet7DaysDataQuery,
  useGetAllCategoryExpenseQuery,
  useGetMonthlyExpenseQuery,
  useGetTotalOrTopExpenseQuery,
} from '../../features/dashboard/dashboard-slices';
import {addInitialData} from '../../features/initial-data-slices/initial-data-slices';

function useGetInitialData() {
  const dispatch = useDispatch();
  const {data: total} = useGetTotalOrTopExpenseQuery();
  const {data: area} = useGet7DaysDataQuery();
  const {data: bar} = useGetMonthlyExpenseQuery();
  const {data: category} = useGetAllCategoryExpenseQuery();

  console.log(area?.data);

  React.useEffect(() => {
    dispatch(
      addInitialData({
        total: total?.data,
        expenseArea: area?.data,
        monthlyExpense: bar?.data,
        expenseCategory: category?.data,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return false;
}

export default useGetInitialData;
