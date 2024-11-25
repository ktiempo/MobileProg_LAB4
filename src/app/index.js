import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-web';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        router.replace('Dashboard'); // Replace the current route with the Dashboard
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/SignupScreen')}>
                <Text style={styles.link}>Don't have an account? Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push('/PasswordRecoveryScreen')}>
                <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 16 },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
    loginButton: {
        backgroundColor: '#28a745', // Green color
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
    },
    loginButtonText: {
        color: '#fff', // White text
        fontSize: 16,
        fontWeight: 'bold',
    },
    link: {
        color: '#007bff',
        textAlign: 'center',
        marginTop: 15,
        textDecorationLine: 'underline',
    },
});
