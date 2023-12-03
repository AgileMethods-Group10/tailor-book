import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
        <Image
           source={require('../assets/tailor-logo.png')} 
          style={{width: 200, height: 200}}
        />
      <Text style={styles.text}>Tailor 
      <Text style={styles.span}>Book.</Text>
       </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', 
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
    paddingTop: 40,
    letterSpacing: 1,
  },
  span: {
    fontWeight: '300',
  },
});

export default SplashScreen;
