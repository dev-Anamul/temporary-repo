/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Linking,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import Input from '../../components/form-element/input/input';
import Number from '../../components/form-element/number/number';
import Password from '../../components/form-element/password/password';
import Logo from '../../components/logo/logo';
import {useCreateUserMutation} from '../../features/auth/auth-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';

interface types {
  navigation: any;
}
const Registrar = ({navigation}: types) => {
  const [createUser, {isLoading}] = useCreateUserMutation();

  // Local State
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [open, setOpen] = useState(false);

  const dob = dateOfBirth.getTime();
  const today = new Date();
  today.setDate(today.getDate() - 1);
  const currentDate = today.getTime();

  const handleCreateUser = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !mobile ||
      !dateOfBirth
    ) {
      Toast.show({
        type: 'error',
        text1: 'All fields are required',
      });
    } else if (currentDate < dob) {
      Toast.show({
        type: 'error',
        text1: 'Please Select a Older Date',
      });
    } else {
      createUser({
        middleName: middleName,
        firstName: firstName,
        lastName: lastName,
        mobile: mobile,
        email: email,
        address: address,
        password: password,
        dateOfBirth: dateOfBirth,
        notificationType: 'FCM',
        notificationToken: '--',
        termsAndConditions: isChecked,
        employmentWorkType: 'fullTime',
      });
    }
  };

  const handlePress = () => {
    Linking.openURL('https://fluxx.co.nz/terms-and-conditions').catch(err =>
      console.error('An error occurred', err),
    );
  };

  return (
    <KeyboardAwareScrollView style={{flex: 1}}>
      <SafeAreaView style={styles.container}>
        {/* <Shaef /> */}
        <View style={{width: '80%'}}>
          <Logo />
          <View>
            <Text style={styles.loginText}>Register</Text>
            <View style={styles.line} />
          </View>
          <View style={{width: '100%'}}>
            <Input
              label="First Name"
              setValue={setFirstName}
              value={firstName}
              disabled={undefined}
              required
            />
            <Input
              label="Middle Name"
              setValue={setMiddleName}
              value={middleName}
              disabled={undefined}
            />
            <Input
              label="Last Name"
              value={lastName}
              setValue={setLastName}
              disabled={undefined}
              required
            />
            <Input
              label="Email"
              value={email}
              setValue={setEmail}
              disabled={undefined}
              required
            />
            <Number
              label="Phone"
              value={mobile}
              setValue={setMobile}
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

              <DatePicker
                modal
                open={open}
                date={dateOfBirth}
                onConfirm={value => {
                  setOpen(false);
                  setDateOfBirth(value);
                }}
                mode="date"
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </View>
            <Input
              label="Address"
              value={address}
              setValue={setAddress}
              disabled={undefined}
              required
            />
            <Password
              label="Password"
              value={password}
              setValue={setPassword}
              required
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              {!isChecked && (
                <MatIcons
                  name="check-box-outline-blank"
                  size={20}
                  onPress={() => setIsChecked(true)}
                  color={colors.primary}
                />
              )}
              {isChecked && (
                <MatIcons
                  name="check-box"
                  size={20}
                  onPress={() => setIsChecked(false)}
                  color={colors.primary}
                />
              )}
              <Text
                style={{
                  marginBottom: 3,
                  color: colors.text,
                }}>
                Accept{' '}
                <Text
                  onPress={handlePress}
                  style={{
                    color: colors.secondary,
                  }}>
                  terms and conditions
                </Text>
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: isChecked ? '#1d5276' : 'gray',
                borderColor: '#1d5276',
                borderRadius: 5,
                borderWidth: 1,
                padding: 10,
                width: '100%',
              }}
              onPress={handleCreateUser}
              disabled={isLoading || !isChecked}>
              <Text style={styles.loginBtnText}>
                {isLoading ? 'Loading...' : 'Register'}
              </Text>
            </TouchableOpacity>
            <Text
              style={{marginTop: 20, color: '#000845', textAlign: 'center'}}>
              Already have an account please{' '}
              <Text
                style={styles.singupBtn}
                onPress={() => navigation.navigate('Login')}>
                login
              </Text>{' '}
              here
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Registrar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    verticalAlign: 'middle',
    marginTop: 100,
    marginBottom: 80,
  },
  line: {
    borderBottomWidth: 1,
    borderColor: '#1d5276',
    marginBottom: 10,
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
    color: '#1d5276',
    textDecorationLine: 'underline',
  },
});
