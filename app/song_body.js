import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { songs } from './liked_songs';
import { Stack, useRouter, Tabs, Link } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { SafeAreaProvider } from "react-native-safe-area-context";


export const SongBody = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundBlue }}>
      <ScrollView>
        <Text style={{color: COLORS.lighterGreen}}>I Cry</Text>
      </ScrollView>
    </SafeAreaView>
  );
};