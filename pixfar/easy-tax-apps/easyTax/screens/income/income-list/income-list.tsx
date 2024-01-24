/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {Skeleton} from '@rneui/themed';
import MainLayout from '../../../components/common/main-layout/main-layout';
import Select from '../../../components/form-element/select/select';
import {navigate} from '../../../components/navigation-ref/navigation';
import CustomIncomeTable from '../../../components/table/incomeTable';
import {
  useGetIncomeListQuery,
  useGetIncomeTypeQuery,
} from '../../../features/income/income-slice';
import colors from '../../../global/color/color';

const IncomeList = () => {
  // * Local State
  const [categories, setCategories] = React.useState('');
  const [refresh, setRefresh] = React.useState(false);

  // * Hooks
  const {width} = useWindowDimensions();
  const windowWidth = Math.floor(width);

  // * Get Data from Redux
  const {
    data: income,
    isLoading,
    refetch,
    isSuccess,
  } = useGetIncomeListQuery('');
  const {
    data: typeData,
    isLoading: typeLoading,
    isSuccess: typeSuccess,
    refetch: incomeRefetch,
  } = useGetIncomeTypeQuery(null);

  // * Format Select Box Data
  const typeFormate = typeData?.data?.map((item: any) => {
    return {label: item?.name, value: item?.id};
  });

  const filteredData = () => {
    if (categories === '') {
      return income?.data;
    } else {
      return income?.data?.filter(
        (item: any) => Number(item?.incomeType) === Number(categories),
      );
    }
  };

  const handlePullReload = () => {
    setRefresh(false);

    refetch();
    incomeRefetch();

    if (isSuccess && !isLoading && typeSuccess && !typeLoading) {
      setRefresh(false);
    }
  };

  return (
    <>
      {/* {typeFormate && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )} */}
      {typeFormate?.length > 0 && (
        <ScrollView
          style={{backgroundColor: colors.bgc}}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View style={{padding: 10}}>
            <MainLayout title="Income List">
              <>
                <View>
                  <View style={styles.searchBox}>
                    <View
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        marginBottom: -10,
                        alignItems: 'center',
                      }}>
                      <Select
                        data={typeFormate}
                        label="Category"
                        w={'69%'}
                        value={categories}
                        setValue={setCategories}
                        showLabel={false}
                        selected={undefined}
                      />

                      <TouchableOpacity
                        onPress={() => navigate('Add Income')}
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
                            fontSize: 15,
                          }}>
                          <FontAwesome5Icon name="plus" size={15} /> &nbsp; Add
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  {categories && (
                    <TouchableOpacity
                      onPress={() => setCategories('')}
                      style={{
                        backgroundColor: colors.secondary,
                        // width: '15%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        borderRadius: 5,
                        marginBottom: 10,
                      }}>
                      <Text
                        style={{
                          color: colors.white,
                          flexDirection: 'row',
                          gap: 10,
                          alignItems: 'center',
                        }}>
                        {/* <FontAwesome5Icon name="times" size={15} color="#fff" />{' '} */}
                        Clear Filter
                      </Text>
                    </TouchableOpacity>
                  )}

                  {/* <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: -10,
                  alignItems: 'center',
                }}>
                <Select
                  data={incomeType}
                  label="Category"
                  w={categories ? '80%' : '100%'}
                  value={categories}
                  setValue={setCategories}
                  showLabel={false}
                  selected={undefined}
                />
                {categories && (
                  <TouchableOpacity
                    onPress={() => setCategories('')}
                    style={{
                      backgroundColor: colors.secondary,
                      width: '15%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: 40,
                      borderRadius: 5,
                    }}>
                    <Text>
                      <FontAwesome5Icon name="times" size={15} color="#fff" />
                    </Text>
                  </TouchableOpacity>
                )}
              </View> */}
                </View>
                <View style={styles.container}>
                  {filteredData()?.length <= 0 && (
                    <View
                      style={{
                        backgroundColor: '#FBD7DA',
                        padding: 10,
                        borderRadius: 5,
                        width: '100%',
                        marginTop: 10,
                      }}>
                      <Text style={{color: 'red', textAlign: 'center'}}>
                        No Data Found
                      </Text>
                    </View>
                  )}
                  <ScrollView horizontal={true}>
                    <View>
                      {filteredData()?.length > 0 && (
                        <CustomIncomeTable list={filteredData()} />
                      )}
                      {isLoading && (
                        <View>
                          <Skeleton width={windowWidth} height={40} />
                          <View style={{height: 40}} />
                          <Skeleton width={windowWidth} height={40} />
                          <View style={{height: 40}} />
                          <Skeleton width={windowWidth} height={40} />
                        </View>
                      )}
                    </View>
                  </ScrollView>
                </View>
              </>
            </MainLayout>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default IncomeList;

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

// const style = StyleSheet.create({
//   container: {flex: 1, paddingTop: 30, backgroundColor: '#fff'},

//   header: {height: 50, backgroundColor: colors.primary},

//   dataWrapper: {marginTop: -1},
// });

// const List = ({dataKey, data}: any) => {
//   return (
//     <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
//       <Text style={{width: 100, color: colors.primary, fontWeight: '500'}}>
//         {dataKey}
//       </Text>
//       <Text style={{color: 'gray'}}>: &nbsp; {data}</Text>
//     </View>
//   );
// };
