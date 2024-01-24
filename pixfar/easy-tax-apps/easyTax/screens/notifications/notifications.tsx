/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  RefreshControl,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useGetNotificationsQuery} from '../../features/notification/notiication-slices';
import {notificationReload} from '../../features/reload-data/reload-data-slices';
import colors from '../../global/color/color';
import NotificationList from './notification-list';

const Notifications = ({navigation}: any) => {
  const [page, setPage] = React.useState(10);
  const [reload, setReload] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);

  const {height} = useWindowDimensions();
  const dispatch = useDispatch();

  const {data, isLoading, refetch, isSuccess} = useGetNotificationsQuery(page);
  const array = data?.data || [];

  const renderItem = ({item}: any) => {
    return (
      <View style={{margin: 10, marginBottom: 5}}>
        <NotificationList navigation={navigation} data={item} />
      </View>
    );
  };

  const footerComponent = () => {
    return (
      <>
        {isLoading && (
          <View style={{paddingHorizontal: 5}}>
            <ActivityIndicator size={20} />
          </View>
        )}
      </>
    );
  };

  const handleReload = () => {
    setPage(prev => prev + 10);
  };

  // * Notification Handler
  const handleRefresh = () => {
    setReload(true);

    refetch();
    dispatch(notificationReload(null));
    if (!isLoading && isSuccess) {
      setReload(false);
    }
  };

  // * Notification Handler
  const handlePullReload = () => {
    setRefresh(true);

    refetch();
    dispatch(notificationReload(null));

    if (!isLoading && isSuccess) {
      setRefresh(false);
    }
  };

  return (
    <>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={20} />
        </View>
      )}
      {data?.data?.length <= 0 && (
        <ScrollView
          style={{flex: 1, backgroundColor: colors.bgc}}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              height: height - 115,
            }}>
            <Text style={{color: colors.primary}}>No Notification</Text>
          </View>
        </ScrollView>
      )}
      {data?.data?.length > 0 && (
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <FlatList
            data={array}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
            ListFooterComponent={footerComponent}
            onEndReachedThreshold={0}
            onEndReached={handleReload}
            onRefresh={handleRefresh}
            refreshing={reload}
          />
          <View style={{marginBottom: 10}} />
        </View>
      )}
    </>
  );
};

export default Notifications;
