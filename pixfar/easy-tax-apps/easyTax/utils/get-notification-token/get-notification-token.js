import messaging from '@react-native-firebase/messaging';

const notificationToken = async () => {
  const authStatus = await messaging().requestPermission();
  // eslint-disable-next-line no-unused-vars
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  const token = await messaging().getToken();

  return token;
};

export default notificationToken;
