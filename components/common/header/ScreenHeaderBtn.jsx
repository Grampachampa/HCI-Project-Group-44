import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, resize}) => {

  const onPressHandler = () => {
    navigation.navigate('Notifications');
  };

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.btnContainer} onPress={() => onPressHandler()}>
      <Image 
        source = {iconUrl}
        resizeMode = {resize}
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn