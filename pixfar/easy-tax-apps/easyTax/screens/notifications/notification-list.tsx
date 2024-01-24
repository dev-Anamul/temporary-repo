/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useReadNotificationMutation} from '../../features/notification/notiication-slices';
import colors from '../../global/color/color';
import {getLastActiveTime} from '../../utils/date-formater/date-formater';
import lineShorter from '../../utils/mini-line-generator/mini-line-generator';

interface types {
  navigation: any;
  data: any;
}
const NotificationList = ({data, navigation}: types) => {
  const [readNotification, {}] = useReadNotificationMutation();

  const handleNotificationRead = () => {
    readNotification({id: data?.id, read: true});
    navigation.navigate('NotificationPage', {id: data?.id});
  };

  return (
    <TouchableOpacity
      onPress={handleNotificationRead}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: !data?.read ? '#D8E2E8' : '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.bgc,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            backgroundColor: '#fff',
            width: 40,
            height: 40,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: colors.bgc,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FaIcon name="bell" color={colors.primary} size={20} />
        </View>
        <View>
          <Text
            style={{fontSize: 18, fontWeight: '500', color: colors.primary}}>
            {lineShorter(data?.title, 25)}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={{color: '#1d5276'}}>
            {lineShorter(data?.body, 30)}
          </Text>
        </View>
      </View>
      <Text style={{color: '#111'}}>{getLastActiveTime(data?.createdAt)}</Text>
    </TouchableOpacity>
  );
};

export default NotificationList;
