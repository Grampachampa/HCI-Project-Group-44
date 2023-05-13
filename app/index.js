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
            
            <Stack.Screen 
            options = {{
                headerStyle: {backgroundColor: COLORS.backgroundBlue},
                headerShadowVisible: false,

                headerLeft: () => (
                    <View style={{paddingHorizontal: horizontalPaddingHLeft, marginVertical:verticalPaddingHLeft}}><ScreenHeaderBtn iconUrl={icons.logo} dimension="150%" resize = "center"/></View>
                ),
                headerRight: () => (
                    
                    <View style={{flexDirection:"row"}}>
                        <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.tuning} dimension="100%"/></View>
                        <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.notification} dimension="80%"/></View>
                        <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.message} dimension="100%" resize = "cover" /></View>
                    </View>
                ),
                headerTitle: "",
            }}
            />

            <HomeScreen />
            
        </SafeAreaView>
    )
}
export default outputPage;  


