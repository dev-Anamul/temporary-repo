/* eslint-disable react-native/no-inline-styles */
import {useLinkTo} from '@react-navigation/native';
import Papa from 'papaparse';
import React from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {readFile, writeFile} from 'react-native-fs';
import {PERMISSIONS, RESULTS, check} from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'rn-fetch-blob';
import XLSX from 'xlsx';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {useBulkExpenseMutation} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';

const Reports = () => {
  // * Local State
  const [csvData, setCsvData] = React.useState([]);

  // * Hokes
  const linkTo = useLinkTo();
  const date = new Date();

  // * Redux
  const [bulkExpense, {isLoading, isSuccess}] = useBulkExpenseMutation();
  const {data: category} = useGetCategoriesQuery(undefined);

  // * Get Category Id
  const categoryName = (name: string) => {
    return category?.data?.filter((item: any) => item?.name === name)[0]?.id;
  };

  // * Csv Import Handler
  const importCsv = async () => {
    try {
      setCsvData([]);
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });

      // * Get File Ext
      const fileName: any = res[0]?.name?.split('.');
      const fileExt = fileName[fileName?.length - 1];

      // * Check Ext Validation
      if (fileExt !== 'csv') {
        Toast.show({
          type: 'error',
          text1: 'Please upload CSV file',
        });
      } else {
        // * Read Csv File
        readFile(res[0].uri, 'ascii').then(res => {
          const wb = XLSX.read(res, {type: 'binary'});
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          const data: any = XLSX.utils.sheet_to_json(ws, {header: 1});

          let readeData: any = [];
          for (let i = 1; i < data?.length; i++) {
            readeData.push({
              date: data[i][3],
              category: data[i][0],
              description: data[i][2],
              amount: data[i][1],
            });
          }

          // * Set Data in local
          setCsvData(readeData);
        });
      }
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(
          'User cancelled the picker, exit any dialogs or menus and move on',
        );
      } else {
        throw err;
      }
    }
  };

  // * Xsv Data Read Handler
  const handleBulkUpload = () => {
    let bulkData: any = [];

    for (let i = 0; i < csvData?.length; i++) {
      bulkData.push({
        expenseDate: csvData[i]?.date,
        expenseType: categoryName(csvData[i]?.category),
        description: csvData[i]?.description,
        totalAmount: csvData[i]?.amount,
        expenseName: 'Expense Name',
        isGSTClaimable: false,
      });
    }

    console.log('bulkData', bulkData);

    // * Post Bulk Data
    bulkExpense({expenses: bulkData});
  };

  // * Example CSV Data
  const exampleCSVData = [
    {
      ExpenseType: 'Tools',
      Amount: 10,
      Description: 'Expense Description',
      CreateTime: '2024-01-03',
      Note: 'You have to put valid expense type, name and time format',
    },
  ];

  const downloadCSVFile = async () => {
    try {
      // Convert the array to CSV format using papaparse
      const csv = Papa.unparse(exampleCSVData);

      // Create a temporary file path for the CSV file
      const filePath = `${
        RNFetchBlob.fs.dirs.DownloadDir
      }/Fluxx-Example-${date.getMilliseconds()}.csv`;

      // Write the CSV data to the file
      await RNFetchBlob.fs.writeFile(filePath, csv, 'utf8');

      // Use the Android download manager to notify the user about the file download
      await RNFetchBlob.android.actionViewIntent(filePath, 'text/csv');

      //console.log('CSV file downloaded successfully');
      Toast.show({
        type: 'success',
        text1: 'CSV Downloaded Success',
      });
    } catch (error) {
      console.error('Error downloading CSV file:', error);
    }
  };

  // * Download Example CSV Data
  const exportDataToCsv = async () => {
    // const urId = urid();
    const downloaded = exampleCSVData || [];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(downloaded);
    XLSX.utils.book_append_sheet(wb, ws, 'User');
    const wbout = XLSX.write(wb, {
      type: 'binary',
      bookType: 'csv',
    });
    let destPath = '';
    if (Platform.OS === 'ios') {
      destPath =
        RNFetchBlob.fs.dirs.DocumentDir +
        `/Fluxx-Example-${date.getMilliseconds()}.csv`;
    } else {
      destPath =
        RNFetchBlob.fs.dirs.DownloadDir +
        `/Fluxx-Example-${date.getMilliseconds()}.csv`;
    }
    const configOptions = Platform.select({
      ios: {
        fileCache: true,
        path: destPath,
        notification: true,
      },

      android: {
        fileCache: false,
        addAndroidDownloads: {
          useDownloadManager: true,
          notification: true,
          path: destPath,
          description: 'Downloading CSV...',
        },
      },
    });
    writeFile(destPath, wbout, 'ascii')
      .then(() => {
        if (Platform.OS === 'ios') {
          RNFetchBlob.ios.openDocument(destPath);
        }
        Toast.show({
          type: 'success',
          text1: 'CSV Template Downloaded',
        });
      })
      .catch(err => console.log(err));
  };

  // * Check File Write Permissions

  async function checkStoragePermission() {
    try {
      if (Platform.OS === 'android') {
        const result = await check(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
        console.log('result =>', result);
        if (result === RESULTS.GRANTED) {
          exportDataToCsv();
        } else {
          // Toast.show({
          //   type: 'error',
          //   text1: 'Permission Error',
          //   text2: 'You do not have suficient permission to media library.',
          // });
          // exportDataToCsv();
        }
      }

      if (Platform.OS === 'ios') {
        const result = await check(PERMISSIONS.IOS.MEDIA_LIBRARY);
        if (result === RESULTS.GRANTED) {
          exportDataToCsv();
        } else {
          Toast.show({
            type: 'error',
            text1: 'Permission Error',
            text2: 'You do not have suficient permission to media library.',
          });
        }
      }
    } catch (err) {
      console.warn(err);
    }
  }

  // * Reset Array and Handle Success
  React.useEffect(() => {
    if (isSuccess && !isLoading) {
      setCsvData([]);
      Toast.show({
        type: 'success',
        text1: 'Bulk Expenses',
        text2: 'Expenses added successfully',
      });
      linkTo('/Expense List');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess, isLoading]);

  return (
    <View style={{backgroundColor: colors.bgc, flex: 1}}>
      <Icons
        style={{position: 'absolute', top: 100, right: 100}}
        onPress={() => Alert.alert('Hello Achem')}
        name="cloud-download"
        size={25}
        color="red"
      />
      <ScrollView>
        <View style={{paddingBottom: 40}}>
          <View
            style={{
              backgroundColor: colors.primary,
              padding: 20,
              paddingVertical: 80,
              paddingBottom: 150,
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row', gap: 10}}>
              <FontAwesome name="file-import" size={30} color="#fff" />
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 30,
                  color: colors.white,
                  letterSpacing: 1,
                  marginBottom: 2,
                }}>
                {csvData?.length > 0 ? 'Uploaded Data' : 'Import Expense'}
              </Text>
            </View>

            {csvData?.length <= 0 && (
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: '#ccc',
                }}>
                We support CSV with specified template.
              </Text>
            )}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  color: '#ccc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                Download CSV template here &nbsp;
              </Text>
              <TouchableOpacity
                onPress={
                  Platform.OS === 'ios'
                    ? checkStoragePermission
                    : downloadCSVFile
                }
                style={{
                  borderColor: '#ccc',
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  paddingHorizontal: 10,
                  paddingVertical: 1,
                  borderRadius: 5,
                }}>
                <Icons name="cloud-download" size={22} color="#ccc" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            {csvData?.length <= 0 && (
              <TouchableOpacity
                onPress={importCsv}
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
                  borderStyle: 'dashed',
                  height: 200,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{alignItems: 'center'}}>
                  <FontAwesome
                    name="file-csv"
                    size={50}
                    color={colors.primary}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      color: colors.primary,
                      marginTop: 10,
                    }}>
                    Choose CSV File
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            {csvData?.length > 0 && (
              <>
                {/* <Text style={{color: 'white'}}>All Data</Text> */}
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: colors.primary,
                    backgroundColor: colors.white,
                    width: '90%',
                    padding: 5,
                    marginTop: -80,
                    borderRadius: 5,
                    marginBottom: 50,
                    borderStyle: 'dashed',
                    minHeight: 200,
                    justifyContent: 'top',
                    alignItems: 'center',
                  }}>
                  <ScrollView horizontal>
                    <View>
                      <View
                        style={{
                          flexDirection: 'row',
                          backgroundColor: colors.primary,
                        }}>
                        <Text style={{color: 'white', width: 50, padding: 10}}>
                          #
                        </Text>
                        <Text style={{color: 'white', width: 100, padding: 10}}>
                          Date
                        </Text>
                        <Text style={{color: 'white', width: 230, padding: 10}}>
                          Expense Type
                        </Text>
                        <Text style={{color: 'white', width: 100, padding: 10}}>
                          Amount
                        </Text>
                        <Text style={{color: 'white', width: 250, padding: 10}}>
                          Description
                        </Text>
                      </View>

                      <View>
                        {csvData?.length > 0 &&
                          csvData?.map((item, index) => (
                            <View
                              key={index}
                              style={{
                                flexDirection: 'row',
                                backgroundColor:
                                  (index + 1) % 2 ? '#fcfcfc' : '#e2e9ed',
                              }}>
                              <Text
                                style={{
                                  color: colors.text,
                                  width: 50,
                                  padding: 10,
                                }}>
                                {index + 1}
                              </Text>
                              <Text
                                style={{
                                  color: colors.text,
                                  width: 100,
                                  padding: 10,
                                }}>
                                {formateDate(item?.date)}
                              </Text>
                              <Text
                                style={{
                                  color: colors.text,
                                  width: 230,
                                  padding: 10,
                                }}>
                                {item?.category}
                              </Text>
                              <Text
                                style={{
                                  color: colors.text,
                                  width: 100,
                                  padding: 10,
                                }}>
                                ${item?.amount}
                              </Text>
                              <Text
                                style={{
                                  color: colors.text,
                                  width: 250,
                                  padding: 10,
                                }}>
                                {item?.description}
                              </Text>
                            </View>
                          ))}
                      </View>
                    </View>
                  </ScrollView>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>

      {csvData?.length > 0 && (
        <View
          style={{
            flexDirection: 'row',
            gap: 10,
            margin: 10,
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={importCsv}
            style={{
              backgroundColor: colors.primary,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              justifyContent: 'center',
              width: '45%',
            }}>
            {/* <AntIcon name="camerao" size={30} color={colors.primary} /> */}
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Re-Import
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleBulkUpload}
            style={{
              backgroundColor: colors.secondary,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: 5,
              justifyContent: 'center',
              width: '45%',
            }}>
            {/* <AntIcon name="camerao" size={30} color={colors.primary} /> */}
            <Text
              style={{
                fontSize: 16,
                color: colors.white,
                fontWeight: '400',
                textAlign: 'center',
              }}>
              Submit Data
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Reports;
