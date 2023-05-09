import {React, useState} from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter, error } from 'expo-router'
import {COLORS, SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

import styles from './popularjobs.style'

const Popularjobs = () => {

  const router = useRouter();

  const {data, isLoading, error} = useFetch();
  
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Music!</Text>
      </View>
      
      <View style={styles.cardsContainer}>
        {isLoading? (
          <ActivityIndicator  size="large" color={COLORS.lighterGreen} />

        ) : error ? (
            <Text>Something Went Wrong</Text>

        ) : (
          <FlatList
            data = {[1,2,3,4]}
            renderItem = {({item}) => (
              <PopularJobCard item={item} />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            
          />
        )}
      </View>
    </View>
  )}

export default Popularjobs