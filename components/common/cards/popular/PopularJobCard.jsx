import {useState, useEffect, React} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {COLORS, icons, images, SIZES} from '../../../../constants'
import styles from './popularjobcard.style'
import {ScreenHeaderBtn} from '../../../../components';




const PopularJobCard = ({item, selectedJob, handleCardPress}) => {
  const random_views = Math.floor(Math.random() * 100000) + 1;
  const random_likes = Math.floor(random_views/50) * (Math.floor(Math.random() * 48) + 1);
  const random_comments = Math.floor(random_likes/50) * (Math.floor(Math.random() * 48) + 1);

  const random_viewsabbrNum = abbrNum(random_views, 1);
  const random_likesabbrNum = abbrNum(random_likes, 1);
  const random_commentsabbrNum = abbrNum(random_comments, 1);


  
  const songcover = item?.strTrackThumb 
  //console.log(songcover)



  return (

    <View>

      <TouchableOpacity
      style= {styles.container(selectedJob, item)}
      //onPress = {() => handleCardPress(item)}
      >

        <View style={{flexDirection:"row"}}>
        <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>

          <Image
          
          source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark}
          resizeMode='contain'
          style={styles.logoImage}/>

          
      
        </TouchableOpacity>

        <View style={{flexDirection:"column", marginLeft:"5%"}}>

          <Text style={{color:COLORS.white, fontSize:SIZES.xLarge, fontWeight:"bold"}}>{item.strTrack}</Text>
          <Text style={{color:COLORS.lighterGreen, fontSize:SIZES.small, fontWeight:"normal",}}>{item.strAlbum}</Text>
          <Text style={{color:COLORS.white, fontSize:SIZES.medium, fontWeight:"normal",}}>{item.strArtist}</Text>
          
          </View>

        
        
        <View style={{flexDirection:"row", marginLeft:"53%", marginTop: "24%", justifyContent:"center", position:"absolute"}}>

          <View style={{paddingRight: 0, flexDirection:"column"}}>
            <ScreenHeaderBtn iconUrl={icons.likes} dimension="130%" resize = "contain"/>
            <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_likesabbrNum}</Text>
          </View>

          <View style={{paddingLeft: 25, paddingRight: 29, flexDirection:"column"}}>
            <ScreenHeaderBtn iconUrl={icons.commments} dimension="120%" resize = "cover"/>
            <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_commentsabbrNum}</Text>
          </View>


          <View style={{paddingVertical: 0, flexDirection:"column"}}>
            <ScreenHeaderBtn iconUrl={icons.listens} dimension="120%" />
            <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_viewsabbrNum}</Text>
            </View>

            

          </View>

          
        </View>  
      </TouchableOpacity>


    </View>
  )
}


function abbrNum(number, decPlaces) {
  // 2 decimal places => 100, 3 => 1000, etc
  decPlaces = Math.pow(10,decPlaces);

  // Enumerate number abbreviations
  var abbrev = [ "k", "m", "b", "t" ];

  // Go through the array backwards, so we do the largest first
  for (var i=abbrev.length-1; i>=0; i--) {

      // Convert array index to "1000", "1000000", etc
      var size = Math.pow(10,(i+1)*3);

      // If the number is bigger or equal do the abbreviation
      if(size <= number) {
           // Here, we multiply by decPlaces, round, and then divide by decPlaces.
           // This gives us nice rounding to a particular decimal place.
           number = Math.round(number*decPlaces/size)/decPlaces;

           // Handle special case where we round up to the next abbreviation
           if((number == 1000) && (i < abbrev.length - 1)) {
               number = 1;
               i++;
           }

           // Add the letter for the abbreviation
           number += abbrev[i];

           // We are done... stop
           break;
      }
  }

  return number;
}

export default PopularJobCard