/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../global/color/color';
import Shaef from '../../components/shaef/shaef';

interface types {
  navigation: any;
}
const SubmitSuccess = ({navigation}: types) => {
  const handleBack = () => {
    navigation.navigate('Expense List');
  };
  return (
    <>
      <Shaef />
      <View
        style={{
          flex: 1,
          backgroundColor: colors.white,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/successImage.png')}
          style={{width: '50%', height: 350}}
        />
        <Text style={{fontSize: 25, fontWeight: '500', color: colors.primary}}>
          Invoice Submitted
        </Text>
        <TouchableOpacity style={style.btn} onPress={handleBack}>
          <Text style={{color: colors.white}}>Back</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SubmitSuccess;

const style = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    // width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
