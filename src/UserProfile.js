import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { AntDesign, Ionicons, Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

const UserProfile = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleSwitch = () => setIsDarkMode(previousState => !previousState);

  const handleSignOut = () => {
    navigation.navigate('LogIn');
  };

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#fff', padding: 0 }}>
      {/* Cover Photo */}
      <Image
        source={require('../assets/cha1.png')}
        style={styles.coverPhoto}
      />

      {/* User Information Section */}
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/cha.png')}
          style={[
            styles.profileImage,
            { borderColor: isDarkMode ? '#000' : '#fff' }
          ]}
        />
      </View>

      {/* Username and Friends Count */}
      <View style={styles.profileDetails}>
        <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#000' }]}>Charlene R. Lusterio</Text>
        <Text style={[styles.subText, { color: isDarkMode ? '#b0b0b0' : 'gray' }]}>1.5k friends</Text>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>

      {/* Bio Section */}
      <View style={styles.bioSection}>
        <Text style={[styles.bioLabel, { color: isDarkMode ? '#fff' : '#000' }]}>Bio:</Text>
        <Text style={[styles.bioText, { color: isDarkMode ? '#fff' : '#000' }]}>dili na magpaka tanga</Text>
      </View>

      {/* Social Media Section */}
      <View style={styles.detailsSection}>
        <Text style={[styles.detailsTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Social Media Accounts</Text>
        <View style={styles.detailsContent}>
          <AntDesign name="instagram" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: '#1e90ff', fontWeight: 'bold' }}> eyitsmecha</Text>
        </View>
        <View style={styles.detailsContent}>
          <Entypo name="twitter" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#1e90ff' : '#1e90ff', fontWeight: 'bold' }}> luvavocuddle</Text>
        </View>
        <View style={styles.detailsContent}>
          <FontAwesome5 name="tiktok" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#1e90ff' : '#1e90ff', fontWeight: 'bold' }}> rorror_rorurboat</Text>
        </View>
      </View>

      {/* Contact Info Section */}
      <View style={styles.detailsSection}>
        <Text style={[styles.detailsTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Contact Info</Text>
        <View style={styles.detailsContent}>
          <Ionicons name="call" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#fff' : '#000', marginLeft: 5 }}>+63 9979617157</Text>
        </View>
        <View style={styles.detailsContent}>
          <Ionicons name="mail" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#fff' : '#000', marginLeft: 5 }}>charleneelusterio@gmail.com</Text>
        </View>
      </View>

      {/* Basic Info Section */}
      <View style={styles.detailsSection}>
        <Text style={[styles.detailsTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Basic Info</Text>
        <View style={styles.detailsContent}>
          <Ionicons name="person" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#fff' : '#000', marginLeft: 5 }}>Female</Text>
        </View>
        <View style={styles.detailsContent}>
          <Ionicons name="calendar" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#fff' : '#000', marginLeft: 5 }}>June 4, 2004</Text>
        </View>
        <View style={styles.detailsContent}>
          <Ionicons name="pricetags" size={24} color={isDarkMode ? '#fff' : '#000'} />
          <Text style={{ color: isDarkMode ? '#fff' : '#000', marginLeft: 5 }}>Pronouns: she/they</Text>
        </View>
      </View>

      {/* Settings Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? '#fff' : '#000' }]}>Settings</Text>
        <View style={styles.optionContainer}>
          <Text style={[styles.optionText, { color: isDarkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  coverPhoto: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -40,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
  },
  profileDetails: {
    alignItems: 'center',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
    marginTop: 5,
    fontSize: 14,
  },
  editProfileButton: {
    backgroundColor: '#e7e7e7',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  editProfileText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bioSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  bioLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bioText: {
    fontSize: 16,
    marginLeft: 5,
    fontStyle: 'italic',
  },
  detailsSection: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  signOutButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  signOutText: {
    fontSize: 16,
    color: 'red',
  },
});

export default UserProfile;
