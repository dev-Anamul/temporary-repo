/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import colors from '../../../global/color/color';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useSingleNotificationQuery} from '../../../features/notification/notiication-slices';
import {ActivityIndicator} from 'react-native';

interface types {
  navigation: any;
  route: any;
}
const NotificationSinglePage = ({navigation, route}: types) => {
  const id = route?.params?.id;
  const handleBack = () => {
    navigation.navigate('Notifications');
  };
  const {data, isLoading} = useSingleNotificationQuery(id);

  return (
    <>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && (
        <View style={{flex: 1, backgroundColor: colors.bgc}}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              {!data?.data?.imageUrl && (
                <View
                  style={{
                    height: 150,
                    width: 150,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: colors.primary,
                    borderRadius: 100,
                  }}>
                  <FaIcon name="bell" size={80} color={colors.white} />
                </View>
              )}
              {data?.data?.imageUrl && (
                <Image
                  source={{uri: data?.data?.imageUrl}}
                  style={{height: 300, width: '100%', objectFit: 'contain'}}
                />
              )}
              <Text
                style={{
                  fontSize: 20,
                  marginTop: 15,
                  fontWeight: '500',
                  color: '#1d5276',
                  textAlign: 'center',
                }}>
                {data?.data?.title}
              </Text>

              <Text
                style={{
                  marginTop: 10,
                  fontSize: 17,
                  width: '85%',
                  textAlign: 'center',
                  color: 'gray',
                }}>
                {data?.data?.body}
              </Text>
              <TouchableOpacity style={style.btn} onPress={handleBack}>
                <Text style={{color: colors.white}}>Back</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      )}
    </>
  );
};

export default NotificationSinglePage;

const style = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 30,
    marginTop: 20,
  },
});
