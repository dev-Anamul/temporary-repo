/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {Image} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Sidebar from '../components/sidebar/Sidebar';
import colors from '../global/color/color';
import AddExpense from '../screens/add-expense/add-expense';
import AssetsReg from '../screens/assets/AssetsReg';
import ImportExpense from '../screens/import-expense/import-expense';
import AddIncome from '../screens/income/add-income/add-income';
import IncomeList from '../screens/income/income-list/income-list';
import List from '../screens/list/list';
import Reports from '../screens/reports/reports';
import Setting from '../screens/setting/setting';
import Support from '../screens/support/support';
import BottomTabNavigator from './bottom-tab-navigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveBackgroundColor: colors.bgc,
        drawerActiveTintColor: colors.primary,
        drawerInactiveTintColor: colors.primary,
        headerRight: () => (
          <Image
            source={require('../assets/logo.png')}
            style={{height: 50, width: 100}}
          />
        ),
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
        headerStyle: {
          backgroundColor: '#00000001',
        },
        headerTitleStyle: {
          marginLeft: -25,
        },
      }}
      drawerContent={props => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          headerTitle: '',
          drawerIcon: ({color}) => (
            <IonIcon name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Expense List"
        component={List}
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="list-outline" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Add Expense"
        component={AddExpense}
        options={{
          drawerIcon: ({color}) => (
            <AntIcon name="plussquareo" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Income List"
        component={IncomeList}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome6 name="money-check-dollar" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Add Income"
        component={AddIncome}
        options={{
          drawerIcon: ({color}) => (
            <AntIcon name="plussquareo" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Import Expense"
        component={ImportExpense}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome6 name="file-import" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Reports"
        component={Reports}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="file-pdf-o" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Assets Register"
        component={AssetsReg}
        options={{
          drawerIcon: ({color}) => (
            <AntIcon name="linechart" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Support"
        component={Support}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="support-agent" size={22} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Settings"
        component={Setting}
        options={{
          drawerIcon: ({color}) => (
            <IonIcon name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
