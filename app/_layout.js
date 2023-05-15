import { SplashScreen, Stack } from 'expo-router';
import {Tabs} from 'expo-router';
import { ScrollView, SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native';
import { useCallback} from 'react';
import { useFonts } from 'expo-font';
import * as splash from 'expo-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS, icons, images, SIZES } from '../constants';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


SplashScreen.preventAutoHideAsync();


import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications


function returnHome() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image>icons.tuning</Image>
        </View>
    );}

 export default function Layout() {
    return (
        
        <SafeAreaProvider style={{}}>
                <Tabs screenOptions = {{
                    headerStyle: {backgroundColor: COLORS.backgroundBlue, height: 100},
                    headerShadowVisible: false,
                    tabBarShowLabel : false,

                    tabBarStyle : {backgroundColor: COLORS.darkerGreen, height: 80, borderTopWidth: 1, borderTopColor: COLORS.lighterGreen, shadowOpacity: 0},

                    headerLeft: () => (
                        <View style={{paddingHorizontal: horizontalPaddingHLeft, marginBottom:13}}><ScreenHeaderBtn iconUrl={icons.logo} dimension="150%" resize = "center"/></View>
                    ),
                    headerRight: () => (
                        
                        <View style={{flexDirection:"row"}}>
                            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.tuning} dimension="100%"/></View>
                            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.notification} dimension="80%"/></View>
                            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.message} dimension="100%" resize = "cover" /></View>
                        </View>
                    ),
                    headerTitle: "",


                    tabBarInactiveBackgroundColor: COLORS.darkerGreen,
                    tabBarActiveBackgroundColor: COLORS.slightlyLessDarkGreen,
                    tabBarActiveTintColor: COLORS.lighterGreen,
                    tabBarInactiveTintColor: COLORS.white,
                }}>

                    <Tabs.Screen name="index"    
                        options={{ tabBarLabel: "Home",  
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                              <Image
                              style={{ width: "60%", height: "60%"}}
                              resizeMode='contain'
                                source={icons.fyp}
                              />
                            );
                          },
                        }} 
                    />
                    
                    <Tabs.Screen name="search"  
                        options={{ tabBarLabel: "aaa",  
                        
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                              <Image
                                style={{ width: "60%", height: "60%"}}
                                resizeMode='contain'
                                source={icons.search}
                                
                              />
                            );
                          },
                        }} 
                    />

                    <Tabs.Screen name="upload"    
                        options={{ tabBarLabel: "Upload",  
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                              <Image
                              style={{ width: "80%", height: "80%"}}
                              resizeMode='contain'
                                source={icons.upload}
                              />
                            );
                          },
                        }} 
                    />
                    <Tabs.Screen name="stats"    
                        options={{ tabBarLabel: "Stats",  
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                              <Image
                                style={{ width: "60%", height: "60%"}}
                                resizeMode='contain'
                                source={icons.stats}
                              />
                            );
                          },
                        }} 
                    />
                    <Tabs.Screen name="profile"    
                        options={{ tabBarLabel: "Profile",  
                        tabBarIcon: ({size,focused,color}) => {
                            return (
                              <Image
                                style={{ width: "80%", height: "80%"}}
                                resizeMode='contain'
                                source={icons.home}
                              />
                            );
                          },
                        }} 
                    />
                </Tabs>
        </SafeAreaProvider>
        
    );
  } 




var horizontalPaddingHRight = 5;
var horizontalPaddingHLeft = 20;
var verticalPaddingHLeft = 0;

const  screenOptions = ({ navigation }) => ({
    headerStyle: {backgroundColor: COLORS.backgroundBlue},
    headerShadowVisible: false,

    headerLeft: () => (
        <View style={{paddingHorizontal: horizontalPaddingHLeft, marginBottom:13}}><ScreenHeaderBtn iconUrl={icons.logo} dimension="150%" resize = "center"/></View>
    ),
    headerRight: () => (
        
        <View style={{flexDirection:"row"}}>
            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.tuning} dimension="100%"/></View>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.notification} dimension="80%" navigation={navigation}/></View>
            </TouchableOpacity>
            <View style={{paddingHorizontal: horizontalPaddingHRight}}><ScreenHeaderBtn iconUrl={icons.message} dimension="100%" resize = "cover" /></View>
        </View>
    ),
    headerTitle: "",
});


