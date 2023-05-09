import {useState} from 'react'
import { View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList, 
} from 'react-native'
import { useRouter } from 'expo-router'
import {icons, SIZES} from '../../../constants'

import styles from './welcome.style'

const Welcome = () => {
  const router = useRouter()
  
  return (
    <View>
      <Text style={styles.userName}>Hello, Tim</Text>
    </View>
  )
}

export default Welcome