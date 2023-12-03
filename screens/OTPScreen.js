import React, { useState, useRef } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";
import CountDown from "react-native-countdown-component";
import OTPTextView from "react-native-otp-textinput";
import OTPTextInput, { ResendOTP } from "react-native-otp-textinput";

const OTPScreen = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  const handleOtpChange = (otp) => {
    setOtp(otp);
  };
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
          OTP Verification
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            paddingVertical: 15,
            textAlign: "center",
            color: "#5A6676",
          }}
        >
          Enter the OTP sent to the email address you entered
        </Text>
      </View>
      <View>
        <OTPTextView
          handleTextChange={handleOtpChange}
          defaultValue={otp}
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
          inputCount={4}
          tintColor="#1676F3"
          offTintColor="#ccc"
        />
        {/* <OTPTextInput ref={(e) => (otpInput = e)} tintColor /> */}
      </View>
      <CountDown
        until={60}
        size={30}
        digitStyle={{ backgroundColor: "#FFF" }}
        digitTxtStyle={{ color: "#1676F3" }}
        timeToShow={["S"]}
        timeLabels={{ s: "secs" }}
        onFinish={() => alert("finished")}
        onPress={() => alert("counting...")}
      />
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
          Didn't receive code?
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              color: "#1676F3",
              paddingTop: 40,
              paddingLeft: 5,
            }}
            onPress={() => (email ? alert("Code sent to email") : null)}
          >
            Re-send
          </Text>
        </TouchableOpacity>
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton}>
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
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  otpInput: {
    borderWidth: 2,
    borderRadius: 8,
    width: 70,
    height: 70,
    textAlign: "center",
    fontSize: 24,
  },
});

export default OTPScreen;
