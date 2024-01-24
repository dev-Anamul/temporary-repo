/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useTaxDataQuery} from '../../features/dashboard/dashboard-slices';
import colors from '../../global/color/color';

const TaxableTable = () => {
  // * Redux
  const user = useSelector((state: any) => state.login?.user);
  const {data} = useTaxDataQuery(user?.user?.id);

  return (
    <>
      {data?.data?.length > 0 && (
        <View style={style.table}>
          <ScrollView horizontal>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: colors.primary,
                }}>
                <Text style={{color: 'white', width: 50, padding: 10}}>#</Text>
                <Text style={{color: 'white', width: 100, padding: 10}}>
                  Year
                </Text>
                <Text style={{color: 'white', width: 100, padding: 10}}>
                  Income
                </Text>
                <Text style={{color: 'white', width: 100, padding: 10}}>
                  Expense
                </Text>
                <Text style={{color: 'white', width: 150, padding: 10}}>
                  Taxable Income
                </Text>
                <Text style={{color: 'white', width: 100, padding: 10}}>
                  TAX
                </Text>
              </View>

              <View>
                {data?.data?.map((item: any, index: number) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      backgroundColor: (index + 1) % 2 ? '#fcfcfc' : '#e2e9ed',
                    }}>
                    <Text
                      style={{
                        color: colors.text,
                        width: 50,
                        padding: 10,
                      }}>
                      {index + 1}
                    </Text>
                    <Text
                      style={{
                        color: colors.text,
                        width: 100,
                        padding: 10,
                      }}>
                      {item?.fiscal_year}
                    </Text>
                    <Text
                      style={{
                        color: colors.text,
                        width: 100,
                        padding: 10,
                      }}>
                      ${item?.expense.toFixed(2)}
                    </Text>
                    <Text
                      style={{
                        color: colors.text,
                        width: 100,
                        padding: 10,
                      }}>
                      ${item?.income.toFixed(2)}
                    </Text>
                    <Text
                      style={{
                        color: colors.text,
                        width: 150,
                        padding: 10,
                      }}>
                      ${item?.tax.toFixed(2)}
                    </Text>
                    <Text
                      style={{
                        color: colors.text,
                        width: 100,
                        padding: 10,
                      }}>
                      ${item?.taxableIncome.toFixed(2)}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default TaxableTable;

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
});
