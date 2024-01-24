const {
  default: AsyncStorage,
} = require('@react-native-async-storage/async-storage');

export const setData = (key, data) => {
  try {
    AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

export const getData = async key => {
  let data;
  try {
    data = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }

  return data;
};

export const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};
