
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './SearchScreen';
import NotificationScreen from './NotificationScreen';

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' , }}>
      <Image source={require('../assets/background.jpg')} style={styles.logoImage} />
      <Text style={{ fontSize: 20 }}>Welcome to the Tailoring Book </Text>
      <Text style={{ fontSize: 15, color: '#9F9CA1' }}>No clients added yet get started by adding a client</Text>
    </View>
  );
  
};

export const WelcomeNavigator = () =>{
  const navigation = useNavigation();
  
  const handleSearchIconPress = () => {
    // Navigate to the SearchScreen
    navigation.navigate('Search');
  };

  const handleBellIconPress = () => {
    navigation.navigate('Notifications'); // Navigate to the Notifications screen
  };

  return(
    <>
      <Stack.Navigator >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerTitle: 'Tailoring Book',
            headerTitleAlign: 'center',
            headerLeft: () => (
              <TouchableOpacity onPress={() => alert('Burger Icon Pressed')}>
                <Ionicons name="menu" size={30} color="black" />
              </TouchableOpacity>
              
            ),
            headerRight: () => (
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={handleSearchIconPress}>
                  <Ionicons name="search" size={30} color="black" style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBellIconPress}>
                  <Ionicons name="notifications" size={30} color="black" style={{ marginHorizontal: 10 }} />
                </TouchableOpacity>
              </View>
            ),
            headerStyle: {
                height: 100, // Adjust the height as needed
              },
            
          }}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Notifications" component={NotificationScreen} />
      </Stack.Navigator>
      

      <View style={styles.bottomIconsContainer}>
      <TouchableOpacity style={styles.bottomIcon} onPress={() => alert('Orders Icon Pressed')}>
          <Ionicons name="list" size={30} color="#1676F3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.centerBottomIcon} onPress={() => alert('Plus Icon Pressed')}>
          <Ionicons name="add-circle" size={60} color="#1676F3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomIcon} onPress={() => alert('Camera Icon Pressed')}>
          <Ionicons name="camera" size={30} color="gray" />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff', // Change the background color as needed
    paddingVertical: 10,
  },
  bottomIcon: {
    marginHorizontal: 10,
  },
  centerBottomIcon: {
    marginHorizontal: 10,
    alignItems: 'center', // Center the plus icon
    marginBottom:30,
  },
  logoImage: {
    width: 250, // Adjust the width as needed
    height: 250, // Adjust the height as needed
    resizeMode: 'contain', // Adjust the resizeMode as needed
    marginBottom: 10, // Add margin to separate the image and text
  },
  
});

/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WelcomeComponent} from '/WelcomeComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is main file. Components will be called here. so build your components in the components folder and come and call them here. make sure to group code. refer to docs if anything. happy coding</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
