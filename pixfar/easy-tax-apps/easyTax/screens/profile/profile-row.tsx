/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import colors from '../../global/color/color';

interface types {
  data: any;
}
const ProfileRow = ({data}: types) => {
  return (
    <View
      style={{
        // borderWidth: 1,
        // borderColor: colors.border,
        marginBottom: 10,
        flexDirection: 'row',
      }}>
      <Text
        style={{
          width: '28%',
          // borderRightColor: colors.border,
          // borderRightWidth: 1,
          padding: 0,
          paddingHorizontal: 0,
          fontWeight: 'bold',
          color: colors.primary,
          fontSize: 13,
        }}>
        {data.title}
      </Text>
      <Text
        style={{
          width: '68%',
          padding: 0,
          paddingHorizontal: 0,
          color: '#1d5276',
          fontSize: 12,
        }}>
        : &nbsp; {data.value}
      </Text>
    </View>
  );
};

export default ProfileRow;
