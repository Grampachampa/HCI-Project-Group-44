import {useState} from 'react';
import { ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';

// FIX LATER
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';


export function HomeScreen () {
    return(
        <ScrollView showsVerticalScrollIndicator = {true}> 

            <View 
                style = {{
                    flex: 1, 
                    padding: 0
                }}
            >
                <Popularjobs />
            </View>
        </ScrollView>
    )
}