import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PasswordRecovery = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    // Password recovery logic here
    alert('Password recovery link sent to your email!');
    navigation.goBack(); // Go back to the previous screen after sending the recovery link
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Password Recovery</Text>

      <Text style={styles.instructions}>
        Enter your email address to receive a password recovery link.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.sendButton} onPress={handlePasswordRecovery}>
        <Text style={styles.sendButtonText}>Send Recovery Link</Text>
      </TouchableOpacity>
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
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  input: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    backgroundColor: '#fff',
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default PasswordRecovery;
