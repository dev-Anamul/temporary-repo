/* eslint-disable react-native/no-inline-styles */
import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/form-element/input/input';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {resetExpense} from '../../features/expense/add-expense-slices';
import {useBulkExpenseMutation} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';
import {addDecimalInNumber} from '../../utils/Dimension/Dimension';
import actualTaxChargeRate from '../../utils/actual-tax-eharge-rate/actualTaxChargeRate';
import {
  dateFormateForExpense,
  formateDate,
} from '../../utils/date-formater/date-formater';

const ExpenseForm = () => {
  // * Hooks
  const dispatch = useDispatch();
  const linkTo = useLinkTo();

  // * Redux
  const expenseData = useSelector((state: any) => state?.expense);
  const ocrExpense =
    expenseData?.expense?.length >= 0 && expenseData?.expense[0]?.payload[0];

  const [bulkExpense, {isLoading, isSuccess, error}] = useBulkExpenseMutation();
  const {data: category} = useGetCategoriesQuery(undefined);
  const loginUser = useSelector((state: any) => state?.login?.user);

  // * User Data
  const user = loginUser?.user;

  // * Check GST
  const gst = ocrExpense?.GST || ocrExpense?.GSTAmount;

  // * OCR Amount
  const ocrAmount =
    ocrExpense?.Total?.value ||
    ocrExpense?.TOTAL?.value ||
    ocrExpense?.SubTotal?.value ||
    ocrExpense?.Subtotal?.value;

  // * Fiend Amount
  const amountShort =
    ocrAmount?.split('$')[1] ||
    ocrAmount?.split('NZD')[1]?.split(',')[0] +
      ocrAmount?.split('NZD')[1]?.split(',')[1] ||
    ocrAmount?.split(',')[0] + ocrAmount?.split(',')[1];

  // * REGEX Validator
  const regexPattern = /^\s*\d+(\.\d+)?\s*$/;
  const isNumber = regexPattern.test(amountShort);

  // * OCR Status
  const ocrStatus =
    expenseData?.expense?.length >= 0 && expenseData?.expense[0]?.status;
  // * OCR Image
  const ocrImage =
    (expenseData?.expense?.length >= 0 && expenseData?.expense[0]?.url) ||
    expenseData?.manualImage;

  // * Local State
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [amount, setAmount] = React.useState(amountShort || '');
  const [expenseDate, setExpenseDate] = React.useState(new Date());
  const [isGSTClaimable, setIsGSTClaimable] = React.useState(
    gst ? true : false,
  );
  const [description, setDescription] = React.useState('');
  const [newAdd, setNewAdd] = React.useState(false);

  // * Fiend Letter from description
  // const descMin5 = description?.split(' ').length;

  // * Format data for Category Select box
  const categoryName = () => {
    return category?.data?.filter(
      (item: any) => item?.id === expenseData?.expenseType,
    )[0];
  };

  // * Submit Handler
  const handleSubmit = () => {
    if (!amount || !expenseDate || !ocrImage || !description) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
      });
    } else if (description?.length < 5) {
      Toast.show({
        type: 'error',
        text1: 'Description should be at least 5 characters long',
      });
    } else {
      const formData = {
        totalAmount: addDecimalInNumber(amount),
        // expenseName: name ? name : '',
        expenseDate: dateFormateForExpense(expenseDate),
        expenseType: expenseData.expenseType,
        filePath: ocrImage,
        isGSTClaimable,
        description,
        userId: user?.id,
        status:
          ocrStatus === 'success' && isNumber && amount < 1000
            ? 'approved'
            : 'pending',
      };

      bulkExpense({expenses: [formData]});
    }
  };

  console.log('error =>', error);

  // * Reset Form
  React.useEffect(() => {
    if (isSuccess) {
      setDescription('');
      setAmount('');
      setExpenseDate(new Date());
      setIsGSTClaimable(false);
      dispatch(resetExpense());
      if (amount >= 1000 && !newAdd) {
        linkTo('/Assets List');
      }
      if (newAdd) {
        linkTo('/Expense');
      }
      if (!newAdd) {
        linkTo('/Expense List');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, dispatch]);

  // * Handle OCR Status
  React.useEffect(() => {
    if (ocrStatus === 'success' && isNumber) {
      Toast.show({
        type: 'success',
        text1: 'Details captured successfully',
      });
      // } else if (ocrStatus === 'failed') {
    } else {
      Toast.show({
        type: 'error',
        text1: 'Unable to process your slip, please enter the details manually',
      });
    }
  }, [ocrStatus, isNumber]);

  // * Handle Submit Then Redirect List Page
  const handleJustSubmit = () => {
    setNewAdd(false);
    handleSubmit();
  };

  // * Handle Submit Then Redirect New Expense Add Page
  const handleSubmitAndNew = () => {
    setNewAdd(true);
    handleSubmit();
  };

  const gsCalculate = () => {
    if (isGSTClaimable) {
      return (
        (addDecimalInNumber(amount) -
          (actualTaxChargeRate(0.15) * addDecimalInNumber(amount)).toFixed(2)) *
        addDecimalInNumber(expenseData?.gst)
      ).toFixed(2);
    } else {
      return (addDecimalInNumber(amount) * expenseData?.gst).toFixed(2);
    }
  };

  console.log('Expense Form => ', expenseData);

  // * Return TSX
  return (
    <>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator size={20} />
        </View>
      )}
      {!isLoading && (
        <KeyboardAwareScrollView
          style={{flex: 1, backgroundColor: colors.white}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 30,
            }}>
            {!isNumber && (
              <View
                style={{
                  borderLeftWidth: 5,
                  borderColor: 'red',
                  width: '80%',
                  paddingHorizontal: 10,
                  paddingVertical: 15,
                  backgroundColor: '#fc020215',
                  marginBottom: 5,
                }}>
                <Text style={{color: 'red', fontSize: 13}}>
                  Failed to process the slip, please enter the details manually.
                </Text>
              </View>
            )}
            <View style={{width: '80%'}}>
              <Input
                disabled
                value={categoryName()?.name}
                required
                label="Expense Category"
              />

              <View style={{marginBottom: 10}}>
                <Text style={{color: colors.text}}>
                  Expense Date <Text style={{color: 'red'}}>*</Text>
                </Text>
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
                  {formateDate(expenseDate)}
                </Text>

                <DatePicker
                  modal
                  open={open}
                  date={expenseDate}
                  onConfirm={value => {
                    setOpen(false);
                    setExpenseDate(value);
                  }}
                  mode="date"
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </View>
              {ocrStatus === 'success' && isNumber && (
                <Input
                  disabled
                  value={addDecimalInNumber(amount)}
                  required
                  label="Amount"
                />
              )}
              {(!isNumber || (!isNumber && expenseData?.isTimeUp)) && (
                <View>
                  <Text style={{marginBottom: 2, color: colors.text}}>
                    Expense Amount <Text style={{color: 'red'}}>*</Text>
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
              )}
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {!isGSTClaimable && (
                  <MatIcons
                    name="check-box-outline-blank"
                    size={20}
                    onPress={() =>
                      amount === '' && !isGSTClaimable
                        ? Toast.show({
                            type: 'error',
                            text1: 'Please add an amount',
                          })
                        : setIsGSTClaimable(true)
                    }
                    color={colors.primary}
                  />
                )}
                {isGSTClaimable && (
                  <MatIcons
                    name="check-box"
                    size={20}
                    onPress={() => setIsGSTClaimable(false)}
                    color={colors.primary}
                  />
                )}
                <Text style={{marginBottom: 3, color: colors.text}}>
                  Is there GST Included in this price ?
                </Text>
              </View>
              {isGSTClaimable && (
                <>
                  <Input
                    disabled
                    value={
                      '$' +
                      (
                        actualTaxChargeRate(0.15) * addDecimalInNumber(amount)
                      ).toFixed(2)
                    }
                    label="GST Amount"
                  />
                  <Text
                    style={{
                      color: colors.text,
                      fontSize: 13,
                      marginTop: -10,
                      marginBottom: 10,
                    }}>
                    GST Included 15% of the amount
                  </Text>
                </>
              )}
              {amount && (
                <Input
                  disabled
                  value={`${expenseData?.gst * 100}%`}
                  label="Claimable Income Percentage"
                />
              )}
              {amount && (
                <Input
                  disabled
                  value={`$${gsCalculate()}`}
                  label="Claimable Amount"
                />
              )}
              <View>
                <Text style={{marginBottom: 2, color: colors.text}}>
                  Description <Text style={{color: 'red'}}>*</Text>
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
                  placeholder="Description"
                  placeholderTextColor="#1d5276"
                  multiline={true}
                  numberOfLines={5}
                  value={description}
                  onChangeText={text => setDescription(text)}
                />
              </View>
              <Image
                style={{
                  height: 500,
                  borderWidth: 1,
                  borderColor: colors.primary,
                  marginTop: 20,
                  objectFit: 'contain',
                }}
                source={{uri: ocrImage}}
              />
              <TouchableOpacity
                onPress={handleJustSubmit}
                style={{
                  backgroundColor: colors.primary,
                  marginTop: 20,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', textAlign: 'center'}}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSubmitAndNew}
                style={{
                  backgroundColor: colors.secondary,
                  marginTop: 5,
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', textAlign: 'center'}}>
                  Submit and New
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default ExpenseForm;
