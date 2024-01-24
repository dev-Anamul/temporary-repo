import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login/login';
import Registrar from '../screens/registrar/registrar';
import ForgotPassword from '../screens/forgot-password/forgot-password';
import NoAccess from '../screens/no-access/no-access';
import NoInternet from '../screens/no-internet/no-internet';
import ResetPassword from '../screens/reset-password/reset-password';

const Stack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Registrar} />
      <Stack.Screen name="Forgot Password" component={ForgotPassword} />
      <Stack.Screen name="NoAccess" component={NoAccess} />
      <Stack.Screen name="NoInternet" component={NoInternet} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthStackNavigator;
