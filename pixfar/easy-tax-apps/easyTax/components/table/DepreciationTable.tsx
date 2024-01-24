/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {
  ActivityIndicator,
  Platform,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useGetDepreciationQuery} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';

const DepreciationTable = () => {
  const route: any = useRoute();
  const id = route.params.id;

  const [refresh, setRefresh] = React.useState(false);

  const {data, isLoading, isSuccess, refetch} = useGetDepreciationQuery(id);

  const handlePullReload = () => {
    setRefresh(true);

    refetch();

    if (isSuccess && !isLoading) {
      setRefresh(false);
    }
  };

  return (
    <>
      {isLoading && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            zIndex: 9999,
            width: '100%',
            height: '100%',
          }}>
          <ActivityIndicator size={20} />
        </View>
      )}
      {data?.data?.length <= 0 && (
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
      {!isLoading && data?.data?.length > 0 && (
        <ScrollView
          style={{padding: 10}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View style={style.table}>
            <ScrollView horizontal>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: colors.primary,
                    paddingVertical: 7,
                  }}>
                  <Text style={{color: 'white', width: 100, padding: 10}}>
                    Year
                  </Text>
                  <Text style={{color: 'white', width: 120, padding: 10}}>
                    Opening Value
                  </Text>
                  <Text style={{color: 'white', width: 180, padding: 10}}>
                    Depreciation Amount
                  </Text>
                  <Text style={{color: 'white', width: 120, padding: 10}}>
                    Description
                  </Text>
                  <Text style={{color: 'white', width: 200, padding: 10}}>
                    Accumulated Depreciation
                  </Text>
                  <Text style={{color: 'white', width: 110, padding: 10}}>
                    Ending Value
                  </Text>
                </View>

                <View>
                  {data?.data?.map((item: any, index: number) => (
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        backgroundColor:
                          (index + 1) % 2 ? '#fcfcfc' : '#e2e9ed',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          color: colors.text,
                          width: 100,
                          padding: 10,
                        }}>
                        {item?.fiscalYear}
                      </Text>

                      <Text
                        style={{
                          color: colors.text,
                          width: 120,
                          padding: 10,
                        }}>
                        ${item?.openingValue.toFixed(2)}
                      </Text>

                      <Text
                        style={{
                          color: colors.text,
                          width: 180,
                          padding: 10,
                        }}>
                        {`$${item?.depreciation.toFixed(2)}`}
                      </Text>

                      <Text
                        style={{
                          color: colors.text,
                          width: 120,
                          padding: 10,
                        }}>
                        {`${item?.depreciationRate}%`}
                      </Text>

                      <Text
                        style={{
                          color: colors.text,
                          width: 200,
                          padding: 10,
                        }}>
                        {`${item?.accumulatedDepreciation}%`}
                      </Text>

                      <Text
                        style={{
                          color: colors.text,
                          width: 110,
                          padding: 10,
                        }}>
                        {`$${item?.endingValue}`}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const style = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    width: '100%',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  actionBtn: {
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 6,
  },
  status: {
    padding: 5,
    textAlign: 'center',
    borderRadius: 4,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
});

export default DepreciationTable;
