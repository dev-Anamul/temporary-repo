import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import DepreciationTable from '../components/table/DepreciationTable';
import colors from '../global/color/color';
import ExpenseForm from '../screens/add-expense/expense-form';
import UploadImage from '../screens/add-expense/upload-image';
import ChangePassword from '../screens/change-password/change-password';
import NoInternet from '../screens/no-internet/no-internet';
import NotificationSinglePage from '../screens/notifications/single-page/single-page';
import EditProfile from '../screens/profile/edit-profile';
import SubmitSuccess from '../screens/submit-success/submit-success';
import Support from '../screens/support/support';
import DrawerNavigator from './drawer-navigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitleStyle: {color: colors.primary},
      }}>
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="success" component={SubmitSuccess} />
      <Stack.Screen
        name="NotificationPage"
        component={NotificationSinglePage}
        options={{headerShown: true, title: 'Notification'}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: true, title: 'Edit Profile'}}
      />
      <Stack.Screen name="NoInternet" component={NoInternet} />

      <Stack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerShown: true, title: 'Change Password'}}
      />
      <Stack.Screen
        name="Support"
        component={Support}
        options={{headerShown: true, title: 'Support'}}
      />
      <Stack.Screen
        name="AddExpense"
        component={ExpenseForm}
        options={{
          headerShown: true,
          title: 'Add Expense',
          headerTitleStyle: {color: colors.primary},
        }}
      />
      <Stack.Screen
        name="UploadImage"
        component={UploadImage}
        options={{headerShown: true, title: 'Upload Expense Receipt'}}
      />

      <Stack.Screen
        name="DepreciationTable"
        component={DepreciationTable}
        options={{headerShown: true, title: 'Depreciation'}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
