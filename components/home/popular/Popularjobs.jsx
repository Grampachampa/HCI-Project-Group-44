import {React, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter, error } from 'expo-router'
import {COLORS, icons, images, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

import styles from './popularjobs.style'

const Popularjobs = () => {

  const router = useRouter();

  const {data, isLoading, error} = useFetch()
  //console.log(data["loved"]);
  
  
  
  return (
    <View style={styles.container}>
      
      
      <View style={styles.cardsContainer}>
        {isLoading? (
          <ActivityIndicator  size="large" color={COLORS.lighterGreen} />

        ) : error ? (
            <Text style={{color:"red"}}>Something Went Wrong</Text>

        ) : (
          <FlatList
            data = {data["loved"]}
            renderItem = {({item}) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item?.idTrack}
            contentContainerStyle={{columnGap: SIZES.medium}}
            
          />
        )}
      </View>
    </View>
  )}

export default Popularjobs