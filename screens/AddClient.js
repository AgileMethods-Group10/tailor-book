import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import ClientNav from "../components/ClientNav";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";
import { useNavigation } from "@react-navigation/native";

const AddClient = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ClientNav />
      <ScrollView>
        
      </ScrollView>
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
export default AddClient;
