/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ToggleSwitch from 'toggle-switch-react-native';
import {reload} from '../../features/reload-data/reload-data-slices';
import colors from '../../global/color/color';
import {setData} from '../../utils/local-storage/local-storage';

interface types {
  navigation: any;
}
const Setting = ({navigation}: types) => {
  const [lineChart, setLineChart] = React.useState(true);
  const [last5, setLast5] = React.useState(true);
  const [lineChartList, setLineChartList] = React.useState(false);
  const [last5Income, setLast5Income] = React.useState(false);
  const [tax, setTax] = React.useState(false);
  // const [stayLogin, setStayLogin] = React.useState(false);
  // const [faceId, setFaceId] = React.useState(false);

  const user = useSelector((state: any) => state.login?.user?.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      setLineChart(
        JSON.parse((await AsyncStorage.getItem('overview7Days')) || 'false'),
      );
      setLast5(
        JSON.parse((await AsyncStorage.getItem('5daysList')) || 'false'),
      );
      setLineChartList(
        JSON.parse((await AsyncStorage.getItem('incomeChart')) || 'false'),
      );
      setLast5Income(
        JSON.parse((await AsyncStorage.getItem('last5Income')) || 'false'),
      );
      setTax(JSON.parse((await AsyncStorage.getItem('tax')) || 'false'));
      // setStayLogin(
      //   JSON.parse((await AsyncStorage.getItem('stayLogin')) || 'false'),
      // );
      // setFaceId(JSON.parse((await AsyncStorage.getItem('faceId')) || 'false'));
    };
    getData();
  }, []);

  return (
    <ScrollView>
      <View style={{backgroundColor: colors.bgc, flex: 1, paddingBottom: 40}}>
        <View
          style={{
            backgroundColor: colors.primary,
            padding: 20,
            paddingVertical: 80,
            paddingBottom: 150,
          }}>
          <View style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
            <IonIcon name="settings-outline" size={30} color="#fff" />
            <Text
              style={{
                fontWeight: '600',
                fontSize: 30,
                color: colors.white,
                letterSpacing: 1,
                marginBottom: 2,
              }}>
              Settings
            </Text>
          </View>

          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              color: '#ccc',
            }}>
            Account Information
          </Text>
        </View>

        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <View
            style={{
              borderWidth: 1,
              borderColor: colors.primary,
              backgroundColor: colors.white,
              width: '85%',
              paddingHorizontal: 20,
              paddingVertical: 30,
              marginTop: -80,
              borderRadius: 20,
              marginBottom: 50,
            }}>
            <View>
              <Text style={{fontSize: 20, color: colors.primary}}>
                Dashboard
              </Text>
              <List
                title="Last 5 Expense"
                value={last5}
                handler={(isOn: boolean) => {
                  {
                    setLast5(!last5);
                    setData('5daysList', isOn);
                    dispatch(reload(null));
                  }
                }}
              />
              <List
                title="Last 5 Income"
                value={last5Income}
                handler={(isOn: boolean) => {
                  {
                    setLast5Income(!last5Income);
                    setData('last5Income', isOn);
                    dispatch(reload(null));
                  }
                }}
              />
              <List
                title="Income and Expenditure"
                handler={(isOn: boolean) => {
                  {
                    setLineChartList(!lineChartList);
                    setData('incomeChart', isOn);
                    dispatch(reload(null));
                  }
                }}
                value={lineChartList}
              />
              <List
                title="Last 7 Days Overview"
                handler={(isOn: boolean) => {
                  {
                    setLineChart(!lineChart);
                    setData('overview7Days', isOn);
                    dispatch(reload(null));
                  }
                }}
                value={lineChart}
              />
              <List
                title="Tax Data"
                handler={(isOn: boolean) => {
                  {
                    setTax(!tax);
                    setData('tax', isOn);
                    dispatch(reload(null));
                  }
                }}
                value={tax}
              />
            </View>

            {/* <View style={{marginTop: 20}}>
              <View>
                <Text style={{fontSize: 20, color: colors.primary}}>
                  Authentication
                </Text>
                <List
                  title="Face ID [ -- ]"
                  value={faceId}
                  handler={(isOn: boolean) => {
                    {
                      setLast5(!faceId);
                      setData('faceId', isOn);
                      dispatch(reload(null));
                    }
                  }}
                />
                <List
                  title="Stay Login for 2 Days"
                  value={stayLogin}
                  handler={(isOn: boolean) => {
                    {
                      setLast5(!stayLogin);
                      setData('stayLogin', isOn);
                      dispatch(reload(null));
                    }
                  }}
                />
              </View>
            </View> */}

            <View style={{marginTop: 20}}>
              <View>
                <Text style={{fontSize: 20, color: colors.primary}}>User</Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate('ChangePassword')}
                  style={{
                    backgroundColor: colors.bgc,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginBottom: 10,
                    marginTop: 5,
                  }}>
                  <Text style={{color: colors.primary}}>Change Password</Text>
                  <Icon name="chevron-right" size={15} />
                </TouchableOpacity>

                {!user?.irdNumber && (
                  <TouchableOpacity
                    onPress={() => navigation.navigate('EditProfile')}
                    style={{
                      backgroundColor: colors.bgc,
                      padding: 10,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginBottom: 10,
                      marginTop: 5,
                    }}>
                    <Text style={{color: colors.primary}}>Add IRD Number</Text>
                    <Icon name="chevron-right" size={15} />
                  </TouchableOpacity>
                )}

                <TouchableOpacity
                  onPress={() => navigation.navigate('Support')}
                  style={{
                    backgroundColor: colors.bgc,
                    padding: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginBottom: 10,
                    marginTop: 5,
                  }}>
                  <Text style={{color: colors.primary}}>Support</Text>
                  <Icon name="chevron-right" size={15} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Setting;

const List = ({value, handler, title}: any) => {
  return (
    <View
      style={{
        backgroundColor: colors.bgc,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 5,
      }}>
      <Text style={{color: colors.primary}}> {title}</Text>
      <ToggleSwitch
        isOn={value}
        size="medium"
        onColor="green"
        offColor={colors.primary}
        // label="Example label"
        labelStyle={{color: 'black', fontWeight: '900'}}
        onToggle={isOn => handler(isOn)}
      />
    </View>
  );
};
