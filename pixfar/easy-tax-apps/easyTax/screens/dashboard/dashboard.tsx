/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useIsFocused, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import CustomAreaChart from '../../components/common/chart/area-chart';
import CustomBarChart from '../../components/common/chart/bar-chart';
import CustomPieChart from '../../components/common/chart/pie-chart';
import MainLayout from '../../components/common/main-layout/main-layout';
import TaxableTable from '../../components/table/Taxable-table';
import ExpenseTable from '../../components/table/expenseTable';
import CustomIncomeTable from '../../components/table/incomeTable';
import {
  useGet7DaysDataQuery,
  useGet7DaysIncomeQuery,
  useGetTotalOrTopExpenseQuery,
} from '../../features/dashboard/dashboard-slices';
import {useExpenseListForDashboardQuery} from '../../features/expense/expense-slice';
import {useGetDashboardIncomeListQuery} from '../../features/income/income-slice';
import colors from '../../global/color/color';

interface types {
  navigation: any;
}
const Dashboard = ({navigation}: types) => {
  const [refresh, setRefresh] = React.useState(false);
  const [last5, setLast5] = React.useState(null);
  const [incomeChart, setIncomeChart] = React.useState(null);
  const [overview, setOverview] = React.useState(null);
  const [last5Income, setLast5Income] = React.useState(null);
  const [tax, setTax] = React.useState(null);
  const {reload} = useSelector((state: any) => state.reload);

  // React.useEffect(() => {
  //   // Example: Fetch data from Firestore
  //   const fetchData = async () => {
  //     const collectionRef = firestore().collection('API');
  //     const snapshot = await collectionRef.get();

  //     snapshot.forEach(doc => {
  //       console.log('Document ID:', doc.id, ' => ', doc.data());
  //       // Process the fetched data here
  //     });
  //   };

  //   fetchData();
  // }, []);

  // * Get Data from Redux
  const {
    data: topExpense,
    isLoading: expenseLoading,
    refetch: topExpenseReload,
  } = useGetTotalOrTopExpenseQuery(null);

  const {data: listData, refetch: expenseReload} =
    useExpenseListForDashboardQuery(null);

  const {data: income, refetch: incomeReload} =
    useGetDashboardIncomeListQuery(null);

  const {data: expense7days, refetch: reloadExpense} =
    useGet7DaysDataQuery(null);
  const {data: income7days, refetch: reloadIncome} =
    useGet7DaysIncomeQuery(null);

  // * Hooks
  const route = useRoute();
  const focus = useIsFocused();

  // * Local Storage Data Reloader
  useEffect(() => {
    const getData = async () => {
      setLast5(
        JSON.parse((await AsyncStorage.getItem('5daysList')) || 'false'),
      );
      setIncomeChart(
        JSON.parse((await AsyncStorage.getItem('incomeChart')) || 'false'),
      );
      setOverview(
        JSON.parse((await AsyncStorage.getItem('overview7Days')) || 'false'),
      );
      setLast5Income(
        JSON.parse((await AsyncStorage.getItem('last5Income')) || 'false'),
      );
      setTax(JSON.parse((await AsyncStorage.getItem('tax')) || 'false'));
    };
    getData();
  }, [reload]);

  // * Close Apps Modal
  const closeApp = () => {
    Alert.alert(
      'Exit Fluxx App',
      'Are you sure you want to close the application ?',
      [
        {text: 'Yes', onPress: () => BackHandler.exitApp()},
        {text: 'No', onPress: () => console.log('NO Pressed')},
      ],
      {cancelable: true},
    );
  };

  // * Check Back Routing
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        if (route.name === 'Dashboard') {
          closeApp();
          return true;
        } else {
          return false;
        }
      };
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [route]),
  );

  // * Pull Reload Handler
  const handlePullReload = () => {
    setRefresh(true);

    expenseReload();
    incomeReload();
    topExpenseReload();
    reloadExpense();
    reloadIncome();

    setTimeout(() => {
      setRefresh(false);
    }, 400);
  };

  useEffect(() => {
    if (listData?.data?.length <= 0) {
      expenseReload();
    }
    if (income?.data?.length <= 0) {
      incomeReload();
    }
    if (!topExpense?.data) {
      topExpenseReload();
    }
    if (!expense7days?.data) {
      reloadExpense();
    }
    if (!income7days?.data) {
      reloadIncome();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focus]);

  return (
    <>
      {expenseLoading && (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={18} />
        </View>
      )}
      {!expenseLoading && (
        <ScrollView
          style={{width: '100%', backgroundColor: colors.bgc}}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View style={styles.container}>
            <MainLayout title="Expense">
              <View style={styles.amountContainer}>
                <Text style={styles.amountTitle}>
                  💰 Your Total Expenses 💰
                </Text>
                <Text style={styles.amount}>
                  ${topExpense?.data?.totalAmount?.toFixed(2) || 0}
                </Text>
              </View>
              <CustomPieChart
                topExpense={topExpense?.data?.topExpense?.totalAmount || 0}
              />
            </MainLayout>

            {overview && (
              <MainLayout title="Last 7 Days Overview">
                <ScrollView horizontal={true}>
                  <CustomAreaChart />
                </ScrollView>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 10,
                    justifyContent: 'center',
                    marginTop: 10,
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        height: 15,
                        width: 15,
                        marginRight: 10,
                        borderRadius: 4,
                        backgroundColor: 'red',
                      }}
                    />
                    <Text style={{color: colors.primary, fontSize: 16}}>
                      Expense
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        height: 15,
                        width: 15,
                        marginRight: 10,
                        borderRadius: 4,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{color: colors.primary, fontSize: 16}}>
                      Income
                    </Text>
                  </View>
                </View>
              </MainLayout>
            )}

            {incomeChart && (
              <MainLayout title="Income and Expenditure">
                <ScrollView horizontal={true}>
                  <View>
                    <CustomBarChart />
                  </View>
                </ScrollView>
                <View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginTop: 4,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: colors.primary,
                          marginRight: 8,
                        }}
                      />
                      <Text
                        style={{
                          width: 60,
                          height: 16,
                          color: colors.primary,
                        }}>
                        Income
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <View
                        style={{
                          height: 12,
                          width: 12,
                          borderRadius: 6,
                          backgroundColor: '#ED6665',
                          marginRight: 8,
                        }}
                      />
                      <Text
                        style={{
                          width: 60,
                          height: 16,
                          color: '#ED6665',
                        }}>
                        Expense
                      </Text>
                    </View>
                  </View>
                </View>
              </MainLayout>
            )}

            {tax && (
              <MainLayout title="Tax Slab">
                {listData?.data?.length <= 0 && (
                  <Text
                    style={{
                      padding: 10,
                      textAlign: 'center',
                      backgroundColor: '#ffd9d9',
                      marginTop: 10,
                      borderRadius: 5,
                      color: 'red',
                    }}>
                    Data Not Found
                  </Text>
                )}
                <ScrollView horizontal={true}>
                  <TaxableTable />
                </ScrollView>
              </MainLayout>
            )}

            {last5 && (
              <MainLayout title="Last 5 Expense">
                {listData?.data?.length <= 0 && (
                  <Text
                    style={{
                      padding: 10,
                      textAlign: 'center',
                      backgroundColor: '#ffd9d9',
                      marginTop: 10,
                      borderRadius: 5,
                      color: 'red',
                    }}>
                    Data Not Found
                  </Text>
                )}
                <ScrollView horizontal={true}>
                  {listData?.data?.length > 0 && (
                    <ExpenseTable
                      show={6}
                      dashboard={true}
                      list={listData?.data}
                    />
                  )}
                </ScrollView>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 10,
                    color: colors.primary,
                  }}
                  onPress={() => navigation.navigate('Expense List')}>
                  View More
                </Text>
              </MainLayout>
            )}

            {last5Income && (
              <MainLayout title="Last 5 Income">
                {income?.data?.length <= 0 && (
                  <Text
                    style={{
                      padding: 10,
                      textAlign: 'center',
                      backgroundColor: '#ffd9d9',
                      marginTop: 10,
                      borderRadius: 5,
                      color: 'red',
                    }}>
                    Data Not Found
                  </Text>
                )}
                {income?.data?.length > 0 && (
                  <>
                    <ScrollView horizontal={true}>
                      <CustomIncomeTable
                        dashboard={true}
                        show={6}
                        list={income?.data}
                      />
                    </ScrollView>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 10,
                        color: colors.primary,
                      }}
                      onPress={() => navigation.navigate('Income List')}>
                      View More
                    </Text>
                  </>
                )}
              </MainLayout>
            )}
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.bgc,
    padding: 20,
  },
  amountContainer: {
    backgroundColor: colors.bgc,
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  amountTitle: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.primary,
  },
  amount: {
    fontSize: 40,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.primary,
  },
  viewAllBtn: {
    textAlign: 'center',
    fontSize: 15,
    color: colors.primary,
    marginTop: 20,
    width: 80,
  },
});
