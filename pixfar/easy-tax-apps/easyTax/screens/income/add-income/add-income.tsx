/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
import Select from '../../../components/form-element/select/select';
import {ird} from '../../../enum/income-type';
import {
  useGetIncomeTypeQuery,
  usePostIncomeMutation,
} from '../../../features/income/income-slice';
import colors from '../../../global/color/color';
import {addDecimalInNumber} from '../../../utils/Dimension/Dimension';
import {formateDate} from '../../../utils/date-formater/date-formater';

const AddIncome = ({navigation}: any) => {
  const date = new Date();

  const [open, setOpen] = React.useState(false);
  const [staredEarning, setStaredEarning] = React.useState(false);
  const [endIncome, setEndIncome] = React.useState(false);
  const [incomeTypes, setIncomeTypes] = React.useState('');
  const [incomeSource, setIncomeSource] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [afterDate, setAfterDate] = React.useState(date);
  const [endDate, setEndDate] = React.useState(date);
  const [refresh, setRefresh] = React.useState(false);

  const [postIncome, {isLoading, isSuccess, status}] = usePostIncomeMutation();
  const {
    data,
    isLoading: typeLoading,
    isSuccess: typeSuccess,
    refetch,
  } = useGetIncomeTypeQuery(null);

  const user = useSelector((state: any) => state?.login?.user)?.user;

  // * Format Select Box Data
  const typeFormate = data?.data?.map((item: any) => {
    return {label: item?.name, value: item?.id};
  });

  // * Handle Submit
  const handleSubmit = () => {
    if (!user?.irdNumber) {
      Toast.show({
        type: 'error',
        text1: 'Please add your IRD number',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } else if (staredEarning) {
      postIncome({
        incomeSource: incomeSource,
        amount: addDecimalInNumber(amount),
        description: 'house rent income',
        startDate: afterDate.toISOString(),
        incomeDate: new Date().toISOString(),
        incomeType: incomeTypes,
      });
    } else if (endIncome) {
      postIncome({
        incomeSource: incomeSource,
        amount: addDecimalInNumber(amount),
        description: 'house rent income',
        endDate: endDate.toISOString(),
        incomeDate: new Date().toISOString(),
        incomeType: incomeTypes,
      });
    } else if (staredEarning && endIncome) {
      postIncome({
        incomeSource: incomeSource,
        amount: addDecimalInNumber(amount),
        description: 'house rent income',
        startDate: afterDate.toISOString(),
        endDate: endDate.toISOString(),
        incomeDate: new Date().toISOString(),
        incomeType: incomeTypes,
      });
    } else {
      if (!incomeSource || !amount || !incomeTypes) {
        Toast.show({
          type: 'error',
          text1: 'All fields are required',
          visibilityTime: 2000,
          autoHide: true,
          topOffset: 30,
          bottomOffset: 40,
        });
      } else {
        postIncome({
          incomeSource: incomeSource,
          amount: addDecimalInNumber(amount),
          description: 'house rent income',
          startDate: afterDate.toISOString(),
          endDate: endDate.toISOString(),
          incomeDate: new Date().toISOString(),
          incomeType: incomeTypes,
        });
      }
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      setIncomeSource('');
      setIncomeTypes('');
      setAmount('');
      setAfterDate(new Date());
      setEndDate(new Date());
      navigation.navigate('Income List');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, status]);

  // * Type Refetch
  const handlePullReload = () => {
    setRefresh(true);
    refetch();

    if (!typeLoading && typeSuccess) {
      setRefresh(false);
    }
  };

  return (
    <>
      {typeLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      <View style={{backgroundColor: colors.white, flex: 1}}>
        {!user?.irdNumber && (
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                borderLeftWidth: 5,
                borderColor: 'red',
                paddingHorizontal: 10,
                paddingVertical: 15,
                backgroundColor: '#fc020215',
                marginTop: 15,
              }}>
              <Text style={{color: 'red', fontSize: 13}}>
                Please add IRD number before adding Income
              </Text>
            </View>
          </View>
        )}
        {typeFormate?.length > 0 && (
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={refresh}
                onRefresh={() => handlePullReload()}
              />
            }>
            <View style={{padding: 20}}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: -10,
                }}>
                <Select
                  data={ird}
                  label="Income Source"
                  w="100%"
                  value={incomeSource}
                  setValue={setIncomeSource}
                  showLabel={true}
                />
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginBottom: -10,
                }}>
                <Select
                  data={typeFormate}
                  label="Income Type"
                  w="100%"
                  value={incomeTypes}
                  setValue={setIncomeTypes}
                  showLabel={true}
                />
              </View>

              <View style={{marginBottom: 10}}>
                <Text style={{marginBottom: 2, color: colors.text}}>
                  Before tax I will earn <Text style={{color: 'red'}}>*</Text>
                </Text>
                <TextInput
                  style={{
                    borderColor: '#1d5276',
                    borderRadius: 3,
                    borderWidth: 1,
                    marginTop: 2,
                    padding: Platform.OS === 'android' ? 5 : 10,
                    paddingHorizontal: 10,
                    width: '100%',
                    color: '#1d5276',
                  }}
                  placeholder="Type Amount"
                  placeholderTextColor="#1d5276"
                  value={addDecimalInNumber(amount)}
                  onChangeText={text => setAmount(text)}
                  keyboardType="decimal-pad"
                />
              </View>

              <List
                title="I started earning this income after APR 2023"
                value={staredEarning}
                handler={(isOn: any) => {
                  {
                    setStaredEarning(isOn);
                  }
                }}
              />

              {staredEarning && (
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      borderColor: '#1d5276',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 5,
                      padding: 8,
                      width: '100%',
                      color: 'black',
                    }}
                    onPress={() => setOpen(true)}>
                    {formateDate(afterDate)}
                  </Text>

                  <DatePicker
                    modal
                    open={open}
                    date={afterDate}
                    onConfirm={value => {
                      setOpen(false);
                      setAfterDate(value);
                    }}
                    mode="date"
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              )}

              <List
                title="This income has fixed end date"
                value={endIncome}
                handler={(isOn: any) => {
                  {
                    setEndIncome(isOn);
                  }
                }}
              />

              {endIncome && (
                <View style={{marginBottom: 10}}>
                  <Text
                    style={{
                      borderColor: '#1d5276',
                      borderRadius: 5,
                      borderWidth: 1,
                      marginTop: 5,
                      padding: 8,
                      width: '100%',
                      color: 'black',
                    }}
                    onPress={() => setOpen(true)}>
                    {formateDate(endDate)}
                  </Text>

                  <DatePicker
                    modal
                    open={open}
                    date={endDate}
                    onConfirm={value => {
                      setOpen(false);
                      setEndDate(value);
                    }}
                    mode="date"
                    onCancel={() => {
                      setOpen(false);
                    }}
                  />
                </View>
              )}

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  backgroundColor: colors.primary,
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                }}>
                <Text style={{color: colors.white, textAlign: 'center'}}>
                  {isLoading ? 'Loading...' : 'Add Income'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default AddIncome;

const List = ({value, handler, title}: any) => {
  return (
    <View
      style={{
        backgroundColor: colors.bgc,
        padding: 10,
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
      }}>
      <ToggleSwitch
        isOn={value}
        size="medium"
        onColor="green"
        offColor={colors.primary}
        labelStyle={{color: 'black', fontWeight: '900'}}
        onToggle={isOn => handler(isOn)}
      />
      <Text style={{color: colors.primary}}> {title}</Text>
    </View>
  );
};
