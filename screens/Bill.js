import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import PaymentNav from "../components/PaymentNav";

export default function Bill() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <PaymentNav />

        <View
          style={{
            backgroundColor: "#fff",
            marginVertical: 20,
            paddingVertical: 20,
            paddingHorizontal: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 12,
              borderColor: "#e5e5e5",
              borderWidth: 2,
              borderRadius: 5,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
              Material Kaftan
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                letterSpacing: 1,
                color: "#bbb",
              }}
            >
              GHC 500.00    
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
              }}
            >
             Total:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Bold",
                letterSpacing: 1,
                color: "#bbb",
              }}
            >
              GHC 500.00
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#1676F3",
                paddingVertical: 14,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("tabs")}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Return to Home
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
