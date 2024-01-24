/* eslint-disable react-native/no-inline-styles */
import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';
import MainLayout from '../../components/common/main-layout/main-layout';
import Select from '../../components/form-element/select/select';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {expenseState} from '../../features/expense/add-expense-slices';
import colors from '../../global/color/color';
import filePermission from '../../utils/permissions/filePermission';

const AddExpense = () => {
  // * Hokes
  const linkTo = useLinkTo();
  const dispatch = useDispatch();
  const {height} = useWindowDimensions();

  // * Redux
  const expenseData = useSelector((state: any) => state.expense);

  // * Get Data From Redux
  const {
    data: expenseCategory,
    isLoading: categoryLoading,
    refetch,
    isSuccess,
  } = useGetCategoriesQuery(null);

  // * Local State
  const [category, setCategory] = React.useState('');
  const [refresh, setRefresh] = React.useState(false);

  // * Formate Data for Expense Category Select Field
  const formatCategory =
    expenseCategory?.data &&
    expenseCategory?.data?.map((item: any) => {
      return {label: item?.name, value: item?._id};
    });

  // * Next Button Handler
  const handleNext = () => {
    if (!category) {
      Toast.show({
        type: 'error',
        text1: 'Please select a category',
      });
    } else {
      dispatch(
        expenseState({
          ...expenseData,
          expenseType: category,
          gst: expenseCategory?.data?.filter(
            (item: any) => item._id === category,
          )[0]?.claimablePercentage,
        }),
      );
      linkTo('/UploadImage');
    }
  };

  React.useEffect(() => {
    filePermission();
  }, []);

  const handlePullReload = () => {
    setRefresh(true);

    refetch();

    if (!categoryLoading && isSuccess) {
      setRefresh(false);
    }
  };

  return (
    <>
      {categoryLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size={30} />
        </View>
      )}

      {!categoryLoading && (
        <KeyboardAwareScrollView
          style={{
            backgroundColor: colors.bgc,
          }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.bgc,
              alignItems: 'center',
              justifyContent: 'center',
              height: height - 115,
            }}>
            <View style={{padding: 20, width: '100%'}}>
              <MainLayout title="Add Expense">
                <Select
                  label="Expense Category"
                  w={'100%'}
                  data={formatCategory}
                  value={category}
                  setValue={setCategory}
                  showLabel={true}
                  selected={undefined}
                />

                {category && (
                  <TouchableOpacity
                    onPress={handleNext}
                    style={{
                      padding: 10,
                      marginTop: 10,
                      backgroundColor: colors.primary,
                      borderRadius: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 16,
                        color: colors.white,
                        textAlign: 'center',
                      }}>
                      Next
                    </Text>
                  </TouchableOpacity>
                )}
              </MainLayout>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default AddExpense;
