/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-toast-message';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {useEditExpenseMutation} from '../../features/expense/expense-slice';
import {usePostOcrMutation} from '../../features/ocr/ocr-slice';
import colors from '../../global/color/color';
import {addDecimalInNumber} from '../../utils/Dimension/Dimension';
import actualTaxChargeRate from '../../utils/actual-tax-eharge-rate/actualTaxChargeRate';
import {
  dateFormateForExpense,
  formateDate,
} from '../../utils/date-formater/date-formater';
import Input from '../form-element/input/input';
import Select from '../form-element/select/select';

const EditExpense = ({expenseItem, setEditModalOpen}: any) => {
  // ! Hokes
  const [editExpense, {isSuccess, isError, isLoading: addLoading}] =
    useEditExpenseMutation();
  const [
    postOcr,
    {isLoading: ocrLoading, data: ocrData, isSuccess: ocrSuccess},
  ] = usePostOcrMutation();

  // ! Local State
  const [file, setFile] = React.useState({url: '', type: ''});
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');
  const [amount, setAmount] = React.useState(expenseItem?.totalAmount);
  const [expenseDate, setExpenseDate] = React.useState(
    expenseItem?.expenseDate,
  );
  const [isGSTClaimable, setIsGSTClaimable] = React.useState(
    expenseItem?.isGSTClaimable,
  );
  const [description, setDescription] = React.useState(
    expenseItem?.description,
  );

  // * Login User Data
  const loginUser = useSelector((state: any) => state?.login?.user);
  const user = loginUser?.user;

  // * Update Handler
  const handleOnSubmit = () => {
    if (file?.url && !ocrData?.filePath) {
      Toast.show({
        type: 'error',
        text1: 'Please confirm your slip',
      });
      Toast.show({
        type: 'error',
        text1: 'Please add an amount',
      });
      // Alert.alert('Please Confirm your slip');
    } else {
      const formData = {
        userId: user?.id,
        description,
        totalAmount: addDecimalInNumber(amount),
        isGSTClaimable,
        expenseDate: dateFormateForExpense(expenseDate) || '2023-09-14',
        expenseName: 'Expense Name',
        expenseType: category,
        status: 'pending',

        gstAmount: expenseItem?.gstAmount,
        claimableAmount: expenseItem?.claimableAmount,
        ocrAmount: expenseItem?.ocrAmount,
        filePath: ocrData?.filePath ? ocrData?.filePath : expenseItem?.filePath,
        //
      };

      editExpense({data: formData, id: expenseItem?.id});
    }
  };

  // * ------- Camera -----------------------------------------------------------
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(500);

  // ! Choose Image From File Handler
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setFile({url: imageUri, type: response.assets?.[0]?.type});
      }
    });
  };

  // ! Pick image from Camera Handler
  const handleCameraPicker = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
    })
      .then(image => {
        setFile({url: image.path, type: image.mime});
        setHeight(height);
        setWidth(width);
      })
      .catch(error => {
        console.log(error);
      });
  };

  // ! Upload Image Handler
  const handleEditImageUpload = () => {
    const formData = new FormData();

    formData.append('filePath', {
      uri: file?.url && file?.url,
      type: file?.type ? file?.type : '',
      name: 'expense.jpeg',
    });

    if (true) {
      postOcr(formData);
    }
  };

  // * -------Camera End-----------------------------------------------------------

  // ! Get Data From Redux
  const {data: expenseCategory, isLoading: categoryLoading} =
    useGetCategoriesQuery(null);

  // ! Get Selected Category
  const selectedCategory = expenseCategory?.data?.filter(
    (item: any) => item?._id === expenseItem?.expenseType,
  )[0];

  // ! Formate Data for Expense Category Select Field
  const formatCategory =
    expenseCategory?.data &&
    expenseCategory?.data?.map((item: any) => {
      return {label: item?.name, value: item?._id};
    });

  useEffect(() => {
    if (isSuccess) {
      Toast.show({
        type: 'success',
        text1: 'Expense updated successfully',
      });
      setEditModalOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  useEffect(() => {
    if (ocrSuccess && !ocrLoading) {
      setFile({url: '', type: ''});
      Toast.show({
        type: 'success',
        text1: 'Image data read successfully',
      });
    }
  }, [ocrSuccess, ocrLoading]);

  useEffect(() => {
    if (isError) {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong',
      });
    }
  }, [isError]);

  const gsCalculate = () => {
    if (isGSTClaimable) {
      return (
        (addDecimalInNumber(amount) -
          (actualTaxChargeRate(0.15) * addDecimalInNumber(amount)).toFixed(2)) *
        Number(selectedCategory?.claimablePercentage)
      ).toFixed(2);
    } else {
      return (
        addDecimalInNumber(amount) * selectedCategory?.claimablePercentage
      ).toFixed(2);
    }
  };

  return (
    <>
      {categoryLoading && <Text>Loading...</Text>}
      <KeyboardAwareScrollView style={{flex: 1}}>
        <View>
          <Select
            label="Expense Category"
            w={'100%'}
            data={formatCategory}
            value={category}
            setValue={setCategory}
            showLabel={true}
            selected={selectedCategory?.name}
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
            <DateTimePickerModal
              isVisible={open}
              date={new Date(expenseDate)}
              mode="date"
              onConfirm={value => {
                setOpen(false);
                setExpenseDate(value);
              }}
              onCancel={() => setOpen(false)}
            />
          </View>

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
              value={addDecimalInNumber(amount).toString()}
              onChangeText={text => setAmount(text)}
              keyboardType="decimal-pad"
            />
          </View>

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
              value={`${selectedCategory?.claimablePercentage * 100}%`}
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

          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              onPress={handleCameraPicker}
              style={{
                backgroundColor: colors.bgc,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <AntIcon name="camerao" size={30} color={colors.primary} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={openImagePicker}
              style={{
                backgroundColor: colors.bgc,
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderRadius: 5,
                justifyContent: 'center',
              }}>
              <EntypoIcon name="image" size={25} color={colors.primary} />
            </TouchableOpacity>
          </View>

          {file?.url && (
            <TouchableOpacity
              onPress={handleEditImageUpload}
              style={{
                backgroundColor: colors.secondary,
                marginTop: 20,
                padding: 10,
                borderRadius: 5,
              }}
              disabled={ocrLoading}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  {ocrLoading ? 'Processing Image Data' : ' Confirm Image'}
                </Text>
                {ocrLoading && (
                  <ActivityIndicator
                    size={20}
                    color={colors.white}
                    style={{marginTop: 2}}
                  />
                )}
              </View>
            </TouchableOpacity>
          )}

          <Image
            style={{
              height: 700,
              width: '100%',
              borderWidth: 1,
              borderColor: colors.primary,
              marginTop: 10,
              borderRadius: 5,
              objectFit: 'contain',
            }}
            source={{
              uri: file?.url
                ? file?.url
                : ocrData?.filePath
                ? ocrData?.filePath
                : expenseItem?.filePath,
            }}
          />

          <TouchableOpacity
            onPress={handleOnSubmit}
            disabled={addLoading || ocrLoading}
            style={{
              backgroundColor: colors.primary,
              marginTop: 20,
              padding: 10,
              borderRadius: 5,
              marginBottom: 20,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              {addLoading ? 'Loading...' : 'Update'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

export default EditExpense;
