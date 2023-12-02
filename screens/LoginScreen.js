import React, { useState } from "react";
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

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/tailor-logo.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text>Log into your Account</Text>
      <Text>Welcome back, please enter your details.</Text>

      {/* Email Input */}
      <Text>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      {/* Password Input with Eye Button */}
      <Text>Password</Text>
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
        <Checkbox
          value={rememberMe}
          onValueChange={() => setRememberMe(!rememberMe)}
        />
        <Text>Remember Me</Text>
        <TouchableOpacity>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text>Login</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      {/* Social Logos */}
      <View style={styles.socialLogosContainer}>
        {/* Add your social logos images here */}
        {/* Example: */}
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
          style={styles.socialLogo}
        />
        <Image
          source={require("../assets/facebook.png")}
          style={styles.socialLogo}
        />
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
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    position: "relative",
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  eyeButton: {
    position: "absolute",
    right: 10,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  divider: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginVertical: 20,
  },
  socialLogosContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  socialLogo: {
    width: 40,
    height: 40,
  },
});

export default LoginScreen;
