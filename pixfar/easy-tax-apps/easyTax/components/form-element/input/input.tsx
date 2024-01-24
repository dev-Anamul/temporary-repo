/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import colors from '../../../global/color/color';

const Input = ({
  label,
  setValue,
  value,
  disabled,
  keyboard,
  required,
  textContentType,
}: any) => {
  return (
    <View style={{marginBottom: 10}}>
      <Text style={{color: colors.primary}}>
        {label} {required && <Text style={{color: 'red'}}>*</Text>}
      </Text>
      <View>
        {disabled ? (
          <Text
            style={{
              borderColor: '#1d5276',
              borderRadius: 3,
              borderWidth: 1,
              marginTop: 2,
              padding: 9,
              paddingHorizontal: 10,
              width: '100%',
              backgroundColor: '#eee',
              color: '#1d5276',
            }}>
            {value}
          </Text>
        ) : (
          <TextInput
            style={{
              borderColor: '#1d5276',
              borderRadius: 3,
              borderWidth: 1,
              marginTop: 2,
              padding: Platform.OS === 'android' ? 5 : 10,
              paddingHorizontal: 10,
              width: '100%',
              color: '#1d5276',
              // backgroundColor: '#fff',
            }}
            placeholder={`Type ${label}`}
            placeholderTextColor="#1d5276"
            value={value}
            onChangeText={text => setValue(text)}
            keyboardType={keyboard || 'default'}
            textContentType={textContentType}
          />
        )}
      </View>
    </View>
  );
};

export default Input;
