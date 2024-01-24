/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Password from '../../components/form-element/password/password';
import {useUpdatePasswordMutation} from '../../features/auth/auth-slice';
import colors from '../../global/color/color';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reTypePassword, setReTypePassword] = useState('');

  const [updatePassword, {isLoading, isSuccess}] = useUpdatePasswordMutation();

  const handleSubmit = () => {
    if (!oldPassword) {
      Toast.show({
        type: 'error',
        text1: 'Please enter old Password',
      });
    }
    if (newPassword !== reTypePassword) {
      Toast.show({
        type: 'error',
        text1: 'Password did not match',
      });
    }

    if (newPassword === reTypePassword && oldPassword) {
      updatePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmPassword: reTypePassword,
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setOldPassword('');
      setNewPassword('');
      setReTypePassword('');
    }
  }, [isSuccess]);

  return (
    <KeyboardAwareScrollView style={{backgroundColor: colors.bgc, flex: 1}}>
      <View style={{backgroundColor: colors.bgc, flex: 1, paddingBottom: 40}}>
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            paddingVertical: 80,
            paddingBottom: 150,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              justifyContent: 'center',
            }}>
            <IonIcon name="key" size={30} color="#fff" />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 30,
                color: colors.white,
                letterSpacing: 1,
                marginBottom: 2,
              }}>
              Change Password
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
              <Password
                label="Old Password"
                setValue={setOldPassword}
                value={oldPassword}
              />
              <Password
                label="New Password"
                setValue={setNewPassword}
                value={newPassword}
              />
              <Password
                label="Confirm Password"
                setValue={setReTypePassword}
                value={reTypePassword}
              />
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  backgroundColor: colors.primary,
                  padding: 10,
                  borderRadius: 5,
                  marginTop: 10,
                }}>
                <Text style={{color: colors.white, textAlign: 'center'}}>
                  {isLoading ? 'Loading...' : 'Update'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ChangePassword;
