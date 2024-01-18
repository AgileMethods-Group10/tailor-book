import * as React from "react";
import { useCallback } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Navbar from "../components/Navbar";
import { useFonts } from "expo-font";
import BottomNavbar from "../components/BottomNavigation";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Icon } from "react-native-elements";

const FirstRoute = () => {
  const renderContent = useCallback(
    () => (
      <>
        <View style={styles.welcome}>
          <Image
            source={require("../assets/welcome.jpg")}
            style={{ width: 200, height: 200 }}
          />
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              paddingVertical: 10,
              fontSize: 24,
            }}
          >
            Welcome To Tailor Book!
          </Text>
          <Text style={{ fontFamily: "Poppins-Regular", color: "#9F9CA1" }}>
            No clients added yet get started by adding a client
          </Text>
        </View>
      </>
    ),
    []
  );
  return renderContent();
};

const SecondRoute = () => {
  const navigation = useNavigation();
  const renderContent = useCallback(
    () => (
      <>
        <View
          style={{
            marginVertical: 20,
            paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomColor: "#e5e5e5",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Icon name="notifications" size={35} color="#1676F3" />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Medium",
                  letterSpacing: 1,
                }}
              >
                John Doe
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                Material Kaftan
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                GHS 300
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                Due on: 12/13/13
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#E8F2FE",
                paddingVertical: 10,
                width: 100,
                borderRadius: 50,
              }}
              onPress={() => navigation.navigate("ClientProfile")}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#1676F3",
                  textAlign: "center",
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            paddingHorizontal: 15,
            borderRadius: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 15,
            }}
          >
            <Icon name="notifications" size={35} color="#1676F3" />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Medium",
                  letterSpacing: 1,
                }}
              >
                Baaba Dampare
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                Material Kaftan
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                GHS 300
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                Due on: 12/13/13
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#E8F2FE",
                paddingVertical: 10,
                width: 100,
                borderRadius: 50,
              }}
              onPress={() => navigation.navigate("ClientProfile")}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#1676F3",
                  textAlign: "center",
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    ),
    []
  );

  return renderContent();
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: "#1676F3" }}
    style={{ backgroundColor: "white", fontFamily: "Poppins-Regular" }}
    activeColor="#1676F3"
    inactiveColor="#9F9CA1"
  />
);

const Welcome = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Active" },
    { key: "second", title: "Completed" },
  ]);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Navbar />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={{ widfth: "100%", backgroundColor: "#fff" }}
      />
      <View style={{ display: "flex", alignItems: "center" }}>
        <TouchableOpacity onPress={() => navigation.navigate("AddClient")}>
          <Image
            source={require("../assets/plus.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>
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
    height: "78%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Welcome;
