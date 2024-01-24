/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntIcon from 'react-native-vector-icons/Entypo';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {useGetNotificationsQuery} from '../features/notification/notiication-slices';
import colors from '../global/color/color';
import AddExpense from '../screens/add-expense/add-expense';
import Dashboard from '../screens/dashboard/dashboard';
import List from '../screens/list/list';
import Notifications from '../screens/notifications/notifications';
import Profile from '../screens/profile/profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const {data, refetch} = useGetNotificationsQuery();
  const userImage = useSelector(state => state.login?.user?.user?.avatar);
  const {notificationReload} = useSelector(state => state.reload);

  // * Update Notification Count
  React.useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationReload]);

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarInactiveTintColor: '#1d5276',
          tabBarActiveTintColor: '#3cb558',
          tabBarStyle: {
            height: Platform.OS === 'ios' ? 90 : 60,
            borderTopColor: colors.border,
            borderTopWidth: 1,
          },
          tabBarLabelStyle: {fontSize: 13, marginTop: -10, marginBottom: 5},

          tabBarIcon: ({focused, color, size}) => {
            let iconsName;

            if (route.name === 'Dashboard') {
              iconsName = focused ? '' : 'home';
            } else if (route.name === 'Expense') {
              iconsName = focused ? 'pluscircle' : 'pluscircleo';
            } else if (route.name === 'Notifications') {
              return focused ? (
                <FaIcon name="bell" size={size} color={color} />
              ) : (
                <FaIcon name="bell-o" size={size} color={color} />
              );
            } else if (route.name === 'Expense List') {
              return <FaIcon name="list" size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return (
                <Image
                  source={
                    userImage
                      ? {uri: userImage}
                      : require('../assets/avatar.jpg')
                  }
                  style={{
                    height: 30,
                    width: 30,
                    borderRadius: 50,
                  }}
                  height={10}
                  width={10}
                />
              );
            }

            if (route.name === 'Dashboard' && focused) {
              return <EntIcon name="home" size={size} color={color} />;
            } else {
              return <AntIcon name={iconsName} size={size} color={color} />;
            }
          },
        })}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{tabBarLabel: 'Home'}}
        />
        <Tab.Screen name="Expense List" component={List} />
        <Tab.Screen name="Expense" component={AddExpense} />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={
            data?.totalUnreadItems === 0
              ? false
              : true && {
                  tabBarBadge: data?.totalUnreadItems,
                }
          }
        />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </SafeAreaProvider>
  );
};

export default BottomTabNavigator;
