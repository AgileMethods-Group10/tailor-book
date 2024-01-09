import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const ClientNav = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={30} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>New Client Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
    letterSpacing: -0.34,
  },
  span: {
    fontWeight: "300",
    fontFamily: "Poppins-Regular",
  },
});
export default ClientNav;
