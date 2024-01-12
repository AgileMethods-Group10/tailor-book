import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavbar from "../components/BottomNavigation";
import AddClient from "../screens/AddClient";
import ClientProfile from "../screens/ClientProfile";
import Collection from "../screens/Collection";
import Bill from "../screens/Bill";

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="tabs" component={BottomNavbar} />
      <Stack.Screen name="AddClient" component={AddClient} />
      <Stack.Screen name="ClientProfile" component={ClientProfile} />
      <Stack.Screen name="Collection" component={Collection} />
      <Stack.Screen name="Bill" component={Bill} />
    </Stack.Navigator>
  );
}
