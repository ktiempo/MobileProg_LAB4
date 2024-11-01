import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

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

      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Mobile number or email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('PasswordRecovery')}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>New Here? Register</Text>
      </TouchableOpacity>

      <View style={styles.socialLoginContainer}>
        <Text style={styles.socialLoginText}>Or Login With</Text>
        <TouchableOpacity>
          <Image
            source={require('../assets/google_logo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/facebook_logo.png')}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
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
    fontSize: 28,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25, // Rounded corners for input
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  loginButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#4a90e2',
    textAlign: 'center',
    marginBottom: 20,
  },
  registerButton: {
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#4a90e2',
    fontSize: 16,
    fontWeight: '600',
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
  socialIcon: {
    width: 28,
    height: 28,
    marginHorizontal: 10,
  },
});

export default LogIn;
