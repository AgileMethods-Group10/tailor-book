import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import MySplashScreen from "./screens/SplashScreen";
import * as SplashScreen from "expo-splash-screen";
import AppStackNavigator from "./stack_navigators/AppStackNavigator";
import { StatusBar } from "expo-status-bar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AuthStackNavigator from "./stack_navigators/AuthStackNavigator";
import { registerRootComponent } from 'expo';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();
const auth = getAuth();

const App = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const [isAssetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const loadAssets = async () => {
      await SplashScreen.hideAsync();
      setAssetsLoaded(true);
    };

    if (fontsLoaded) {
      loadAssets();
    }
  }, [fontsLoaded]);

  if (!isAssetsLoaded) {
    return <MySplashScreen />;
  }
  {onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  })}

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      {loggedin ? <AppStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default registerRootComponent(App);
