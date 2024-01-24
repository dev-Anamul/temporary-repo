/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import colors from '../../../global/color/color';

interface types {
  data: any;
  label: string;
  w?: any;
  value: string;
  setValue: any;
  showLabel: boolean;
  selected?: any;
}
const Select = ({
  data,
  label,
  w,
  value,
  setValue,
  showLabel,
  selected,
}: types) => {
  return (
    <View style={{width: w ? w : '100%'}}>
      {showLabel && (
        <Text
          style={{
            fontSize: 15,
            marginBottom: -13,
            color: colors.primary,
            marginTop: 10,
          }}>
          {label}
        </Text>
      )}
      <Dropdown
        style={{
          margin: 16,
          width: '100%',
          borderColor: 'gray',
          borderWidth: 0.5,
          padding: 0,
          borderRadius: 3,
          marginLeft: 0,
          paddingLeft: 5,
        }}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={selected ? selected : `-- ${label} --`}
        search={true}
        searchPlaceholder="Search..."
        inputSearchStyle={{borderColor: colors.border}}
        value={value}
        itemTextStyle={{color: '#1d5276', padding: 0, margin: 0}}
        placeholderStyle={{color: '#1d5276'}}
        onChange={(item: any) => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#1d5276',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
