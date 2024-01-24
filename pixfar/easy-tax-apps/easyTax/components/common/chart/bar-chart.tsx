/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {screenWidth} from 'react-native-gifted-charts/src/utils/constants';
import {
  useGet30DaysIncomeQuery,
  useGetMonthlyExpenseQuery,
} from '../../../features/dashboard/dashboard-slices';
import colors from '../../../global/color/color';

const CustomBarChart = () => {
  const {data} = useGetMonthlyExpenseQuery(null);
  const {data: incomes} = useGet30DaysIncomeQuery(null);

  const expense = data?.data?.expenses;
  const income = incomes?.data?.incomes;

  // ! Data Filter through month
  const filteredData = (month: number) => {
    return (
      expense?.filter((item: any) => item?.month === month)[0]?.totalAmount || 0
    );
  };
  const filteredIncomeData = (month: number) => {
    return (
      income?.filter((item: any) => item?._id?.month === month)[0]
        ?.totalAmount || 0
    );
  };

  // ! Formatted Data
  const formattedData = [
    {
      value: filteredData(1),
      label: 'Jan',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(1), frontColor: colors.primary},

    {
      value: filteredData(2),
      label: 'Feb',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(2), frontColor: colors.primary},

    {
      value: filteredData(3),
      label: 'Mar',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(3), frontColor: colors.primary},

    {
      value: filteredData(4),
      label: 'Apr',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(4), frontColor: colors.primary},

    {
      value: filteredData(5),
      label: 'May',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(5), frontColor: colors.primary},

    {
      value: filteredData(6),
      label: 'Jun',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(6), frontColor: colors.primary},

    {
      value: filteredData(7),
      label: 'Jul',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(7), frontColor: colors.primary},

    {
      value: filteredData(8),
      label: 'Agu',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(8), frontColor: colors.primary},

    {
      value: filteredData(9),
      label: 'Sep',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(9), frontColor: colors.primary},

    {
      value: filteredData(10),
      label: 'Oct',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(10), frontColor: colors.primary},

    {
      value: filteredData(11),
      label: 'Nov',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(11), frontColor: colors.primary},

    {
      value: filteredData(12),
      label: 'Dec',
      spacing: 2,
      labelWidth: 30,
      frontColor: '#ED6665',
    },
    {value: filteredIncomeData(12), frontColor: colors.primary},
  ];

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
      }}>
      <BarChart
        data={formattedData}
        barWidth={screenWidth / 48}
        spacing={20}
        isAnimated
        roundedTop
        xAxisThickness={2}
        yAxisThickness={2}
        yAxisTextStyle={{color: colors.primary}}
        xAxisLabelTextStyle={{color: colors.primary}}
        renderTooltip={(item: any) => {
          return (
            <View
              style={{
                marginBottom: 5,
                marginLeft: -10,
                backgroundColor: item.frontColor,
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 4,
              }}>
              <Text style={{color: colors.white}}>{item.value}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default CustomBarChart;
