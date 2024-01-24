/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import Input from '../../components/form-element/input/input';
import Password from '../../components/form-element/password/password';
import Logo from '../../components/logo/logo';
import OrLine from '../../components/or-line/or-line';
import Shaef from '../../components/shaef/shaef';
import {useLoginMutation} from '../../features/auth/auth-slice';
import notificationToken from '../../utils/get-notification-token/get-notification-token';

interface types {
  navigation: any;
}

function Login({navigation}: types) {
  // * Hooks
  const [login, {isLoading, error}] = useLoginMutation();
  const {height} = useWindowDimensions();

  console.log('Login Error => ', error);

  // * Get Data From Redux
  const {isLoggedIn, token} = useSelector((state: any) => state.login);

  // * Local State
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState('');
  const [deviceToken, setDeviceToken] = useState('');

  // * Get device token
  const getNotification = async () => {
    const info = await notificationToken();
    setDeviceToken(info);
  };

  // * Submit Handler
  const handleSubmit = () => {
    if (!email) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Email',
        text2: 'Please Enter the Email address',
      });
    } else if (!password) {
      Toast.show({
        type: 'error',
        text1: 'Invalid Password',
        text2: 'Please Enter the Password',
      });
    } else {
      login({
        email,
        password,
        notificationToken: deviceToken,
      });
    }
  };

  // * Device Token Reloader
  useEffect(() => {
    getNotification();
  }, [isLoading, token, isLoggedIn]);

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={{...styles.container, height}}>
        <Shaef />
        <View>
          <Logo />
          <View>
            <Text style={styles.loginTitle}>Login</Text>
            <View style={styles.line} />
          </View>

          <View style={{minWidth: '75%', maxWidth: '75%'}}>
            <Input
              label="Email"
              setValue={setEmail}
              value={email}
              disabled={undefined}
              textContentType={'username'}
            />
            <Password
              label="Password"
              setValue={setPassword}
              value={password}
              required={false}
            />

            <TouchableOpacity
              style={styles.loginBtn}
              onPress={handleSubmit}
              disabled={isLoading}>
              <Text style={styles.loginBtnText}>
                {isLoading ? 'Loading...' : 'Login'}
              </Text>
            </TouchableOpacity>
            <OrLine />
            {/* {Platform.OS === 'ios' && (
              <TouchableOpacity style={styles.faceBtn}>
                <Text style={styles.faceBtnText}>[ - ] Face</Text>
              </TouchableOpacity>
            )} */}
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text
                style={styles.singupBtn}
                onPress={() => navigation.navigate('Forgot Password')}>
                forgot password ?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.loginText}>
          <Text style={{color: 'gray'}}>
            Don't have any account please{' '}
            <Text
              style={styles.singupBtn}
              onPress={() => navigation.navigate('Register')}>
              Sign Up{' '}
            </Text>
            here
          </Text>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export default Login;

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
    color: 'black',
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
    minWidth: '100%',
  },

  loginBtnText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  loginTitle: {
    color: '#1d5276',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop: 20,
    textAlign: 'left',
  },

  singupBtn: {
    color: '#1d5276',
    // textDecorationLine: 'underline',
    textAlign: 'center',
    fontWeight: '500',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    // position: 'absolute',
    // bottom: Platform.OS === 'ios' ? 20 : 15,
    // marginBottom: 5,
    fontSize: 15,
    fontWeight: 500,
  },
});
