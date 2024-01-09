import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import ClientNav from "../components/ClientNav";
import { useFonts } from "expo-font";
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
        <View style={styles.firstContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Regular",
              letterSpacing: 1,
              marginVertical: 20,
            }}
          >
            Client Details:
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../assets/user.png")}
              style={{ width: 30, height: 30 }}
            />
            <TextInput
              placeholder="Client Name"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../assets/phone.png")}
              style={{ width: 30, height: 30 }}
            />
            <TextInput
              placeholder="+233 000 000 000"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../assets/location.png")}
              style={{ width: 30, height: 30 }}
            />
            <TextInput
              placeholder="Client Address"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            />
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
              display: "flex",
              flexDirection: "row",
              gap: 20,
              paddingVertical: 10,
            }}
          >
            <Image
              source={require("../assets/hash.png")}
              style={{ width: 30, height: 30 }}
            />
            <TextInput
              placeholder="Client ID"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            />
          </View>
        </View>

        <View style={styles.firstContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Regular",
              letterSpacing: 1,
              marginVertical: 20,
            }}
          >
            Cloth Items:
          </Text>
          <ScrollView horizontal={true}>
            <View style={{display: "flex", flexDirection: "row", gap: 20}}>
              <Image
                source={require("../assets/cloth1.png")}
                style={{ width: 230, height: 230 }}
              />
               <Image
                source={require("../assets/cloth2.png")}
                style={{ width: 230, height: 230 }}
              />
               <Image
                source={require("../assets/cloth3.png")}
                style={{ width: 230, height: 230 }}
              />
               <Image
                source={require("../assets/cloth4.png")}
                style={{ width: 230, height: 230 }}
              />
               <Image
                source={require("../assets/cloth5.png")}
                style={{ width: 230, height: 230 }}
              />
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: "#FAF8F8",
    fontFamily: "Poppins-Regular",
  },
  firstContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
    paddingBottom: 20,
  },
});
export default AddClient;
