import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TrackListScreen from './TrackListScreen';
import TrackCreateScreen from './TrackCreateScreen';
import AccountScreen from './AccountScreen';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TrackList" component={TrackListScreen} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
