import {useState} from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter, Tabs, Link } from 'expo-router';
import {HomeScreen} from '../screens/home'
import { COLORS, icons, images, SIZES } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { SafeAreaProvider } from "react-native-safe-area-context";



 function RenderHomeScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HomeScreen/>
        </View>
    );
}

function RenderSettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

const Tab = createMaterialBottomTabNavigator();

const outputPage = () => {
    const router = useRouter();
    var horizontalPaddingHRight = 5;
    var horizontalPaddingHLeft = 20;
    var verticalPaddingHLeft = 0;

    return (
        <SafeAreaView style = {{fled: 1, backgroundColor: COLORS.backgroundBlue}}>
            
             
          

            <View><Text style={{color:COLORS.lighterGreen}}>AHAHAHA IT WORKSSS</Text></View>
            
        </SafeAreaView>
    )
}
export default outputPage;  