import React from 'react';
import {Button} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DatePicker = ({value, setValue, show, setShow}: any) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      {/* <Text
        style={{
          borderColor: '#1d5276',
          borderRadius: 5,
          borderWidth: 1,
          marginTop: 5,
          padding: 8,
          width: '100%',
          color: 'black',
        }}
        // onPress={() => setOpen(true)}
      >
        {formateDate(expenseItem?.expenseDate)}
      </Text> */}
    </>
  );
};

export default DatePicker;
