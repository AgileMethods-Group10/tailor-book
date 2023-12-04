import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NewPasswordScreen from "../screens/NewPassword";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();
const BottomNavbar = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Orders"
        screenOptions={{
          tabBarActiveTintColor: "#1676F3",
        }}
      >
        <Tab.Screen
          name="Orders"
          component={NewPasswordScreen}
          options={{
            tabBarLabel: "Orders",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={NewPasswordScreen}
          options={{
            tabBarLabel: "Gallery",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="camera" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular",
  },
});
export default BottomNavbar;
