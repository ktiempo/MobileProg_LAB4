import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button, TouchableRipple } from 'react-native-paper';

const Register = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Registration logic
    navigation.navigate('UserProfile');
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Create Account</Text>

      <TextInput
        label="First Name"
        mode="outlined"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <TextInput
        label="Last Name"
        mode="outlined"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <TextInput
        label="Username"
        mode="outlined"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <TextInput
        label="Confirm Password"
        mode="outlined"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <Button
        mode="contained"
        onPress={handleRegister}
        style={styles.registerButton}
        labelStyle={styles.registerButtonText}
        contentStyle={{ paddingVertical: 8 }}
      >
        Register
      </Button>

      <TouchableRipple onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  registerButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 25,
    marginVertical: 10,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  loginText: {
    color: '#4a90e2',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
});

export default Register;
