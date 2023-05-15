import React from 'react'
import { TouchableOpacity, Image, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import {COLORS, icons, images, SIZES} from '../../../constants'
import styles from './screenheader.style'
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react/cjs/react.development';
import { abbrNum } from '../cards/popular/PopularJobCard';



const ScreenHeaderBtn = ({iconUrl, dimension, resize, isLikeButton, item}) => {
  if (item == null){
    item = {}
    
  }
  const[alternateImage, setAlternateImage] = useState(true);
  let [likes, setLikes] = useState(item["likes"]);


  
  item["iconUsed"] = icons.liked;

  const onPressHandler = () => {
    if (isLikeButton == "true") {
      if (item["isLiked"]==true) {
        item["isLiked"] = false
        item["likes"] -= 1;
        setLikes(likes => likes-1);
        setAlternateImage(alternateImage => !alternateImage);
 
      }
      else{
        item["isLiked"] = true;
        item["likes"] += 1;
        setLikes(likes => likes+1);
        setAlternateImage(alternateImage => !alternateImage);
      };
    }
    //console.log(item["isLiked"], item["likes"]);
  }

  function TouchOpacityOutput() {

    if (isLikeButton != "true"){
      return(
      <TouchableOpacity style={styles.btnContainer}>

        <Image 
          source = {(item["isLiked"])? (item["iconUsed"]) : iconUrl}
          resizeMode = {resize}
          style = {styles.btnImg(dimension)}
        />

      </TouchableOpacity>
      )}
    
    else{
      return(
      <View>  
        <TouchableOpacity style={styles.btnContainer} onPress={() => onPressHandler()}>
          {alternateImage && <Image source={icons.likes} style={styles.btnImg(dimension)} resizeMode='contain'/>}
          {!alternateImage && <Image source={icons.liked} style={styles.btnImg(dimension)} resizeMode='contain'/>}
        </TouchableOpacity>
        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{abbrNum(likes, 1)}</Text>
        </View>
      )
    }
  }
  return (
    //<TouchableOpacity style={styles.btnContainer} onPress={() => onPressHandler()}>
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