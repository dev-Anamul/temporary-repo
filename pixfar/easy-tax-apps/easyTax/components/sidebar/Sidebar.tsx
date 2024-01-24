/* eslint-disable react-native/no-inline-styles */
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../global/color/color';

import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {logOutState} from '../../features/check-login/check-login-slice';
import {deleteData} from '../../utils/local-storage/local-storage';

const Sidebar = (props: any) => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.login?.user?.user);

  const handleLogOut = async () => {
    dispatch(logOutState());
    deleteData('userToken');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props} contentContainerStyle={{}}>
        <ImageBackground
          source={require('../../assets/sidebarBanner.png')}
          style={{padding: 20, marginTop: -4}}>
          <Image
            source={
              user?.avatar
                ? {uri: user?.avatar}
                : require('../../assets/avatar.jpg')
            }
            style={{height: 60, width: 60, borderRadius: 150, marginTop: 20}}
          />
          <Text
            style={{
              color: colors.white,
              marginTop: 5,
              fontWeight: '500',
              fontSize: 18,
            }}>
            {`${user?.firstName} ${
              user?.middleName ? user?.middleName + ' ' : ''
            }${user?.lastName}`}
          </Text>
          <Text
            style={{color: '#ccc', fontSize: 13, textTransform: 'capitalize'}}>
            {user?.role}
          </Text>
        </ImageBackground>
        <View style={{marginTop: 5}}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: colors.primary,
          borderTopWidth: 0.5,
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.primary,
            padding: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
            gap: 5,
          }}
          onPress={handleLogOut}>
          <Icons name="exit-outline" color="#fff" size={20} />
          <Text style={{color: '#fff', marginBottom: 1}}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sidebar;
