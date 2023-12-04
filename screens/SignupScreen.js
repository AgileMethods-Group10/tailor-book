import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");

  const navigation = useNavigation();
  const auth = getAuth(app); 
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
        alert("You have successfully created an account! Login Now")
        navigation.navigate("LoginScreen")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
        // ..
      });
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/tailor-logo.png")}
          style={{ width: 120, height: 120 }}
        />
        <Text
          style={{ fontFamily: "Poppins-Bold", paddingTop: 10, fontSize: 24 }}
        >
          Create an Account
        </Text>
        <Text style={{ fontFamily: "Poppins-Regular", paddingBottom: 20 }}>
          Sign up now to get started with an account
        </Text>
      </View>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 10,
        }}
      >
        Full Name <Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="John Doe"
        keyboardType="text"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 10,
        }}
      >
        Email Address <Text style={{ color: "red" }}>*</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        autoCapitalize="none"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 10,
        }}
      >
        Password <Text style={{ color: "red" }}>*</Text>
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
      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 10,
        }}
      >
        Confirm Password <Text style={{ color: "red" }}>*</Text>
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

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          paddingTop: 20,
        }}
      >
        <Checkbox
          value={rememberMe}
          onValueChange={() => setRememberMe(!rememberMe)}
        />
        <Text style={{ fontFamily: "Poppins-Regular", color: "#5A6676" }}>
          I have read and agreed to the{" "}
          <Text style={{ color: "#3387F5" }}>Terms and Services</Text>
        </Text>
      </View>

      {/* Login Button */}
      <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
        <Text
          style={{
            fontFamily: "Poppins-Medium",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Get Started
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
            paddingTop: 30,
          }}
        >
          Don’t have an account?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#1676F3",
              paddingTop: 30,
              paddingLeft: 5,
            }}
            onPress={() => navigation.navigate("LoginScreen")}
          >
            Log in
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
    marginVertical: 15,
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

export default SignupScreen;
