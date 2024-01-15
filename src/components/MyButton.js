import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#008000', 
    paddingVertical: 15,
    paddingHorizontal: 20, 
    borderRadius: 10, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', 
    fontSize: 18, 
    fontWeight: 'bold',
  },
});

export default MyButton;
