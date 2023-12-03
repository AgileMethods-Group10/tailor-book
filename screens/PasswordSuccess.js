import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

const PasswordSuccessScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#FAFAFA",
          borderColor: "#989898",
          borderWidth: 1,
          width: "17%",
          display: "flex",
          alignItems: "center",
          paddingVertical: 10,
          borderRadius: 5,
        }}
      >
        <Icon
          name="arrowleft"
          size={30}
          color="#000"
          onPress={() => navigation.navigate("LoginScreen")}
        />
      </View>
      <View style={styles.header}>
        <Image
          source={require("../assets/check.png")}
          style={{ width: 120, height: 120 }}
        />
        <Text
          style={{ fontFamily: "Poppins-Bold", paddingTop: 30, fontSize: 24, textAlign: "center" }}
        >
          Password Successfully Recovered
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            paddingVertical: 15,
            textAlign: "center",
          }}
        >
          Return to the login screen to enter the application
        </Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
        style={styles.loginButton}
      >
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Return to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loginButton: {
    backgroundColor: "#1676F3",
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default PasswordSuccessScreen;
