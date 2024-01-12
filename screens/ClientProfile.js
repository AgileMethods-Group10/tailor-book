import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import ClientNavProfile from "../components/ClientProfileNav";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function ClientProfile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
        <ClientNavProfile />

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
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Icon name="person" size={25} color="#1676F3" />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Poppins-Regular",
                  letterSpacing: 1,
                }}
              >
                John Doe
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Icon name="phone" size={23} color="#1676F3" />
              <Icon name="message" size={23} color="#1676F3" />
              <Icon name="email" size={24} color="#1676F3" />
            </View>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Regular",
              letterSpacing: 1,
              paddingTop: 30,
            }}
          >
            Order Date
          </Text>
          <View
            style={{
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
                padding: 10,
              }}
            >
              May 12,2002
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
              Order Status:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                color: "#bbb",
              }}
            >
              Received
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
              Payment Status:
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                letterSpacing: 1,
                color: "#bbb",
              }}
            >
              Incomplete
            </Text>
          </View>

          <View style={{ marginTop: 50 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#1676F3",
                paddingVertical: 14,
                borderRadius: 5,
              }}
              onPress={() => navigation.navigate("Bill")}
            >
              <Text
                style={{
                  fontFamily: "Poppins-Medium",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                View Bill
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
