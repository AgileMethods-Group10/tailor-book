import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const ClientNavProfile = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-left" size={30} color="#1676F3" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>John Doe</Text>
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
  back: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
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
export default ClientNavProfile;
