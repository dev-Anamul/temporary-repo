import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import StackNavigator from './routes/stack-navigator';
import CheckInternet from './utils/check-internet/check-internet';
import Welcome from './screens/welcome/welcome';
import useAuth from './utils/hook/useAuth';
import AuthStackNavigator from './routes/auth-stack-navigator';
import useAuthCheck from './utils/hook/auth-check';
import {navigationRef} from './components/navigation-ref/navigation';
import getInitialData from './utils/hook/get-initial-data';

function AppNav(): JSX.Element {
  const isLoggedIn = useAuth();
  const isAuthChecked = useAuthCheck();
  getInitialData();

  return (
    <>
      {!isAuthChecked ? (
        <Welcome />
      ) : (
        <NavigationContainer ref={navigationRef}>
          <CheckInternet />
          {isLoggedIn ? <StackNavigator /> : <AuthStackNavigator />}
        </NavigationContainer>
      )}
    </>
  );
}

export default AppNav;
