import { SplashScreen, Stack } from 'expo-router';
import {Tabs} from 'expo-router';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { useCallback} from 'react';
import { useFonts } from 'expo-font';
import * as splash from 'expo-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {HomeScreen} from '../screens/home'
import { COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


SplashScreen.preventAutoHideAsync();


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications




 export default function Layout() {
    return (
        
        <SafeAreaProvider>
                <Tabs screenOptions = {screenOptions}>
                    <Tabs.Screen name="index"  options={{ tabBarLabel: "Home" }} />
                    <Tabs.Screen name="search"  options={{ tabBarLabel: "Search" }} />
                    <Tabs.Screen name="upload"  options={{ tabBarLabel: "Upload" }} />
                    <Tabs.Screen name="stats"  options={{ tabBarLabel: "Stats" }} />
                    <Tabs.Screen name="profile"  options={{ tabBarLabel: "Profile" }} />
                </Tabs>
        </SafeAreaProvider>
        
    );
  } 




var horizontalPaddingHRight = 5;
var horizontalPaddingHLeft = 20;
var verticalPaddingHLeft = 0;

const screenOptions = {
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
}