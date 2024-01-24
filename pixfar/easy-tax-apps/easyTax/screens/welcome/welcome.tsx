/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Logo from '../../components/logo/logo';
import colors from '../../global/color/color';
import {ActivityIndicator} from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={{marginTop: 20}}>
        <ActivityIndicator size={20} />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
});
