/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Modal,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  useDeleteIncomeSourceMutation,
  useGetIncomeTypeQuery,
} from '../../features/income/income-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';

const CustomIncomeTable = ({show, list, dashboard}: any) => {
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [viewId, setViewId] = React.useState('');

  const [deleteIncomeSource, {isLoading, isSuccess}] =
    useDeleteIncomeSourceMutation();
  const {
    data: typeData,
    isLoading: typeLoading,
    isSuccess: typeSuccess,
    refetch: incomeRefetch,
  } = useGetIncomeTypeQuery(null);

  // * Status Button
  const statusData = (status: any) => {
    return (
      <View style={{width: 100, display: 'flex', justifyContent: 'flex-start'}}>
        {status === 'pending' && (
          <Text
            style={{
              ...style.status,
              backgroundColor: '#ff000030',
              color: '#ff000090',
            }}>
            Pending
          </Text>
        )}
        {status === 'approved' && (
          <Text
            style={{
              ...style.status,
              backgroundColor: '#009b0a30',
              color: '#009b0a',
            }}>
            Approved
          </Text>
        )}
      </View>
    );
  };

  const incomeType = (id: string) => {
    // return 'Hello';
    return typeData?.data?.filter((item: any) => item?.id === id)[0].name;
  };

  // * Expense Delete Modal
  const deleteModal = () => {
    // * Expense Delete Handler

    return (
      <Modal visible={deleteModalOpen} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000050',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '60%',
              borderRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                width: '100%',
                paddingVertical: 15,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: '500',
                  fontSize: 20,
                  color: colors.primary,
                }}>
                Are You Sure ?
              </Text>
              <Text style={{textAlign: 'center', marginTop: 10, color: 'gray'}}>
                do you want to delete this item ?
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 10,
                gap: 10,
                borderTopColor: '#ddd',
                borderTopWidth: 1,
                paddingTop: 10,
              }}>
              <TouchableOpacity
                onPress={() => setDeleteModalOpen(false)}
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteIncomeSource(viewId)}
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>
                  {isLoading ? 'Loading...' : 'Delete'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  // * Modal Closer
  React.useEffect(() => {
    if (isSuccess) {
      setDeleteModalOpen(false);
    }
  }, [isSuccess]);

  // * View Modal
  // const renderModal = () => {
  //   const expenseItem = list.data?.filter(
  //     (item: any) => item?._id === viewId,
  //   )[0];

  //   return (
  //     <Modal visible={modal} animationType="fade" transparent={true}>
  //       <View
  //         style={{
  //           flex: 1,
  //           alignItems: 'center',
  //           justifyContent: 'center',
  //           backgroundColor: '#00000020',
  //         }}>
  //         <View
  //           style={{
  //             backgroundColor: 'white',
  //             width: '80%',
  //             borderRadius: 10,
  //             padding: 10,
  //           }}>
  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'space-between',
  //               alignItems: 'center',
  //               width: '100%',
  //               borderBottomWidth: 1,
  //               paddingBottom: 5,
  //               borderBlockColor: colors.border,
  //             }}>
  //             <Text style={{color: colors.primary, fontWeight: '500'}}>
  //               {expenseItem?.expenseName}
  //             </Text>
  //             <MatIcon
  //               name="close"
  //               color="black"
  //               onPress={() => setModal(false)}
  //               size={20}
  //             />
  //           </View>
  //           <List dataKey="Description" data={expenseItem?.description} />
  //           <List
  //             dataKey="Expense Date"
  //             data={formateDate(expenseItem?.expenseDate)}
  //           />
  //           <List dataKey="Amount" data={`${expenseItem?.totalAmount}$`} />
  //           <List dataKey="Status" data="Pending" />
  //           <List
  //             dataKey="GST"
  //             data={expenseItem?.isGSTClaimable ? 'Yes' : 'No'}
  //           />

  //           <View
  //             style={{
  //               flexDirection: 'row',
  //               justifyContent: 'center',
  //               marginTop: 20,
  //             }}>
  //             <TouchableOpacity
  //               onPress={() => setModal(false)}
  //               style={{
  //                 backgroundColor: colors.primary,
  //                 paddingHorizontal: 10,
  //                 paddingVertical: 5,
  //                 borderRadius: 5,
  //               }}>
  //               <Text style={{color: 'white'}}>Close</Text>
  //             </TouchableOpacity>
  //           </View>
  //         </View>
  //       </View>
  //     </Modal>
  //   );
  // };

  // * Action Button
  // const actionElement = (id: any) => {
  //   const handleView = () => {
  //     setModal(true);
  //     setViewId(id);
  //   };

  //   const handleDelete = () => {
  //     setDeleteModalOpen(true);
  //     setViewId(id);
  //   };
  //   return (
  //     <>
  //       {deleteModal()}
  //       {renderModal()}
  //       <View
  //         style={{
  //           flexDirection: 'row',
  //           width: 80,
  //           marginLeft: 10,
  //           gap: 15,
  //         }}>
  //         <FontAwesome5Icon
  //           name="eye"
  //           onPress={handleView}
  //           color={colors.primary}
  //           size={25}
  //         />
  //         <MatIcon
  //           onPress={handleDelete}
  //           name="delete"
  //           color="#C95858"
  //           size={25}
  //         />
  //       </View>
  //     </>
  //   );
  // };

  // * Filter Data for Dashboard
  let dashboardData = [];
  const dashboardCount = list?.length > show ? show : list?.length;
  for (let index = 0; index < dashboardCount; index++) {
    if (list) {
      dashboardData.push(list[index]);
    }
  }

  // * Conditionally Sed Data for All Table and Dashboard
  const dataFormat = show ? dashboardData : list;

  console.log('dataFormat', dataFormat);

  return (
    <>
      {deleteModal()}
      <View style={style.table}>
        <ScrollView horizontal>
          <View>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: colors.primary,
                paddingVertical: 8,
              }}>
              <Text style={{color: 'white', width: 120, padding: 10}}>
                Income Source
              </Text>
              <Text style={{color: 'white', width: 250, padding: 10}}>
                Income Type
              </Text>
              <Text style={{color: 'white', width: 100, padding: 10}}>
                Amount
              </Text>
              <Text style={{color: 'white', width: 100, padding: 10}}>
                Start Date
              </Text>
              <Text style={{color: 'white', width: 100, padding: 10}}>
                End Date
              </Text>
              <Text style={{color: 'white', width: 100, padding: 10}}>
                Status
              </Text>
              {!dashboard && (
                <Text style={{color: 'white', width: 80, padding: 10}}>
                  Actions
                </Text>
              )}
            </View>

            <View>
              {dataFormat.map((item: any, index: number) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    backgroundColor: (index + 1) % 2 ? '#fcfcfc' : '#e2e9ed',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: colors.text,
                      width: 120,
                      padding: 10,
                    }}>
                    {item?.incomeSource}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      width: 250,
                      padding: 10,
                    }}>
                    {incomeType(item?.incomeType)}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      width: 100,
                      padding: 10,
                    }}>
                    {'$' + item?.amount.toFixed(2)}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      width: 100,
                      padding: 10,
                    }}>
                    {formateDate(item?.startDate)}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      width: 100,
                      padding: 10,
                    }}>
                    {formateDate(item?.endDate)}
                  </Text>
                  <Text
                    style={{
                      color: colors.text,
                      width: 100,
                      padding: 10,
                    }}>
                    {statusData(item?.status)}
                  </Text>
                  {!dashboard && (
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 80,
                        gap: 5,
                        padding: 10,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          setDeleteModalOpen(true);
                          setViewId(item.id);
                        }}
                        style={{...style.actionBtn, borderColor: 'red'}}>
                        <MatIcon name="delete" color="#C95858" size={17} />
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default CustomIncomeTable;
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
  status: {
    textAlign: 'center',
    borderRadius: 3,
    paddingVertical: 3,
    width: 80,
    marginTop: Platform.OS === 'ios' ? 10 : 0,
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
});
