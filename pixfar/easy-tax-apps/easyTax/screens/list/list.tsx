/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import MainLayout from '../../components/common/main-layout/main-layout';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {useGetExpenseListQuery} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';
import ExpenseList from './expense-list';

const List = () => {
  // ! Local State
  const [refresh, setRefresh] = React.useState(false);

  const {refetch: dataRefetch, isSuccess: dataDone} =
    useGetExpenseListQuery('');
  const {refetch: categoryRefetch, isSuccess: categoryDone} =
    useGetCategoriesQuery(null);

  const handlePullReload = () => {
    setRefresh(true);
    dataRefetch();
    categoryRefetch();

    if (categoryDone && dataDone) {
      setRefresh(false);
    }
  };

  return (
    <>
      <ScrollView
        style={{backgroundColor: colors.bgc}}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => handlePullReload()}
          />
        }>
        <View style={{padding: 10}}>
          <MainLayout title="Expense List">
            <ExpenseList />
          </MainLayout>
        </View>
      </ScrollView>
    </>
  );
};

export default List;
