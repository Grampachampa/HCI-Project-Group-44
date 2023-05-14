import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl, dimension, handlePress, resize}) => {
  return (
    //<TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
    <View style={styles.btnContainer}>
      <Image 
        source = {iconUrl}
        resizeMode = {resize}
        style={styles.btnImg(dimension)}
      />
    </View>
    //</TouchableOpacity>
  )
}

export default ScreenHeaderBtn