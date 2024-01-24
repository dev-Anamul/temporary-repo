/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../global/color/color';

interface types {
  label: string;
  setValue: any;
  value: any;
  required: boolean;
}
const Password = ({label, setValue, value, required}: types) => {
  const [password, setPassword] = useState(true);

  const togglePassword = () => {
    setPassword(!password);
  };

  return (
    <View style={{marginBottom: 10}}>
      <Text style={{color: colors.primary}}>
        {label} {required && <Text style={{color: 'red'}}>*</Text>}
      </Text>
      <View>
        <TextInput
          style={styles.password}
          placeholder={`Type ${label}`}
          placeholderTextColor="#1d5276"
          value={value}
          onChangeText={text => setValue(text)}
          secureTextEntry={password}
          autoComplete="current-password"
          textContentType="password"
        />
        <TouchableOpacity style={styles.eyeIcon} onPress={togglePassword}>
          {password ? (
            <Icon name="eye" size={20} color={colors.primary} />
          ) : (
            <Icon name="eye-slash" size={20} color={colors.primary} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  eyeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    width: 40,
    zIndex: 99,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  password: {
    borderColor: '#1d5276',
    borderRadius: 3,
    borderWidth: 1,
    marginTop: 2,
    padding: Platform.OS === 'android' ? 5 : 10,
    paddingHorizontal: 10,
    width: '100%',
    maxWidth: '100%',
    color: '#1d5276',
    paddingRight: 45,
  },
});
