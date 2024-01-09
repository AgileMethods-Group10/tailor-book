import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNavbar from "../components/BottomNavigation";
import AddClient from "../screens/AddClient";

const Stack = createStackNavigator();

export default function AppStackNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="tabs" component={BottomNavbar} />
      <Stack.Screen name="AddClient" component={AddClient} />
    </Stack.Navigator>
  );
}
