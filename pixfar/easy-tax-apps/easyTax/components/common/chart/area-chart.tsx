import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';
import {
  useGet7DaysDataQuery,
  useGet7DaysIncomeQuery,
} from '../../../features/dashboard/dashboard-slices';
import colors from '../../../global/color/color';

const CustomAreaChart = () => {
  const {width} = useWindowDimensions();
  const windowWidth = Math.floor(width);

  // ! Redux Hooks
  const {data} = useGet7DaysDataQuery(null);
  const {data: incomes} = useGet7DaysIncomeQuery(null);

  // ! Expense Data
  const expense = data?.data?.expenses;
  const income = incomes?.data?.incomes;

  // ! Chart Default Data
  const defaultData = [
    {value: 0},
    {value: 0, label: 'Sat'},
    {value: 0, label: 'Sun'},
    {value: 0, label: 'Mon'},
    {value: 0, label: 'Tue'},
    {value: 0, label: 'Wed'},
    {value: 0, label: 'Thu'},
    {value: 0, label: 'Fri'},
    {value: 0},
  ];

  // * Chart Expense Data Format
  console.log('7 Days Data', expense);
  const formattedData = [
    {
      value:
        expense?.filter((item: any) => item?.label === 'Friday')[0]?.expense ||
        0,
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Saturday')[0]
          ?.expense || 0,
      label: 'Sat',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Sunday')[0]?.expense ||
        0,
      label: 'Sun',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Monday')[0]?.expense ||
        0,
      label: 'Mon',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Tuesday')[0]?.expense ||
        0,
      label: 'Tue',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Wednesday')[0]
          ?.expense || 0,
      label: 'Wed',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Thursday')[0]
          ?.expense || 0,
      label: 'Thu',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Friday')[0]?.expense ||
        0,
      label: 'Fri',
    },
    {
      value:
        expense?.filter((item: any) => item?.label === 'Saturday')[0]
          ?.expense || 0,
    },
  ];

  // * Chart Income Data Format
  console.log('Expense Data', income);
  const formattedIncomeData = [
    {
      value:
        income?.filter((item: any) => item?.label === 'Friday')[0]
          ?.totalAmount || 0,
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Saturday')[0]
          ?.totalAmount || 0,
      label: 'Sat',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Sunday')[0]
          ?.totalAmount || 0,
      label: 'Sun',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Monday')[0]
          ?.totalAmount || 0,
      label: 'Mon',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Tuesday')[0]
          ?.totalAmount || 0,
      label: 'Tue',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Wednesday')[0]
          ?.totalAmount || 0,
      label: 'Wed',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Thursday')[0]
          ?.totalAmount || 0,
      label: 'Thu',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Friday')[0]
          ?.totalAmount || 0,
      label: 'Fri',
    },
    {
      value:
        income?.filter((item: any) => item?.label === 'Saturday')[0]
          ?.totalAmount || 0,
    },
  ];

  return (
    <View>
      <LineChart
        areaChart
        // curved
        // data={isLoading ? defaultData : [{value: 0}, ...formattedData]}
        data={formattedData || defaultData}
        data2={formattedIncomeData || defaultData}
        width={windowWidth}
        showVerticalLines
        spacing={windowWidth / (windowWidth < 400 ? 10 : 9)}
        initialSpacing={-20}
        color1="red"
        color2={colors.primary}
        dataPointsColor1="red"
        dataPointsColor2={colors.primary}
        startFillColor1="red"
        startFillColor2={colors.primary}
        startOpacity={0.8}
        endOpacity={0.3}
      />
    </View>
  );
};

export default CustomAreaChart;
