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
import { useNavigation } from "@react-navigation/native";

const Collection = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit1.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }} onPress={() => navigation.navigate("AddClient")}>
              Cardigan
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit2.png")}
                style={{ width: 160, height: 150 }}
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
                source={require("../assets/fit3.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Two Piece
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              {/* <SvgUri
                width="100%"
                height="100%"
                uri="../assets/pyjamas.svg"
              /> */}
              {/* <PyjamasSVG width={"100%"} height={"100%"} /> */}
              <Image
                source={require("../assets/fit4.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              African Wear
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit5.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Blouse
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit6.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Silk Shirt
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit7.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Trousers
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit8.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Pleated Skirt
            </Text>
          </View>
        </View>
        <View style={styles.dressContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit9.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Loose Trousers
            </Text>
          </View>
          <View style={styles.subContainer}>
            <TouchableOpacity>
              <Image
                source={require("../assets/fit10.png")}
                style={{ width: 160, height: 150 }}
              />
            </TouchableOpacity>
            <Text style={{ fontFamily: "Poppins-Medium", fontSize: 16 }}>
              Jalabia
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
    backgroundColor: "#f7fafc",
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
