/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Platform, ScrollView, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';

const AssetsTable = ({list, navigation}: any) => {
  return (
    <View style={style.table}>
      <ScrollView horizontal>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              paddingVertical: 7,
            }}>
            <Text style={{color: 'white', width: 130, padding: 10}}>
              Purchase Date
            </Text>
            {/* <Text style={{color: 'white', width: 230, padding: 10}}>
              Assets Type
            </Text> */}
            <Text style={{color: 'white', width: 100, padding: 10}}>Price</Text>
            <Text style={{color: 'white', width: 140, padding: 10}}>
              Depreciation Rate
            </Text>
            <Text style={{color: 'white', width: 50, padding: 10}} />
          </View>

          <View>
            {list?.map((item: any, index: number) => (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  backgroundColor: (index + 1) % 2 ? '#fcfcfc' : '#e2e9ed',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: colors.text,
                    width: 130,
                    padding: 10,
                  }}>
                  {formateDate(item?.purchaseDate)}
                </Text>

                {/* <Text
                  style={{
                    color: colors.text,
                    width: 230,
                    padding: 10,
                  }}>
                  {item?.name}
                </Text> */}

                <Text
                  style={{
                    color: colors.text,
                    width: 100,
                    padding: 10,
                  }}>
                  {/* {categoryName(item?.expenseType)} */}
                  {`$${item?.endingValue.toFixed(2)}`}
                </Text>

                <Text
                  style={{
                    color: colors.text,
                    width: 140,
                    padding: 10,
                  }}>
                  {`$${item?.purchasePrice.toFixed(2)}`}
                </Text>

                <Text
                  style={{
                    color: colors.text,
                    width: 50,
                    padding: 10,
                  }}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('DepreciationTable', {id: item?._id})
                    }
                    style={{
                      borderColor: colors.primary,
                      borderStyle: 'solid',
                      borderWidth: 1,
                      padding: 5,
                      borderRadius: 5,
                    }}>
                    <Icon name="eye" size={20} />
                  </TouchableOpacity>
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    width: '100%',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  actionBtn: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 6,
  },
  status: {
    padding: 5,
    textAlign: 'center',
    borderRadius: 4,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default AssetsTable;
