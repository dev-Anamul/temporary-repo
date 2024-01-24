/* eslint-disable react-native/no-inline-styles */
import messaging from '@react-native-firebase/messaging';
import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider} from 'react-redux';
import AppNav from './AppNav';
import colors from './global/color/color';
import {store} from './store/store';
import notificationToken from './utils/get-notification-token/get-notification-token';
import cameraPermission from './utils/permissions/cameraPermission';

function App(): JSX.Element {
  const [modal, setModal] = React.useState(false);
  const [notificationData, setNotificationData] = React.useState({});

  // ! Notification Functions
  React.useEffect(() => {
    notificationToken();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      setNotificationData(remoteMessage?.notification || {});
      setModal(true);
    });

    return unsubscribe;
  }, []);

  React.useEffect(() => {
    cameraPermission();
  }, []);

  // const [test, setTest] = React.useState(null);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     setTest(
  //       JSON.parse((await AsyncStorage.getItem('cameraPermission')) || 'false'),
  //     );
  //   };
  //   getData();
  // }, []);
  // console.log('Camera Permission', test);

  return (
    <>
      <Provider store={store}>
        <NotificationModal
          modal={modal}
          setModal={setModal}
          data={notificationData}
        />
        <AppNav />
      </Provider>
      <Toast />
    </>
  );
}

export default App;

interface types {
  modal: boolean;
  setModal: any;
  data: any;
}

function NotificationModal({modal, setModal, data}: types) {
  return (
    <Modal visible={modal} animationType="fade" transparent={true}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.border,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 7,
            }}>
            <Text style={{color: colors.primary, fontWeight: '500'}}>
              New Notification
            </Text>
            <MatIcon
              name="close"
              color="black"
              onPress={() => setModal(false)}
              size={20}
            />
          </View>
          <Image
            source={{
              uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/notification-2872691-2409395.png',
            }}
            // height={100}
            // width={100}
            style={{width: '100%', height: 200, objectFit: 'contain'}}
          />
          <View style={{padding: 10}}>
            <Text
              style={{
                fontWeight: '600',
                fontSize: 18,
                color: colors.primary,
                marginBottom: 5,
              }}>
              {data?.title}
            </Text>
            <Text
              style={{
                fontWeight: '400',
                color: 'gray',
                borderTopColor: '#ccc',
                borderTopWidth: 1,
                paddingTop: 5,
              }}>
              {data?.body}
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
