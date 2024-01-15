import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const MyTextInput = ({ placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#A9A9A9"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      autoCapitalize="none"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '70%',
    height: 50,
    borderColor: '#006400',
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 16,
    borderRadius: 8,
    fontSize: 16,
    color: '#000',
  },
});

export default MyTextInput;
