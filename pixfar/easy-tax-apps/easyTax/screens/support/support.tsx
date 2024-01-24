/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/form-element/input/input';
import colors from '../../global/color/color';
// import {useGetUserQuery} from '../../features/auth/auth-slice';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {usePostSupportMutation} from '../../features/support/support';
// import {useLinkTo, useRoute} from '@react-navigation/native';

const Support = ({navigation}: any) => {
  // ! Hokes
  // const {data} = useGetUserQuery(null);
  const [postSupport, {isLoading, isSuccess}] = usePostSupportMutation();
  // const linkTo = useLinkTo();
  // const route = useRoute();
  const loginUser = useSelector((state: any) => state?.login?.user);
  const user = loginUser?.user;

  // ! User Data
  // const user = data?.data?.user;

  // ! Local State
  const [name, setName] = React.useState(
    user?.firstName + ' ' + user?.middleName + ' ' + user?.lastName,
  );
  const [email, setEmail] = React.useState(user?.email);
  const [subject, setSubject] = React.useState('');
  const [address, setAddress] = React.useState(user?.address);
  const [message, setMessage] = React.useState('');

  // ! Message Submit Handler
  const handleSubmit = () => {
    if (!subject || !message || !address) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
      });
    } else {
      const payload = {
        name,
        email,
        subject,
        address,
        message,
      };
      postSupport(payload);
    }
  };

  // ! Form Reset
  React.useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Dashboard');
      setSubject('');
      setMessage('');
      console.log('Success');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading]);

  return (
    <>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && (
        <KeyboardAwareScrollView style={{backgroundColor: colors.bgc, flex: 1}}>
          <View
            style={{backgroundColor: colors.bgc, flex: 1, paddingBottom: 40}}>
            <View
              style={{
                backgroundColor: colors.primary,
                padding: 20,
                paddingVertical: 80,
                paddingBottom: 100,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  gap: 10,
                  justifyContent: 'center',
                }}>
                <MaterialIcons name="support-agent" size={40} color="#fff" />
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 30,
                    color: colors.white,
                    letterSpacing: 1,
                    marginBottom: 2,
                  }}>
                  Admin Support
                </Text>
              </View>
            </View>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: colors.primary,
                  backgroundColor: colors.white,
                  width: '85%',
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  marginTop: -80,
                  borderRadius: 20,
                }}>
                <View>
                  <Input
                    label="Name"
                    setValue={setName}
                    value={`${user?.firstName} ${
                      user?.middleName ? user?.middleName + ' ' : ''
                    }${user?.lastName}`}
                    disabled={true}
                  />
                  <Input
                    label="Email Address"
                    setValue={setEmail}
                    value={email}
                    disabled={true}
                  />
                  <Input
                    label="Subject"
                    setValue={setSubject}
                    value={subject}
                    disabled={undefined}
                    required
                  />
                  <Input
                    label="Address"
                    setValue={setAddress}
                    value={address}
                    disabled={undefined}
                    required
                  />

                  <View>
                    <Text style={{color: colors.primary}}>
                      Message <Text style={{color: 'red'}}>*</Text>
                    </Text>
                    <TextInput
                      style={{
                        borderColor: '#1d5276',
                        borderRadius: 3,
                        borderWidth: 1,
                        padding: Platform.OS === 'android' ? 5 : 10,
                        paddingHorizontal: 10,
                        width: '100%',
                        color: '#1d5276',
                        marginTop: 3,
                      }}
                      multiline={true}
                      numberOfLines={5}
                      placeholder="Message"
                      placeholderTextColor="#1d5276"
                      value={message}
                      onChangeText={text => setMessage(text)}
                    />
                  </View>
                  <TouchableOpacity
                    onPress={handleSubmit}
                    style={{
                      backgroundColor: colors.primary,
                      padding: 10,
                      borderRadius: 5,
                      marginTop: 10,
                    }}>
                    <Text style={{color: colors.white, textAlign: 'center'}}>
                      Send
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      )}
    </>
  );
};

export default Support;
