/* eslint-disable react-native/no-inline-styles */
import {Skeleton} from '@rneui/themed';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Select from '../../components/form-element/select/select';
import {navigate} from '../../components/navigation-ref/navigation';
import ExpenseTable from '../../components/table/expenseTable';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {useGetExpenseListQuery} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';

const ExpenseList = () => {
  // * Local State
  const [categories, setCategories] = React.useState('');
  const [filteredData, setFilteredData] = React.useState([]);

  // * Get Data from Redux
  const {data: list, isLoading} = useGetExpenseListQuery('');
  const {data: categoryData} = useGetCategoriesQuery(null);

  // * Hooks
  const {width} = useWindowDimensions();
  const windowWidth = Math.floor(width);

  // * Formate Data for Expense Category Select Field
  const formatCategory =
    categoryData?.data?.length > 0 &&
    categoryData?.data?.map((item: any) => {
      return {label: item?.name, value: item?._id};
    });

  React.useEffect(() => {
    if (categories === '') {
      setFilteredData(list?.data);
    } else {
      setFilteredData(
        list?.data?.filter((item: any) => item?.expenseType === categories),
      );
    }
  }, [list?.data, categories]);

  return (
    <>
      {categoryData?.data?.length <= 0 && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {categoryData?.data?.length > 0 && (
        <>
          <View>
            <View style={styles.searchBox}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: -7,
                  alignItems: 'center',
                }}>
                <Select
                  data={formatCategory?.length > 0 && formatCategory}
                  label="Category"
                  w={'69%'}
                  value={categories}
                  setValue={setCategories}
                  showLabel={false}
                  selected={undefined}
                />
                <TouchableOpacity
                  onPress={() => navigate('Expense')}
                  style={{
                    backgroundColor: colors.primary,
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    paddingVertical: 8,
                  }}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: colors.white,
                      fontSize: 14,
                    }}>
                    <FontAwesome5Icon name="plus" size={14} /> &nbsp; Add New
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {categories && (
                <TouchableOpacity
                  onPress={() => setCategories('')}
                  style={{
                    backgroundColor: colors.secondary,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 40,
                    borderRadius: 5,
                    marginBottom: 5,
                  }}>
                  <Text style={{color: 'white'}}>Clear Filter</Text>
                </TouchableOpacity>
              )}
            </View>
            {filteredData?.length <= 0 && (
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
          </View>
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                {filteredData?.length > 0 && (
                  <ExpenseTable list={filteredData} />
                )}
                {isLoading && (
                  <View>
                    <Skeleton width={windowWidth} height={35} />
                    <View style={{height: 35}} />
                    <Skeleton width={windowWidth} height={35} />
                    <View style={{height: 35}} />
                    <Skeleton width={windowWidth} height={35} />
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};

export default ExpenseList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchBox: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
});
