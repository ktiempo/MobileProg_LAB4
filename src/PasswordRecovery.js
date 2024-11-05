import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

const PasswordRecovery = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordRecovery = () => {
    // Password recovery logic here
    alert('Password recovery link sent to your email!');
    navigation.goBack(); // Go back to the previous screen after sending the recovery link
  };

  return (
    <View style={styles.container}>
      <Text variant="headlineLarge" style={styles.title}>Password Recovery</Text>

      <Text style={styles.instructions}>
        Enter your email address to receive a password recovery link.
      </Text>

      <TextInput
        label="Email"
        mode="outlined"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#999"
        theme={{ colors: { placeholder: '#999', text: '#333' } }}
      />

      <Button
        mode="contained"
        onPress={handlePasswordRecovery}
        style={styles.sendButton}
        labelStyle={styles.sendButtonText}
        contentStyle={{ paddingVertical: 8 }}
      >
        Send Recovery Link
      </Button>
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
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#4a90e2',
    borderRadius: 25,
    marginVertical: 10,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default PasswordRecovery;
