import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from 'react-native';
import { Text, Input, Button } from 'react-native-elements';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Auth = createNativeStackNavigator();

const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [translation] = useState(new Animated.Value(0));

  const translateY = (y: number) => {
    Animated.timing(translation, {
      toValue: y,
      duration: 500,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Animated.View
        style={[
          styles.signUpView,
          { transform: [{ translateY: translation }] },
        ]}
      >
        <Input
          label="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCompleteType="email"
          autoCorrect={false}
          onFocus={() => translateY(-70)}
          onEndEditing={() => translateY(0)}
        />
        <Input
          label="Password"
          secureTextEntry={true}
          onFocus={() => translateY(-70)}
          onEndEditing={() => translateY(0)}
        />
        <Button
          title="Sign Up"
          type="clear"
          onPress={() => navigation.navigate('SignIn')}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  signUpView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: 50,
  },
});

export default SignupScreen;
