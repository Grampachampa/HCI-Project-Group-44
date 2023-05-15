import { ScrollView, SafeAreaView, Text, View, FlatList, Button, Image, StyleSheet } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';

import useFetch  from '../hook/useFetch';

import Swiper from 'react-native-swiper';
import {LikeButton} from '../components';
import { abbrNum } from '../components/common/cards/popular/PopularJobCard';





const LikedPage = () => {
  
  let data = useFetch().data["loved"]
  
  if (typeof(data) === "undefined"){
    return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.lighterGreen}}>LOADING</Text>
        </View>
        </SafeAreaView>
    )
  }  
  data = [...data].sort((a, b) => b.likes - a.likes); //check if FL is undefined
  
  return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View  style={{ flex:1, paddingTop: 10}}> 
        <View style={{alignItems: "center", padding: 10}}>
                      <Text style={{color: COLORS.white, fontSize: 25, fontWeight: "bold"}}>Most Liked</Text>
                    </View>
          
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {

                const random_viewsabbrNum = abbrNum(item?.views, 1);
                const random_likesabbrNum = abbrNum(item?.likes, 1);
                const random_commentsabbrNum = abbrNum(item?.comments, 1);
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', marginLeft:20}}>
                      
                      <View style={{paddingRight: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.likes} dimension="130%" resize = "contain" isLikeButton = "true" item = {item}/>
                      </View>

                      <View style={{paddingLeft: 25, paddingRight: 29, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.commments} dimension="120%" resize = "cover"/>
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_commentsabbrNum}</Text>
                      </View>


                      <View style={{paddingVertical: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.listens} dimension="120%" />
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_viewsabbrNum}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );}}
            />

        </View>      
                    
      </SafeAreaView>
  )
}


const CommentPage = () => {
  
  let data = useFetch().data["loved"]
  
  if (typeof(data) === "undefined"){
    return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.lighterGreen}}>LOADING</Text>
        </View>
        </SafeAreaView>
    )
  }  
  data = [...data].sort((a, b) => b.comments - a.comments); //check if FL is undefined
  
  return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View  style={{ flex:1, paddingTop: 10}}> 
        <View style={{alignItems: "center", padding: 10}}>
                      <Text style={{color: COLORS.white, fontSize: 25, fontWeight: "bold"}}>Most Comments</Text>
                    </View>
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {
                const random_viewsabbrNum = abbrNum(item?.views, 1);
                const random_likesabbrNum = abbrNum(item?.likes, 1);
                const random_commentsabbrNum = abbrNum(item?.comments, 1);
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', marginLeft:20}}>
                      
                      <View style={{paddingRight: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.likes} dimension="130%" resize = "contain" isLikeButton = "true" item = {item}/>
                      </View>

                      <View style={{paddingLeft: 25, paddingRight: 29, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.commments} dimension="120%" resize = "cover"/>
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_commentsabbrNum}</Text>
                      </View>


                      <View style={{paddingVertical: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.listens} dimension="120%" />
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_viewsabbrNum}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );}}
            />

        </View>      
                    
      </SafeAreaView>
  )
}


const ViewPage = () => {
  
  let data = useFetch().data["loved"]
  
  if (typeof(data) === "undefined"){
    return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: COLORS.lighterGreen}}>LOADING</Text>
        </View>
        </SafeAreaView>
    )
  }  
  data = [...data].sort((a, b) => b.views - a.views); //check if FL is undefined
  
  return (
      <SafeAreaView style = {{flex: 1, backgroundColor: COLORS.backgroundBlue}}>
        <View style={{alignItems: "center", padding: 10}}>
                      <Text style={{color: COLORS.white, fontSize: 25, fontWeight: "bold"}}>Most Listened</Text>
                    </View>
        <View  style={{ flex:1, paddingTop: 10}}> 
          
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {
                const random_viewsabbrNum = abbrNum(item?.views, 1);
                const random_likesabbrNum = abbrNum(item?.likes, 1);
                const random_commentsabbrNum = abbrNum(item?.comments, 1);
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', marginLeft:20}}>
                      
                      <View style={{paddingRight: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.likes} dimension="130%" resize = "contain" isLikeButton = "true" item = {item}/>
                      </View>

                      <View style={{paddingLeft: 25, paddingRight: 29, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.commments} dimension="120%" resize = "cover"/>
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_commentsabbrNum}</Text>
                      </View>


                      <View style={{paddingVertical: 0, flexDirection:"column"}}>
                        <LikeButton iconUrl={icons.listens} dimension="120%" />
                        <Text style={{color:COLORS.white, paddingTop: 10, textAlign: 'center'}}>{random_viewsabbrNum}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              );}}
            />

        </View>      
                    
      </SafeAreaView>
  )
}

const style = StyleSheet.create({
  text: {
    color: COLORS.lighterGreen,
    margin: 0,
    paddingLeft: "2%",
  }

})

const SwipingNavigator = () => (
  <Swiper loop={false} showsPagination={true} dotColor = {COLORS.darkerGreen} activeDotColor={COLORS.lighterGreen}>
    <LikedPage />
    <CommentPage />
    <ViewPage />
  </Swiper>
);


export default SwipingNavigator;