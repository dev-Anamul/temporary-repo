import NetInfo from '@react-native-community/netinfo';
import {useLinkTo} from '@react-navigation/native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const CheckInternet = () => {
  const [netInfo, setNetInfo] = useState(false);
  const linkTo = useLinkTo();

  // ! Get Data From Redux
  const {isLoggedIn} = useSelector(state => state.login);
  const {internet} = useSelector(state => state.reload);

  console.log({internet});

  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state?.isConnected);
      if (!state.isConnected) {
        linkTo('/NoInternet');
      }

      if (state.isConnected && isLoggedIn) {
        linkTo('/Dashboard');
      }

      if (state.isConnected && !isLoggedIn) {
        linkTo('/Login');
      }
    });

    // Unsubscribe
    return () => {
      unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [netInfo, isLoggedIn, internet]);

  return null;
};

export default CheckInternet;
