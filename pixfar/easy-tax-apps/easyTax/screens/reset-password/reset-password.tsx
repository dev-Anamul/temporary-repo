/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import Input from '../../components/form-element/input/input';
import Password from '../../components/form-element/password/password';
import Logo from '../../components/logo/logo';
import Shaef from '../../components/shaef/shaef';
import {useForgotPasswordWithEmailMutation} from '../../features/auth/auth-slice';
import colors from '../../global/color/color';
import {SH} from '../../utils/Dimension/Dimension';

const ResetPassword = ({navigation}: any) => {
  const selectedEmail = useSelector((state: any) => state.email.email);

  const [otp, setOtp] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const [forgotPasswordWithEmail, {isLoading, isSuccess}] =
    useForgotPasswordWithEmailMutation();

  console.log('selectedEmail =>', selectedEmail);

  const handleSubmit = () => {
    if (!otp || !password || !confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Required',
        text2: 'Please enter a valid email address',
      });
      return false;
    } else if (password !== confirmPassword) {
      Toast.show({
        type: 'error',
        text1: 'Password not match',
        text2: 'Please enter a valid email address',
      });
      return false;
    }

    forgotPasswordWithEmail({
      token: otp,
      email: selectedEmail,
      newPassword: password,
      confirmPassword: confirmPassword,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.navigate('Login');
    }
  }, [isSuccess, navigation]);

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <View>
        <SafeAreaView style={styles.container}>
          <Shaef />
          <View>
            <Logo />
            <View>
              <Text style={styles.loginText}>Reset Password</Text>
              <View style={styles.line} />
            </View>
            <View style={{minWidth: 300}}>
              <>
                <Input
                  label="User Email"
                  value={selectedEmail}
                  setValue={null}
                  disabled={true}
                />
                <Input label="OTP" required value={otp} setValue={setOtp} />
                <Password
                  label="Password"
                  value={password}
                  setValue={setPassword}
                  required
                />
                <Password
                  label="Confirm Password"
                  value={confirmPassword}
                  setValue={setConfirmPassword}
                  required
                />

                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={handleSubmit}
                  disabled={isLoading}>
                  <Text style={styles.loginBtnText}>
                    {isLoading ? 'Loading...' : 'Reset Password'}
                  </Text>
                </TouchableOpacity>
              </>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    verticalAlign: 'middle',
    height: SH,
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

  singupBtn: {
    color: colors.primary,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: '500',
    padding: 10,
  },
});
