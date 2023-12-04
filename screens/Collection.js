import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Navbar from "../components/Navbar";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";

const Collection = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingTop: 80,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  welcome: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Collection;
