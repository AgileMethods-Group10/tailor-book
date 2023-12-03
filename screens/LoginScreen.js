import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement your login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/tailor-logo.png")}
          style={{ width: 120, height: 120 }}
        />
        <Text
          style={{ fontFamily: "Poppins-Bold", paddingTop: 30, fontSize: 24 }}
        >
          Log into your Account
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", paddingBottom: 30 }}>
          Welcome back, please enter your details.
        </Text>
      </View>

      {/* Email Input */}
      <Text style={{ fontFamily: "Poppins-Regular", color: "#5A6676" }}>
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

      {/* Password Input with Eye Button */}
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 20,
        }}
      >
        Password
      </Text>
      <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeButton}>
          <Icon
            name={showPassword ? "eye" : "eye-off"}
            type="material-community"
          />
        </TouchableOpacity>
      </View>

      {/* Remember Me Checkbox and Forgot Password */}
      <View style={styles.checkboxContainer}>
        <View style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <Checkbox
            value={rememberMe}
            onValueChange={() => setRememberMe(!rememberMe)}
          />
          <Text style={{ fontFamily: "Poppins-Regular", color: "#5A6676" }}>
            Remember Me
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{ fontFamily: "Poppins-Medium" }}
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* Social Logos */}
      <View style={styles.socialLogosContainer}>
        <Image
          source={require("../assets/google.png")}
          style={styles.socialLogo}
        />
        <Image
          source={require("../assets/facebook.png")}
          style={styles.socialLogo}
        />
        <Image
          source={require("../assets/apple.png")}
          style={{ width: 35, height: "auto" }}
        />
        <Image
          source={require("../assets/twitter.png")}
          style={styles.socialLogo}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            paddingTop: 40,
          }}
        >
          Don’t have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#1676F3",
              paddingTop: 40,
              paddingLeft: 5,
            }}
            onPress={() => navigation.navigate("SignupScreen")}
          >
            Signup
          </Text>
        </TouchableOpacity>
      </View>
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
  passwordInput: {
    height: 55,
    width: "100%",
    borderColor: "#ccc",
    borderRadius: 5,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    position: "relative",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#1676F3",
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  divider: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginVertical: 30,
  },
  socialLogosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialLogo: {
    width: 45,
    height: 45,
  },
});

export default LoginScreen;
