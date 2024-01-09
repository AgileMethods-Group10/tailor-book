import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.welcome}>
        <Image
          source={require("../assets/welcome.jpg")}
          style={{ width: 200, height: 200 }}
        />
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            paddingVertical: 10,
            fontSize: 24,
          }}
        >
          Welcome To Tailor Book!
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#9F9CA1" }}>
          No clients added yet get started by adding a client
        </Text>
      </View>
      <View
        style={{ display: "flex", alignItems: "center", marginBottom: "-20px" }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("AddClient")}>
          <Image
            source={require("../assets/plus.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
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
    height: "78%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Welcome;
