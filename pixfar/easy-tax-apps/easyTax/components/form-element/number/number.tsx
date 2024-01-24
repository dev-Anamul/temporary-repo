/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, Text, TextInput, View} from 'react-native';
import colors from '../../../global/color/color';

const Number = ({label, setValue, value, disabled, required}: any) => {
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
          <View
            style={{
              borderColor: '#1d5276',
              borderRadius: 3,
              borderWidth: 1,
              marginTop: 2,
              width: '100%',
              position: 'relative',
              justifyContent: 'center',
            }}>
            <Text style={{position: 'absolute', left: 10, color: colors.text}}>
              +64
            </Text>
            <TextInput
              style={{
                color: '#1d5276',
                padding: Platform.OS === 'android' ? 5 : 10,
                paddingHorizontal: 10,
                paddingLeft: 40,
              }}
              // placeholder={`Type ${label}`}
              placeholderTextColor="#1d5276"
              value={value}
              onChangeText={text => setValue(text)}
              keyboardType="numeric"
              maxLength={9}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Number;
