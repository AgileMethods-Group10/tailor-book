import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import NotifsNav from "../components/NotifsNav";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Notifications() {
    const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <NotifsNav />

        {/* Notifications */}
        <View
          style={{
            backgroundColor: "#fff",
            marginVertical: 20,
            paddingVertical: 20,
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
            backgroundColor: "#fff",
            marginVertical: 5,
            paddingVertical: 20,
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
      </View>
    </SafeAreaView>
  );
}
