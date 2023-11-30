import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { WelcomeNavigator } from './components/WelcomeComponents';



const App = () => {

  return (
    <NavigationContainer>
      <WelcomeNavigator/>
    </NavigationContainer>
  );
};



export default App;