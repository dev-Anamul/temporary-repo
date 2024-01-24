/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '../../global/color/color';
import Shaef from '../../components/shaef/shaef';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface types {
  navigation: any;
}
const NoAccess = ({navigation}: types) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      const data = await AsyncStorage.getItem('user');
      setUserData(JSON.parse(data || ''));
    };

    getUserData();
  }, []);

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.bgc,
        }}>
        <Shaef />
        <Image
          source={require('../../assets/timer.png')}
          style={{marginTop: 20}}
        />
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
            color: colors.primary,
            marginTop: 10,
          }}>
          {` Hello ${userData?.firstName}  ${userData?.middleName} ${userData?.lastName}`}
        </Text>
        <Text style={{marginTop: 10, fontWeight: '400', fontSize: 16}}>
          Your Account Waiting for Admin Approval
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            marginTop: 15,
          }}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: colors.white}}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default NoAccess;
