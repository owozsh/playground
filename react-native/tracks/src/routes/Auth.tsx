import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignupScreen from '../screens/SignupScreen';
import SigninScreen from '../screens/SigninScreen';

const Stack = createNativeStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="SignIn" component={SigninScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});

export default Auth;
