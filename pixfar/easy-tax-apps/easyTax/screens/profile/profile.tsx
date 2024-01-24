/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import MainLayout from '../../components/common/main-layout/main-layout';
import {
  useDeleteUserProfileMutation,
  useGetUserQuery,
} from '../../features/auth/auth-slice';
import {logOutState} from '../../features/check-login/check-login-slice';
import colors from '../../global/color/color';
import {formateDate} from '../../utils/date-formater/date-formater';
import {deleteData} from '../../utils/local-storage/local-storage';
import ProfileRow from './profile-row';

interface types {
  navigation: any;
}
const Profile = ({navigation}: types) => {
  const {data, isLoading, refetch, isSuccess} = useGetUserQuery(null);
  const user = data?.data?.user;
  const phone = user?.mobile?.split(' ')[1] || user?.mobile?.split(' ')[0];
  const [
    deleteUserProfile,
    {data: deleteDate, isSuccess: deleteSuccess, isLoading: deleteLoading},
  ] = useDeleteUserProfileMutation();
  const dispatch = useDispatch();

  const [refresh, setRefresh] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);

  // * Handle Data Pull Reload
  const handlePullReload = () => {
    setRefresh(true);
    refetch();
    if (!isLoading && isSuccess) {
      setRefresh(false);
    }
  };

  // * User Account Delete Handler
  const handleUserDelete = () => {
    deleteUserProfile(null);
    // * Close Delete Modal After Deleting User Account
    // if (deleteSuccess) {
    //   setDeleteModalOpen(false);
    //   dispatch(logOutState());
    //   deleteData('userToken');
    // }
  };

  React.useEffect(() => {
    if (deleteDate?.code === 200) {
      setDeleteModalOpen(false);
      dispatch(logOutState());
      deleteData('userToken');
    }
  }, [deleteDate?.code, deleteLoading, deleteSuccess, dispatch]);

  console.log('error =>', deleteDate?.code);

  // * Expense Delete Modal
  const deleteModal = () => {
    return (
      <Modal visible={deleteModalOpen} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00000060',
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
                The data associated with your account will be deleted
                permanently.
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
                onPress={handleUserDelete}
                style={{
                  backgroundColor: 'red',
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 5,
                }}>
                <Text style={{color: 'white'}}>
                  {deleteLoading ? 'Loading...' : 'Delete'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <>
      {deleteModal()}
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && (
        <ScrollView
          style={{flex: 1, backgroundColor: colors.bgc}}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => handlePullReload()}
            />
          }>
          <View style={{marginTop: 20, alignItems: 'center'}}>
            <Image
              source={
                user?.avatar
                  ? {uri: user?.avatar}
                  : require('../../assets/avatar.jpg')
              }
              style={{
                borderRadius: 100,
                height: 200,
                width: 200,
                marginBottom: 15,
              }}
            />
          </View>
          <View
            style={{
              padding: 15,
            }}>
            <MainLayout title="Profile">
              <ProfileRow
                data={{
                  title: 'Full Name',
                  value: `${user?.firstName} ${
                    user?.middleName ? user?.middleName + ' ' : ''
                  }${user?.lastName}`,
                }}
              />
              <ProfileRow data={{title: 'Email', value: user?.email}} />
              <ProfileRow
                data={{title: 'IRD Number', value: user?.irdNumber}}
              />
              <ProfileRow data={{title: 'Phone', value: '+64 ' + phone}} />
              <ProfileRow
                data={{
                  title: 'Date of birth',
                  value: formateDate(user?.dateOfBirth),
                }}
              />
              <ProfileRow data={{title: 'Address', value: user?.address}} />
            </MainLayout>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}
                style={{
                  backgroundColor: colors.primary,
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <FaIcon name="edit" color="#fff" size={17} />
                <Text style={{fontSize: 13, color: colors.white}}>
                  Edit Account
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setDeleteModalOpen(true)}
                style={{
                  backgroundColor: '#A51001',
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  justifyContent: 'center',
                  borderRadius: 5,
                }}>
                <FaIcon name="trash" color="#fff" size={17} />
                <Text style={{fontSize: 13, color: colors.white}}>
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default Profile;
