/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import MainLayout from '../../components/common/main-layout/main-layout';
import {useGetAssetQuery} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';
import AssetsList from './AssetsList';

const AssetsReg = ({navigation}: any) => {
  // ! Local State
  const [refresh, setRefresh] = React.useState(false);

  const {refetch: dataRefetch, isSuccess: dataDone} = useGetAssetQuery('');

  const handlePullReload = () => {
    setRefresh(true);
    dataRefetch();

    if (dataDone) {
      setRefresh(false);
    }
  };

  return (
    <>
      <ScrollView
        style={{backgroundColor: colors.bgc}}
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => handlePullReload()}
          />
        }>
        <View style={{padding: 10}}>
          <MainLayout title="Assets List">
            <AssetsList navigation={navigation} />
          </MainLayout>
        </View>
      </ScrollView>
    </>
  );
};

export default AssetsReg;
