import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import ClientNavProfile from "../components/ClientProfileNav";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function ClientProfile() {
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
                {loading ? "Loading..." : `${clientName}`}
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
          {loading ? (
            <>
              <Text>loading client data...</Text>
            </>
          ) : (
            <>
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
            </>
          )}

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
