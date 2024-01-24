/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Platform,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import urid from 'urid';
import {
  dashboardSlices,
  useGetFiscalYearsQuery,
} from '../../features/dashboard/dashboard-slices';
import colors from '../../global/color/color';

const Reports = () => {
  // * Redux Hokes
  const {
    data: FiscalYears,
    refetch,
    isLoading,
    isSuccess,
  } = useGetFiscalYearsQuery(null);

  const [refresh, setRefresh] = React.useState(false);

  const handlePullReload = () => {
    setRefresh(true);
    refetch();
    if (!isLoading && isSuccess) {
      setRefresh(false);
    }
  };

  return (
    <View style={{backgroundColor: colors.bgc, flex: 1}}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refresh}
            onRefresh={() => handlePullReload()}
          />
        }>
        <View style={{paddingBottom: 40}}>
          <View
            style={{
              backgroundColor: colors.primary,
              padding: 20,
              paddingVertical: 80,
              paddingBottom: 150,
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
              <FontAwesome name="file-pdf-o" size={30} color="#fff" />
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 30,
                  color: colors.white,
                  letterSpacing: 1,
                  marginBottom: 2,
                }}>
                Reports
              </Text>
            </View>

            <Text
              style={{
                fontWeight: '400',
                fontSize: 16,
                color: '#ccc',
              }}>
              you can download all report from here
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
                  Financial Statements
                </Text>
                <List title="Current Financial Year to date" type="statCurr" />
                {FiscalYears?.data?.length > 0 &&
                  FiscalYears?.data?.map((item: any, index: number) => (
                    <List
                      key={index}
                      id={item?._id}
                      type="statFiscal"
                      title={`${item?.fiscalYear} Filed`}
                    />
                  ))}
                <Text
                  style={{fontSize: 20, color: colors.primary, marginTop: 15}}>
                  Expenses Summaries
                </Text>
                <List
                  title="Current Financial Year to date"
                  type="FinancialCurr"
                />

                {FiscalYears?.data?.length > 0 &&
                  FiscalYears?.data?.map((item: any, index: number) => (
                    <List
                      key={index}
                      id={item?._id}
                      type="FinancialFiscal"
                      title={`Expense for ${item?.fiscalYear}`}
                    />
                  ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Reports;

const List = ({title, id, type}: any) => {
  const urId = urid();
  const dispatch = useDispatch();
  const date = new Date();
  const userId = useSelector((state: any) => state.login.user.user._id);

  // * Handle Download
  const handleDownload = async (file: string) => {
    const destPath =
      RNFetchBlob.fs.dirs.DownloadDir +
      `/Report-${Math.floor(date.getDate() + date.getSeconds() * 2)}.pdf`;
    const filePath = RNFetchBlob.fs.dirs.DocumentDir + `/Report-${urId}.pdf`;
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: filePath,
        notification: true,
      },

      android: {
        fileCache: false,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: destPath,
          description: 'Downloading PDF...',
        },
      },
    });
    try {
      const response = await RNFetchBlob.config(configOptions)
        .fetch('GET', file)
        .then(res => {
          // in iOS, we want to save our files by opening up the saveToFiles bottom sheet action.
          // whereas in Android, the download manager is handling the download for us.
          if (Platform.OS === 'ios') {
            RNFetchBlob.ios.openDocument(res.data);
          } else {
            RNFetchBlob.android.actionViewIntent(res.path());
          }
        });

      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: 'Your report has downloaded. ',
      });
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  // * Handle Download Actions
  const downloadPDF = async () => {
    if (type === 'statFiscal') {
      dispatch(
        dashboardSlices.endpoints.getFinancialReport.initiate({
          fiscalId: id,
        }),
      )
        .unwrap()
        .then((res: any) => {
          console.log(res?.file);
          handleDownload(res?.file);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (type === 'statCurr') {
      dispatch(
        dashboardSlices.endpoints.getFinancialReport.initiate({
          userId: userId,
        }),
      )
        .unwrap()
        .then((res: any) => {
          console.log(res?.file);
          handleDownload(res?.file);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (type === 'FinancialCurr') {
      dispatch(
        dashboardSlices.endpoints.getExpenseSummaries.initiate({
          userId: userId,
        }),
      )
        .unwrap()
        .then((res: any) => {
          console.log(res?.file);
          handleDownload(res?.file);
        })
        .catch(err => {
          console.log(err);
        });
    } else if (type === 'FinancialFiscal') {
      dispatch(
        dashboardSlices.endpoints.getExpenseSummaries.initiate({
          fiscalId: id,
        }),
      )
        .unwrap()
        .then((res: any) => {
          console.log(res?.file);
          handleDownload(res?.file);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Something went wrong, please contact to help desk',
      });
    }
  };

  return (
    <TouchableOpacity
      onPress={downloadPDF}
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
      <Text style={{color: colors.primary, fontSize: 13}}> {title}</Text>
      <AntIcon style={{color: colors.primary}} name="pdffile1" size={25} />
    </TouchableOpacity>
  );
};
