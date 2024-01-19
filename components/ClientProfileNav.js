import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

const ClientNavProfile = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
  });
  const navigation = useNavigation();
  const [clientName, setClientName] = useState("");
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, "users"));
      const sortedDocs = querySnapshot.docs
        .map((doc) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt
            ? doc.data().createdAt.toDate()
            : null,
        })) // Include the document ID and handle undefined createdAt
        .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)); // Handle undefined createdAt in sorting

      if (sortedDocs.length > 0) {
        setClientName(sortedDocs[0].clientName);
      }
      setLoading(false);
    } catch (e) {
      console.error("Error fetching data: ", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.back}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Icon name="arrow-left" size={30} color="#1676F3" />
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        {loading ? "Loading..." : `${clientName}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  back: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    borderRadius: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
    letterSpacing: -0.34,
  },
  span: {
    fontWeight: "300",
    fontFamily: "Poppins-Regular",
  },
});
export default ClientNavProfile;
