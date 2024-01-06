import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";
import SVG from "../assets/pyjamas.svg";

const Collection = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/dress1.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Black Jalabia
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/dress2.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Straight Dress
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
            <Image
                source={require("../assets/gown.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Gown
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/pyjamas.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Pyjamas
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
            <Image
                source={require("../assets/blouse.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Blouse
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/indian-wear.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Indian Wear
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
            <Image
                source={require("../assets/jumpsuit.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Jumpsuit
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/pleated-dress.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Pleated Dress
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
            <Image
                source={require("../assets/skirt.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Skirt
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/suit.png")}
                style={{ width: 100, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Suit
            </Text>
          </View>
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
    backgroundColor: "#e5e5e5",
    fontFamily: "Poppins-Regular",
  },
  dressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 30,
    backgroundColor: "#fff",
    borderRadius: "10px",
    gap: "8px",
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    gap: "18px",
  },
});
export default Collection;
