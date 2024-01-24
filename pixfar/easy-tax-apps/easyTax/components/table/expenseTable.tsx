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
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useGetCategoriesQuery} from '../../features/category/category-slice';
import {useDeleteExpenseMutation} from '../../features/expense/expense-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';
import EditExpense from '../edit-expense/edit-expense';

const ExpenseTable = ({show, list, dashboard}: any) => {
  // * Redux
  const [deleteExpense, {isLoading: deleteLoader, isSuccess}] =
    useDeleteExpenseMutation();
  const {data: category} = useGetCategoriesQuery(undefined);

  // * Get Category Name
  const categoryName = (type: string) => {
    return category?.data?.filter((item: any) => item?.id === type)[0]?.name;
  };

  // * Local State
  const [modal, setModal] = React.useState(false);
  const [viewId, setViewId] = React.useState('');
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  // * Status Button
  const statusData = (status: any) => {
    return (
      <View
        style={{
          width: 130,
          display: 'flex',
        }}>
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
        {status === 'rejected' && (
          <Text
            style={{
              ...style.status,
              backgroundColor: '#00000070',
              color: '#fff',
            }}>
            Rejected
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

        {status === 'pending for slip' && (
          <Text
            style={{
              ...style.status,
              backgroundColor: '#FFCC1070',
              color: '#ff000095',
            }}>
            Pending for slip
          </Text>
        )}
      </View>
    );
  };

  // * Expense Delete Handler
  const handleExpenseDelete = () => {
    deleteExpense(viewId);
  };

  // * Expense Delete Modal
  const deleteModal = () => {
    return (
      <Modal visible={deleteModalOpen} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000018',
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
                onPress={handleExpenseDelete}
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>
                  {deleteLoader ? 'Loading...' : 'Delete'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  // * View Modal
  const renderModal = () => {
    const expenseItem = list?.filter((item: any) => item?._id === viewId)[0];

    return (
      <Modal visible={modal} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000020',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '80%',
              borderRadius: 10,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderBlockColor: colors.border,
              }}>
              <Text style={{color: colors.primary, fontWeight: '500'}}>
                {/* {expenseItem?.expenseName} */}Expense Details
              </Text>
              <MatIcon
                name="close"
                color="black"
                onPress={() => setModal(false)}
                size={20}
              />
            </View>
            {/* <List dataKey="Description" data={expenseItem?.description} /> */}
            <List
              dataKey="Expense Date"
              data={formateDate(expenseItem?.expenseDate)}
            />
            <List
              dataKey="Amount"
              data={`$${expenseItem?.totalAmount.toFixed(2)}`}
            />
            <List dataKey="Status" data={expenseItem?.status} />
            <List
              dataKey="GST"
              data={expenseItem?.isGSTClaimable ? 'Yes' : 'No'}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 20,
              }}>
              <TouchableOpacity
                onPress={() => setModal(false)}
                style={{
                  backgroundColor: colors.primary,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  // * Edit Modal
  const editModal = () => {
    const expenseItem = list?.filter((item: any) => item?._id === viewId)[0];

    return (
      <Modal visible={editModalOpen} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#00000020',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '100%',
              borderRadius: 10,
              padding: 10,
              height: '100%',
            }}>
            {Platform.OS === 'ios' && (
              <View
                style={{
                  paddingVertical: 25,
                  borderBottomColor: '#00000020',
                  borderBottomWidth: 1,
                  marginBottom: 10,
                }}
              />
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                borderBottomWidth: 1,
                paddingBottom: 5,
                borderBlockColor: colors.border,
                // marginTop:50
              }}>
              <Text style={{color: colors.primary, fontWeight: '500'}}>
                {/* {expenseItem?.expenseName} */}Edit Expense
              </Text>
              <MatIcon
                name="close"
                color="black"
                onPress={() => setEditModalOpen(false)}
                size={20}
              />
            </View>
            <EditExpense
              id={viewId}
              expenseItem={expenseItem}
              setEditModalOpen={setEditModalOpen}
            />
          </View>
        </View>
      </Modal>
    );
  };

  // * Filter Data for Dashboard
  let dashboardData = [];
  const dashboardCount = list?.length > show ? show : list?.length;
  for (let index = 0; index < dashboardCount; index++) {
    dashboardData.push(list[index]);
  }

  // * Conditionally Sed Data for All Table and Dashboard
  const dataFormat = show ? dashboardData : list;

  // * Modal Closer
  React.useEffect(() => {
    if (isSuccess) {
      setDeleteModalOpen(false);
    }
  }, [isSuccess]);

  return (
    <View style={style.table}>
      {deleteModal()}
      {renderModal()}
      {editModal()}
      <ScrollView horizontal>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: colors.primary,
              paddingVertical: 7,
            }}>
            <Text style={{color: 'white', width: 100, padding: 10}}>Date</Text>
            <Text style={{color: 'white', width: 230, padding: 10}}>
              Expense Type
            </Text>
            <Text style={{color: 'white', width: 150, padding: 10}}>
              Total Amount
            </Text>
            <Text style={{color: 'white', width: 150, padding: 10}}>
              Status
            </Text>
            {!dashboard && (
              <Text style={{color: 'white', width: 150, padding: 10}}>
                Action
              </Text>
            )}
          </View>

          <View>
            {dataFormat?.map((item: any, index: number) => (
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
                    width: 100,
                    padding: 10,
                  }}>
                  {formateDate(item?.expenseDate)}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    width: 230,
                    padding: 10,
                  }}>
                  {categoryName(item?.expenseType)}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    width: 150,
                    padding: 10,
                  }}>
                  {`$${item?.totalAmount.toFixed(2)}`}
                </Text>
                <Text
                  style={{
                    color: colors.text,
                    width: 150,
                    padding: 10,
                  }}>
                  {statusData(item?.status)}
                </Text>
                {!dashboard && (
                  <View
                    style={{
                      flexDirection: 'row',
                      width: 150,
                      gap: 5,
                      padding: 10,
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        setEditModalOpen(true);
                        setViewId(item.id);
                      }}
                      style={{
                        ...style.actionBtn,
                        borderColor: colors.secondary,
                      }}>
                      <FontAwesome5Icon
                        name="edit"
                        color={colors.secondary}
                        size={15}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={style.actionBtn}
                      onPress={() => {
                        setModal(true);
                        setViewId(item.id);
                      }}>
                      <FontAwesome5Icon
                        name="eye"
                        color={colors.primary}
                        size={15}
                      />
                    </TouchableOpacity>
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

export default ExpenseTable;

const List = ({dataKey, data}: any) => {
  return (
    <View style={{flexDirection: 'row', gap: 10, marginTop: 5}}>
      <Text style={{width: 100, color: colors.primary, fontWeight: '500'}}>
        {dataKey}
      </Text>
      <Text style={{color: 'gray', textTransform: 'capitalize'}}>
        : &nbsp; {data}
      </Text>
    </View>
  );
};
