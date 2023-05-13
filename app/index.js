import {useState} from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter, Tabs, Link } from 'expo-router';
import {HomeScreen} from '../screens/home'
import { COLORS, icons, images, SIZES } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { SafeAreaProvider } from "react-native-safe-area-context";


const outputPage = () => {
    return (
        <SafeAreaView style = {{fled: 1, backgroundColor: COLORS.backgroundBlue}}>
            <Stack.Screen />
            <HomeScreen />            
        </SafeAreaView>
    )
}

export default outputPage;  


