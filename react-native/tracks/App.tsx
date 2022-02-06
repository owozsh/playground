import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import Auth from './src/routes/Auth';

const App = () => {
  const [isAuth, setAuth] = useState(false);

  return (
    <NavigationContainer>
      {isAuth && <HomeScreen />}
      {!isAuth && <Auth />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
