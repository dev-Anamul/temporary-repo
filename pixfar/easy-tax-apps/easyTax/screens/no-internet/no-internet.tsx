/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {internet} from '../../features/reload-data/reload-data-slices';
import colors from '../../global/color/color';

const NoInternet = () => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={require('../../assets/internet.jpg')}
        height={500}
        width={500}
        style={{height: 200, width: 200}}
      />
      <TouchableOpacity
        onPress={() => dispatch(internet(null))}
        style={{
          backgroundColor: colors.primary,
          paddingHorizontal: 20,
          paddingVertical: 8,
          borderRadius: 5,
        }}>
        <Text style={{color: 'white'}}>Refresh</Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 20,
        }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: '500',
            color: colors.primary,
            textAlign: 'center',
          }}>
          No Internet
        </Text>
      </View>
    </View>
  );
};

export default NoInternet;
