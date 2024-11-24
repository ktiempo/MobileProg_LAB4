import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation
import { Ionicons } from '@expo/vector-icons'; // For icons

const Settings = () => {
  const router = useRouter(); // Get the router object for navigation

  const handleLogout = () => {
    Alert.alert("Log Out", "Are you sure you want to log out?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Log Out",
        onPress: () => {
          console.log("User logged out");
          router.replace('/'); // Navigate to the root layout or desired page
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={24} color="#808080" />
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="notifications-outline" size={24} color="#808080" />
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="lock-closed-outline" size={24} color="#808080" />
          <Text style={styles.optionText}>Privacy</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#333',
    marginBottom: 30,
  },
  optionContainer: {
    width: '100%',
    marginBottom: 40,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginLeft: 15,
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAEAEA', // Light gray background for the logout button
    paddingVertical: 10,
    borderRadius: 10, // Rounded corners to match the "Edit profile" style
    width: '80%', // Take most of the screen width
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333', // Dark text color for the light gray background
  },
});

export default Settings;
