/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {useDispatch} from 'react-redux';
import Input from '../../components/form-element/input/input';
import Logo from '../../components/logo/logo';
import Shaef from '../../components/shaef/shaef';
import {useForgotPasswordMutation} from '../../features/auth/auth-slice';
import {updateEmail} from '../../features/reset-password-email/reset-password-email';
import colors from '../../global/color/color';

interface types {
  navigation: any;
}
const ForgotPassword = ({navigation}: types) => {
  const [forgotPassword, {isLoading, isSuccess}] = useForgotPasswordMutation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const handleSubmit = () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Email is Required',
        text2: 'Please enter a valid email address',
      });
      return false;
    }
    dispatch(updateEmail(email));
    forgotPassword({email});
  };

  useEffect(() => {
    if (isSuccess) {
      setEmail('');
      navigation.navigate('ResetPassword');
    }
  }, [isSuccess, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Shaef />
      <View>
        <Logo />
        <View>
          <Text style={styles.loginText}>Forgot Password</Text>
          <View style={styles.line} />
        </View>
        <View style={{minWidth: 300}}>
          <Input label="Username or Email" value={email} setValue={setEmail} />
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={handleSubmit}
            disabled={isLoading}>
            <Text style={styles.loginBtnText}>
              {isLoading ? 'Loading...' : 'Forgot'}
            </Text>
          </TouchableOpacity>
          <Text style={{marginTop: 10, color: 'gray', textAlign: 'center'}}>
            you have account please{' '}
            <Text
              style={styles.signUpBtn}
              onPress={() => navigation.navigate('Login')}>
              login{' '}
            </Text>
            here
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    verticalAlign: 'middle',
  },

  faceBtn: {
    backgroundColor: 'transparent',
    borderColor: '#1d5276',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 10,
  },

  faceBtnText: {
    textAlign: 'center',
  },

  line: {
    borderBottomWidth: 1,
    borderColor: '#1d5276',
    marginBottom: 10,
  },

  loginBtn: {
    backgroundColor: '#1d5276',
    borderColor: '#1d5276',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10,
    width: '100%',
    marginTop: 10,
  },

  loginBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loginText: {
    color: '#1d5276',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 20,
    textAlign: 'left',
  },

  signUpBtn: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: '500',
  },
});
