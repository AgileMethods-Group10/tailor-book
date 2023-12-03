import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from "./screens/SplashScreen";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPassword';
import OTPScreen from './screens/OTPScreen';
import { useFonts } from "expo-font";
import MySplashScreen from "./screens/SplashScreen";
import * as SplashScreen from "expo-splash-screen";
import NewPasswordScreen from './screens/NewPassword';
import PasswordSuccessScreen from './screens/PasswordSuccess';
import Welcome from './screens/Welcome';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const App = () => {

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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen name="SplashScreen" component={MySplashScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="PasswordSuccessScreen" component={PasswordSuccessScreen} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
