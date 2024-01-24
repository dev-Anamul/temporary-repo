/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Toast from 'react-native-toast-message';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import MainLayout from '../../components/common/main-layout/main-layout';
import Input from '../../components/form-element/input/input';
import Number from '../../components/form-element/number/number';
import {
  useGetUserQuery,
  useUpdateUserProfileMutation,
} from '../../features/auth/auth-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';

const EditProfile = ({navigation}: any) => {
  // * Redux
  const {isLoading} = useGetUserQuery(null);
  // const user = data?.data?.user;
  const [updateUserProfile, {isLoading: updateLoading, isSuccess}] =
    useUpdateUserProfileMutation();
  const loginUser = useSelector((state: any) => state?.login?.user);
  const user = loginUser?.user;
  const phone = user?.mobile?.split(' ')[1] || user?.mobile?.split(' ')[0];

  // * Local State
  const [mobile, setMobile] = React.useState(phone);
  const [address, setAddress] = React.useState(user?.address);
  const [irdNumber, setIrdNumber] = React.useState(user?.irdNumber);
  const [modal, setModal] = React.useState(false);
  const [file, setFile] = React.useState({url: user?.avatar, type: ''});
  const [open, setOpen] = React.useState(false);
  const [dateOfBirth, setDateOfBirth] = React.useState(
    new Date(user?.dateOfBirth),
  );

  console.log(mobile);

  // * Submit Handler
  const handleSubmit = () => {
    if (!irdNumber || !mobile || !address || !dateOfBirth) {
      Toast.show({
        type: 'error',
        text1: 'Please Add Required Fields',
        visibilityTime: 2000,
        autoHide: true,
        topOffset: 30,
        bottomOffset: 40,
      });
    } else {
      const formData = new FormData();
      formData.append('avatar', {
        uri: file.url,
        type: file.type || 'image/jpeg',
        name: 'avatar',
      });

      formData.append('email', user?.email);
      formData.append('mobile', mobile);
      formData.append('address', address);
      formData.append('dateOfBirth', dateOfBirth?.toISOString());
      formData.append('irdNumber', irdNumber);
      formData.append('firstName', user?.firstName);
      formData.append('middleName', user?.middleName);
      formData.append('lastName', user?.lastName);

      // ! Upload Update Data
      updateUserProfile(formData);
      console.log(formData);
    }
  };

  // * Navigation After Submit
  React.useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Profile');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, updateLoading]);

  // * ----------------------------------------------------------------------------------------------------------------------
  const handleConfirm = (date: any) => {
    setDateOfBirth(date);
    setOpen(false);
  };

  // * User Avatar image
  const image = 'https://i.ibb.co/thBM8t0/avatar.jpg';

  return (
    <>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && (
        <>
          <CameraModal modal={modal} setModal={setModal} setFile={setFile} />
          <KeyboardAwareScrollView
            style={{flex: 1, backgroundColor: colors.bgc}}>
            <View style={{alignItems: 'center', marginTop: 50}}>
              <TouchableOpacity
                onPress={() => setModal(true)}
                style={{
                  borderRadius: 100,
                  height: 200,
                  width: 200,
                  marginBottom: 15,
                }}>
                <Image
                  source={{uri: file.url || image}}
                  style={{
                    borderRadius: 100,
                    height: 200,
                    width: 200,
                    marginBottom: 15,
                  }}
                />
                <View
                  style={{
                    backgroundColor: colors.primary,
                    padding: 10,
                    borderRadius: 50,
                    position: 'absolute',
                    top: 30,
                    right: 0,
                  }}>
                  <FaIcon name="edit" size={18} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{padding: 15}}>
              <MainLayout title="Edit Profile">
                <Input
                  label="Full Name"
                  value={`${user?.firstName} ${
                    user?.middleName ? user?.middleName + ' ' : ''
                  }${user?.lastName}`}
                  disabled
                  setValue={undefined}
                />
                <Input label="Email" value={user?.email} disabled />
                <Input
                  label="IRD Number"
                  setValue={setIrdNumber}
                  value={irdNumber}
                  disabled={user?.irdNumber}
                  required={user?.irdNumber ? false : true}
                />
                <Number
                  label="Phone"
                  setValue={setMobile}
                  value={mobile}
                  disabled={undefined}
                  required
                />
                <View style={{marginBottom: 10}}>
                  <Text style={{color: colors.text}}>
                    Date of Birth <Text style={{color: 'red'}}>*</Text>
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
                    {formateDate(dateOfBirth)}
                  </Text>

                  <DateTimePickerModal
                    isVisible={open}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={() => setOpen(false)}
                    date={dateOfBirth}
                  />
                </View>

                <Input
                  label="Address"
                  setValue={setAddress}
                  value={address}
                  disabled={undefined}
                  required
                />
              </MainLayout>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  backgroundColor: colors.primary,
                  borderRadius: 5,
                  padding: 10,
                }}
                disabled={updateLoading}
                onPress={handleSubmit}>
                <Text style={{color: 'white', fontSize: 15}}>
                  {updateLoading ? 'Loading...' : 'Update'}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </>
      )}
    </>
  );
};

export default EditProfile;

// * Image Picker Component
function CameraModal({modal, setModal, setFile}: any) {
  const close = () => setModal(false);
  const [width, setWidth] = React.useState(350);
  const [height, setHeight] = React.useState(500);

  // * Choose Image From File Handler
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

  // * Pick image from Camera Handler
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
