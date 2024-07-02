import React, { useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MyTextInput from '../components/MyTextInput';
import MyButton from '../components/MyButton';
import { loginSuccess } from '../redux/actions/authActions';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    // Log user input for debugging purposes
    // console.log('Username:', typeof(username));
    // console.log('Password:', typeof(password));
    // console.log('Password:', password);
    // console.log('Username:', username);

    // Make sure to use String() to convert values to strings
    fetch('https://fakestoreapi.com/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(async (response) => {
        const contentType = response.headers.get('content-type');

        if (contentType && contentType.includes('application/json')) {
          const json = await response.json();

          if (!response.ok) {
            throw new Error(json.message || 'Invalid credentials');
          }

          return json;
        } else {
          const text = await response.text();
          throw new Error(text || 'Invalid credentials');
        }
      })
      .then((json) => {
        const token = json.token;
        dispatch(loginSuccess(token));
        navigation.navigate('Home');
      })
      .catch((error) => {
        // console.error('Login error:', error.message);
        Alert.alert('Error', error.message);
      });
  };

  return (
    <View style={styles.container}>
    <View style={{ top:-120}}>
      <Text style={{fontSize:60, color:"darkgreen"}}>EasyCart</Text>
    </View>
      
      <MyTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <MyTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'antiquewhite', 
  },
});

export default LoginScreen;
