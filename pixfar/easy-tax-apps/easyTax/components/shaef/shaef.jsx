import React from 'react';
import {StyleSheet, View} from 'react-native';

const Shaef = () => (
  <View>
    <View style={style.safe1} />
    <View style={style.safe2} />
  </View>
);

export default Shaef;

const style = StyleSheet.create({
  safe1: {
    backgroundColor: 'rgba(60, 181, 89, .5)',
    borderRadius: 400,
    height: 500,
    left: -350,
    position: 'absolute',
    top: -500,
    width: 500,
  },

  safe2: {
    backgroundColor: 'rgba(29, 82, 118, .5)',
    borderRadius: 400,
    height: 500,
    left: 50,
    position: 'absolute',
    top: -400,
    width: 500,
  },
});
