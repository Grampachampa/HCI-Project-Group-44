import { SplashScreen, Stack } from 'expo-router';
import {Tabs} from 'expo-router';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { useCallback} from 'react';
import { useFonts } from 'expo-font';
import * as splash from 'expo-splash-screen';
import { SafeAreaProvider } from "react-native-safe-area-context";
import {HomeScreen} from '../screens/home'


SplashScreen.preventAutoHideAsync();

/* 
 const Layout = () =>  {
    return <Stack />;
}

export default Layout;  */


function RenderHomeScreen() {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <HomeScreen/>
        </View>
    );}



 export default function Layout() {
    return (
      <SafeAreaProvider>
        <Tabs>
            <Tabs.Screen name="index"  options={{ tabBarLabel: "index" }} />
            <Tabs.Screen name="test"  options={{ tabBarLabel: "other index" }} />
        </Tabs>
      </SafeAreaProvider>
    );
  } 