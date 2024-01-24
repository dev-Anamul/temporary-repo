/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

interface types {
  type: string;
  text: string;
}
const CustomAlert = ({type, text}: types) => {
  return (
    <View
      style={{
        backgroundColor: '#fae7e7',
        borderWidth: 1,
        borderColor: 'rgba(219, 83, 83, .5)',
        padding: 8,
        borderRadius: 5,
      }}>
      <Text>{text}</Text>
    </View>
  );
};

export default CustomAlert;
