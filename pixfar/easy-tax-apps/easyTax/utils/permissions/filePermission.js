import {Platform} from 'react-native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import {setData} from '../local-storage/local-storage';

const requestPermission = permission => {
  request(permission).then(result => {
    console.log('after click =>', result);
    if (result === 'denied' || result === 'blocked') {
      setData('filePermission', true);
      console.log('Permission denied');
    }
  });
};

const filePermission = () => {
  if (Platform.OS === 'android') {
    check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
      .then(result => {
        console.log('result', result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );

            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            setData('cameraPermission', false);
            requestPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            setData('cameraPermission', false);
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            requestPermission(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    check(PERMISSIONS.IOS.MEDIA_LIBRARY)
      .then(result => {
        console.log('result', result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );

            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            requestPermission(PERMISSIONS.IOS.MEDIA_LIBRARY);
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            setData('cameraPermission', false);
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};

export default filePermission;
