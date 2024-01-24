/* eslint-disable react-native/no-inline-styles */
import {Skeleton} from '@rneui/themed';
import React from 'react';
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import AssetsTable from '../../components/table/AssetsTable';
import {useGetAssetQuery} from '../../features/expense/expense-slice';

const AssetsList = ({navigation}: any) => {
  // * Get Data from Redux
  const {data: list, isLoading} = useGetAssetQuery('');

  // * Hooks
  const {width} = useWindowDimensions();
  const windowWidth = Math.floor(width);

  return (
    <>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {list?.data?.length > 0 && (
        <>
          <View>
            {list?.data?.length <= 0 && (
              <Text
                style={{
                  padding: 10,
                  textAlign: 'center',
                  backgroundColor: '#ffd9d9',
                  marginTop: 10,
                  borderRadius: 5,
                  color: 'red',
                }}>
                Data Not Found
              </Text>
            )}
          </View>
          <View style={styles.container}>
            <ScrollView horizontal={true}>
              <View>
                {list?.data?.length > 0 && (
                  <AssetsTable list={list?.data} navigation={navigation} />
                )}
                {isLoading && (
                  <View>
                    <Skeleton width={windowWidth} height={35} />
                    <View style={{height: 35}} />
                    <Skeleton width={windowWidth} height={35} />
                    <View style={{height: 35}} />
                    <Skeleton width={windowWidth} height={35} />
                  </View>
                )}
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </>
  );
};

export default AssetsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  searchBox: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between',
  },
});
