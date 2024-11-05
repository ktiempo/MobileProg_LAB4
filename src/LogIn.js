import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text, TextInput, Button, TouchableRipple, IconButton } from 'react-native-paper';

const LogIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('UserProfile');
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/login_logo.png')}
        style={styles.logo}
      />

      <Text variant="headlineLarge" style={styles.title}>Welcome Back!</Text>

      <TextInput
        label="Mobile number or email"
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

      <Button
        mode="contained"
        onPress={handleLogin}
        style={styles.loginButton}
        labelStyle={styles.loginButtonText}
        contentStyle={{ paddingVertical: 8 }}
      >
        Log In
      </Button>

      <TouchableRipple onPress={() => navigation.navigate('PasswordRecovery')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableRipple>

      <TouchableRipple onPress={handleRegister}>
        <Text style={styles.registerButtonText}>New Here? Register</Text>
      </TouchableRipple>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>Or Login With</Text>
        <IconButton
          icon={({ size, color }) => (
            <Image source={require('../assets/google_logo.png')} style={{ width: size, height: size }} />
          )}
          size={28}
          onPress={() => {}}
        />
        <IconButton
          icon={({ size, color }) => (
            <Image source={require('../assets/facebook_logo.png')} style={{ width: size, height: size }} />
          )}
          size={28}
          onPress={() => {}}
        />
      </View>
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
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 25,
    marginVertical: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  forgotPasswordText: {
    color: '#4a90e2',
    textAlign: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  socialLoginText: {
    fontSize: 16,
    marginRight: 10,
    color: '#333',
  },
});

export default LogIn;
