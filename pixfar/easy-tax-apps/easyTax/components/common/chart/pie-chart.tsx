/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {PieChart} from 'react-native-gifted-charts';
import {useGetAllCategoryExpenseQuery} from '../../../features/dashboard/dashboard-slices';
import colors from '../../../global/color/color';
import {colorArrayWithIDs} from '../../../utils/colors/auto-color';

const CustomPieChart = ({topExpense}: any) => {
  const {data, isLoading} = useGetAllCategoryExpenseQuery(null);
  const expense = data?.data?.expenses;

  // * Add toFixed
  const addTofixed = (amount: any) => {
    const toFixedAmount = amount.toString();
    const number = Number(toFixedAmount).toFixed(2);

    if (toFixedAmount) {
      return Number(number);
    }
  };

  // * Convert Data for Pie Chart
  const mainData = expense?.map((item: any, index: number) => {
    return {
      label: item?.expenseType,
      value: addTofixed(item?.totalCost),
      color: colorArrayWithIDs[index + 1]?.color,
    };
  });

  return (
    <>
      {expense?.length <= 0 && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 280,
              width: 280,
              borderWidth: 1,
              borderRadius: 140,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: colors.primary,
              backgroundColor: colors.bgc,
            }}>
            <View
              style={{
                height: 120,
                width: 120,
                borderWidth: 1,
                borderRadius: 100,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: colors.primary,
                backgroundColor: colors.white,
              }}>
              <Text style={{color: colors.primary}}>No Data</Text>
            </View>
          </View>
        </View>
      )}
      {isLoading && (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View
            style={{
              height: 280,
              width: 280,
              borderWidth: 1,
              borderRadius: 140,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderColor: colors.primary,
              backgroundColor: colors.bgc,
            }}>
            <ActivityIndicator size={20} color={colors.primary} />
          </View>
        </View>
      )}
      {!isLoading && expense?.length > 0 && (
        <>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 30,
            }}>
            <PieChart
              data={mainData}
              showText
              donut
              textColor="black"
              radius={150}
              textSize={9}
              focusOnPress
              showValuesAsLabels
              showTextBackground
              textBackgroundColor={colors.white}
              textBackgroundRadius={20}
              toggleFocusOnPress={true}
              centerLabelComponent={() => {
                return (
                  <View>
                    <Text
                      style={{
                        color: 'black',
                        fontSize: 15,
                        textAlign: 'center',
                      }}>
                      Top Expense
                    </Text>
                    <Text
                      style={{
                        color: colors.primary,
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      {topExpense.toFixed(2) || 0}$
                    </Text>
                  </View>
                );
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              gap: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {mainData.map((item: any, i: number) => {
              return (
                <View key={i}>{renderLegend(item.label, item.color)}</View>
              );
            })}
          </View>
        </>
      )}
    </>
  );
};

export default CustomPieChart;

const renderLegend = (text: string, color: string) => {
  return (
    <View
      style={{flexDirection: 'row', marginBottom: 12, alignItems: 'center'}}>
      <View
        style={{
          height: 15,
          width: 15,
          marginRight: 5,
          marginLeft: 10,
          borderRadius: 4,
          backgroundColor: color || 'black',
        }}
      />
      <Text style={{color: 'black', fontSize: 15}}>{text || ''}</Text>
    </View>
  );
};
