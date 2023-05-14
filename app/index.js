import {useState} from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter, Tabs, Link } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';
import { SafeAreaProvider } from "react-native-safe-area-context";


const outputPage = () => {
    return (
        <ScrollView showsVerticalScrollIndicator = {true}> 
            <View 
                style = {{
                    flex: 1, 
                    padding: 0,
                    backgroundColor: COLORS.backgroundBlue,
                }}
            >
                <Popularjobs />
            </View>
        </ScrollView>            
    )
}

export default outputPage;  


