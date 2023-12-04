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
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import app from "../firebase";
import { getAuth, updatePassword } from "firebase/auth";

const auth = getAuth(app);

const NewPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation();

  const updatePasswordFunc = () => {
    const user = auth.currentUser;
    updatePassword(user, password)
      .then(() => {
        navigation.navigate("PasswordSuccessScreen");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });


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
          name="arrow-left"
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
          Set New Password
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            paddingVertical: 15,
            textAlign: "center",
          }}
        >
          Enter new strong password , password should have at least 8
          characters, with max letter, numbers, and special number.
        </Text>
      </View>

      <Text
        style={{
          fontFamily: "Poppins-Regular",
          color: "#5A6676",
          paddingTop: 20,
        }}
      >
        New Password (Min 8 characters) <Text style={{ color: "red" }}>*</Text>
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
          paddingTop: 20,
        }}
      >
        Confirm New Password (Min 8 characters){" "}
        <Text style={{ color: "red" }}>*</Text>
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
      {/* Login Button */}
      <TouchableOpacity
        onPress={updatePasswordFunc}
        style={styles.loginButton}
      >
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
  loginButton: {
    backgroundColor: "#1676F3",
    paddingVertical: 20,
    borderRadius: 5,
    marginTop: 20,
  },
});

export default NewPasswordScreen;
