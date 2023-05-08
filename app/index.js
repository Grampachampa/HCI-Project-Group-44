import {useState} from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';

// FIX LATER
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


const Home = () => {
    const router = useRouter();
    var horizontalPaddingHRight = 5;
    var horizontalPaddingHLeft = 20;
    var verticalPaddingHLeft = 0;

    return (
        <SafeAreaView style = {{fled: 1, backgroundColor: COLORS.lightWhite}}>
            
            <Stack.Screen 
            options = {{
                headerStyle: {backgroundColor: COLORS.backgroundBlue},
                headerShadowVisible: false,

                headerLeft: () => (
                    <View style={{paddingHorizontal: horizontalPaddingHLeft, marginVertical:verticalPaddingHLeft}}><ScreenHeaderBtn iconUrl={icons.logo} dimension="150%" resize = "center" /></View>
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

            <ScrollView showsVerticalScrollIndicator = {true}> 

                <View 
                    style = {{
                        flex: 1, 
                        padding: SIZES.medium
                    }}
                > 
                    <Welcome 
                    
                    /> 

                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;    