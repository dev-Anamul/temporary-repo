/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';

const Logo = () => (
  <Image
    source={require('../../assets/logo.png')}
    style={{
      height: 50,
      width: 150,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}
  />
);

export default Logo;
