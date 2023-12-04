import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import { sendPasswordResetEmail, getAuth } from "@firebase/auth";
import app from "../firebase";

const auth = getAuth(app);
const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  const [resetEmailSent, setResetEmailSent] = useState(false);
  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email with instructions has been sent to your email");
        setResetEmailSent(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

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
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.header}>
        <Image
          source={require("../assets/tailor-logo.png")}
          style={{ width: 140, height: 140 }}
        />
        <Text
          style={{ fontFamily: "Poppins-Bold", paddingTop: 30, fontSize: 24 }}
        >
          Forgot Password
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            paddingVertical: 15,
            textAlign: "center",
          }}
        >
          Enter the email address associated with your account to receive
          password reset code
        </Text>
      </View>

      {/* Email Input */}
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 15,
        }}
      >
        Email Address
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Login Button */}
      <TouchableOpacity onPress={resetPassword} style={styles.loginButton}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Submit
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
  input: {
    height: 55,
    width: "100%",
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: "#1676F3",
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default ForgotPasswordScreen;
