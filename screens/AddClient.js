import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Switch,
} from "react-native";
import ClientNav from "../components/ClientNav";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import {
  Calendar,
} from "react-native-calendars";

const AddClient = () => {
  const [selectedDate, setSelectedDate] = useState(false);
  const [remindDate, setRemindDate] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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
            Fabrics Types:
          </Text>
          <ScrollView horizontal={true}>
            <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
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

        <View style={styles.firstContainer}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Regular",
              letterSpacing: 1,
              marginVertical: 20,
            }}
          >
            Order Date:
          </Text>
          <Calendar
            onDayPress={(day) => {
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
            style={{
              width: "100%",
              paddingVertical: 10,
            }}
          />
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
            Delivery Date:
          </Text>
          <Calendar
            onDayPress={(day) => {
              setRemindDate(day.dateString);
            }}
            markedDates={{
              [remindDate]: {
                selected: true,
                disableTouchEvent: true,
                selectedDotColor: "orange",
              },
            }}
            style={{
              width: "100%",
              paddingVertical: 10,
            }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              Mark as urgent
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#e5e5e5" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
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
            Add Measurement:
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Length
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Shoulder
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Chest
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Waist
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Hips
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Arm Length
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Around Arm
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Wrist
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Collar Front
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Collar Back
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                width: 100,
              }}
            >
              Around Leg
            </Text>
            <TextInput
              placeholder="00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
              }}
            />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              inches
            </Text>
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
            Payment Details:
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              Total Amount (GHS)
            </Text>
            <TextInput
              placeholder="00.00"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderBottomWidth: 1,
                borderBottomColor: "#000",
                width: 100,
                textAlign: "center",
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
            Additional Notes:
          </Text>
          <View>
            <TextInput
              placeholder="Type here"
              style={{
                fontSize: 18,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                borderWidth: 1,
                borderColor: "#ccc",
                width: "100%",
                paddingBottom: 150,
                paddingLeft: 10,
                borderRadius: 8,
              }}
            />
          </View>
        </View>

        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate("ClientProfile")}>
            <Text
              style={{
                fontFamily: "Poppins-Medium",
                color: "#fff",
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
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
  loginButton: {
    backgroundColor: "#1676F3",
    paddingVertical: 14,
    borderRadius: 5,
  },
});
export default AddClient;
