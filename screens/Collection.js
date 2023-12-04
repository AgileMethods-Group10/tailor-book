import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Navbar from "../components/Navbar";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";

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
          <Image
            source={require("../assets/dress1.png")}
            style={{ width: 100, height: 150 }}
          />
          <Image
            source={require("../assets/dress2.png")}
            style={{ width: 100, height: 150 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Blouse
          </Text>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Dress
          </Text>
        </View>
        <View style={styles.dressContainer}>
          <Image
            source={require("../assets/dress1.png")}
            style={{ width: 100, height: 150 }}
          />
          <Image
            source={require("../assets/dress2.png")}
            style={{ width: 100, height: 150 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Blouse
          </Text>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Dress
          </Text>
        </View>
        <View style={styles.dressContainer}>
          <Image
            source={require("../assets/dress1.png")}
            style={{ width: 100, height: 150 }}
          />
          <Image
            source={require("../assets/dress2.png")}
            style={{ width: 100, height: 150 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Blouse
          </Text>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Dress
          </Text>
        </View>
        <View style={styles.dressContainer}>
          <Image
            source={require("../assets/dress1.png")}
            style={{ width: 100, height: 150 }}
          />
          <Image
            source={require("../assets/dress2.png")}
            style={{ width: 100, height: 150 }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Blouse
          </Text>
          <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
            Dress
          </Text>
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
    backgroundColor: "#fff",
    fontFamily: "Poppins-Regular",
  },
  welcome: {
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dressContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    marginTop: 40,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 20,
  },
});
export default Collection;
