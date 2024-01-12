import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Collection from "../screens/Collection";
import { useNavigation } from "@react-navigation/native";
import{ NavigationContainer }from "@react-navigation/native";
import Welcome from "../screens/Welcome";
import AddClient from "../screens/AddClient";

const Tab = createBottomTabNavigator();
const BottomNavbar = () => {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  // const WelcomeScreen = () => (
  //   <TouchableOpacity onPress={() => navigation.navigate("Collection")}>
  //     <Collection />
  //   </TouchableOpacity>
  // );
  return (
    // <View style={styles.container}>
    //   <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "#1676F3",
            headerShown: false,
          }}
          style={{borderTopColor: "transparent"}}
        >
          <Tab.Screen
            name="Welcome"
            component={Welcome}
            options={{
              tabBarLabel: "Orders",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Collection"
            component={Collection}
            options={{
              tabBarLabel: "Gallery",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="camera"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
    //   </NavigationContainer>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    fontFamily: "Poppins-Regular",
  },
});
export default BottomNavbar;
