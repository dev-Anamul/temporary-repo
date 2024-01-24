/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import React from 'react';
import colors from '../../../global/color/color';

interface types {
  children: any;
  title: string;
}

const MainLayout = ({children, title}: types) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: colors.border,
        width: '100%',
        backgroundColor: colors.white,
        borderRadius: 5,
        marginBottom: 20,
      }}>
      {title && (
        <Text
          style={{
            borderBottomWidth: 1,
            borderBottomColor: colors.border,
            padding: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: colors.primary,
          }}>
          {title}
        </Text>
      )}
      <View style={{padding: 20}}>{children}</View>
    </View>
  );
};

export default MainLayout;
