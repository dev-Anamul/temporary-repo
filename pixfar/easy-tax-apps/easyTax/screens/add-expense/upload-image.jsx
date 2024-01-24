/* eslint-disable react-native/no-inline-styles */
import {useLinkTo} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {navigate} from '../../components/navigation-ref/navigation';
import {expenseState} from '../../features/expense/add-expense-slices';
import {usePostOcrMutation} from '../../features/ocr/ocr-slice';
import colors from '../../global/color/color';

const UploadImage = () => {
  // ! Hokes
  const linkTo = useLinkTo();
  const dispatch = useDispatch();

  // ! Redux
  const expenseData = useSelector(state => state.expense);
  const [postOcr, {isSuccess, isLoading, data}] = usePostOcrMutation();

  // ! Local State
  const [modal, setModal] = React.useState(false);
  const [file, setFile] = React.useState({url: '', type: ''});
  const [isSwitch, setIsSwitch] = React.useState(true);

  // ! Handle Next Button
  const handleNext = async () => {
    // Toast.show({
    //   type: 'error',
    //   text1: 'Please Upload a file',
    // });
    if (!file.url) {
      Toast.show({
        type: 'error',
        text1: 'Please upload the receipt',
      });
    } else {
      // Create a FormData object
      const formData = new FormData();
      formData.append('filePath', {
        uri: file?.url,
        type: file?.type,
        name: 'expense.jpeg',
      });
      postOcr(formData);

      if (isSwitch) {
        const timeout = setTimeout(() => {
          // * Redirect to Add Expense after timeout
          linkTo('/AddExpense');
          setIsSwitch(false);
          dispatch(
            expenseState({
              ...expenseData,
              isTimeUp: true,
              expense: null,
              manualImage: file.url,
            }),
          );
          clearTimeout(timeout);
        }, 30000);
      }
    }
  };

  React.useEffect(() => {
    if (isSuccess && !isLoading && isSwitch) {
      // * Redirect to Add Expense after timeout
      linkTo('/AddExpense');
      setIsSwitch(false);
      dispatch(
        expenseState({
          ...expenseData,
          isTimeUp: false,
          expense: data?.data,
          manualImage: file.url,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading]);

  // * TSX Return
  return (
    <>
      <CameraModal modal={modal} setModal={setModal} setFile={setFile} />
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          {/* <Progress.Bar progress={0.8} width={350} /> */}
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={{fontSize: 15, color: colors.primary, marginTop: 20}}>
            Please wait! We are processing your expense slip
          </Text>
        </View>
      )}
      {!isLoading && (
        <View
          style={{
            flex: 1,
            backgroundColor: colors.bgc,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            {!file.url && (
              <TouchableOpacity
                onPress={() => setModal(true)}
                style={{
                  borderColor: colors.border,
                  borderWidth: 1,
                  borderRadius: 20,
                  borderStyle: 'dashed',
                  paddingVertical: 50,
                  backgroundColor: colors.white,
                  width: 300,
                }}>
                <EvilIcons
                  name="image"
                  style={{paddingBottom: 10, textAlign: 'center'}}
                  color={colors.primary}
                  size={80}
                />
                <Text style={{textAlign: 'center', color: colors.primary}}>
                  Choose file or open Camera
                </Text>
              </TouchableOpacity>
            )}
            {file.url && (
              <>
                <ScrollView style={{paddingTop: 50}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 20,
                      borderWidth: 1,
                      borderColor: colors.primary,
                      color: colors.primary,
                      padding: 10,
                      borderRadius: 10,
                      borderStyle: 'dashed',
                      marginBottom: 10,
                    }}>
                    Uploaded File
                  </Text>
                  <Image
                    source={{
                      uri: file.url,
                    }}
                    style={{width: 300, height: 400}}
                  />
                  <View style={{justifyContent: 'center'}}>
                    <TouchableOpacity
                      onPress={() => setFile({url: '', type: ''})}
                      style={{
                        width: '100%',
                        paddingHorizontal: 30,
                        backgroundColor: colors.primary,
                        paddingVertical: 10,
                        borderRadius: 30,
                        marginTop: 10,
                      }}>
                      <Text style={{color: colors.white, textAlign: 'center'}}>
                        Remove Image
                      </Text>
                    </TouchableOpacity>
                  </View>
                </ScrollView>
              </>
            )}
          </View>
          <View
            style={{
              borderTopWidth: 0.3,
              borderBottomColor: colors.border,
              width: '100%',
              position: 'absolute',
              bottom: 0,
              gap: 10,
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 15,
              backgroundColor: '#fff',
              paddingBottom: 15,
            }}>
            <TouchableOpacity
              onPress={() => navigate('Expense')}
              style={{
                paddingHorizontal: 30,
                backgroundColor: 'gray',
                borderRadius: 20,
                paddingVertical: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>Back</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleNext}
              style={{
                paddingHorizontal: 40,
                backgroundColor: colors.primary,
                borderRadius: 30,
                paddingVertical: 10,
              }}>
              <Text style={{color: 'white', fontSize: 15}}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default UploadImage;

// ! Image Picker Component
function CameraModal({modal, setModal, setFile}) {
  const close = () => setModal(false);
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
        setModal(false);
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
        setModal(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Modal
      visible={modal}
      animationType="slide"
      transparent={true}
      onRequestClose={close}>
      <Pressable
        onPress={close}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '100%',
            borderTopRightRadius: 20,
            borderTopStartRadius: 20,
            paddingHorizontal: 20,
            zIndex: 9999,
            paddingTop: 50,
            paddingBottom: 20,
          }}>
          <View>
            <View
              style={{flexDirection: 'row', gap: 20, justifyContent: 'center'}}>
              <View>
                <TouchableOpacity
                  onPress={handleCameraPicker}
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    backgroundColor: colors.bgc,
                  }}>
                  <EvilIcons name="camera" size={40} color={colors.primary} />
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '500',
                    color: colors.primary,
                    marginRight: 2,
                  }}>
                  Camera
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={openImagePicker}
                  style={{
                    padding: 20,
                    borderRadius: 10,
                    backgroundColor: colors.bgc,
                    paddingHorizontal: 24,
                  }}>
                  <Feather name="upload" size={30} color={colors.primary} />
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: '500',
                    color: colors.primary,
                    marginRight: 2,
                  }}>
                  File
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setModal(false)}
              style={{
                backgroundColor: colors.primary,
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
              }}>
              <Text style={{textAlign: 'center', color: 'white', fontSize: 15}}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
