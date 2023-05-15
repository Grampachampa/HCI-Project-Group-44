import { ScrollView, SafeAreaView, Text, View, FlatList, Button, Image, StyleSheet } from 'react-native';
import { COLORS, icons, images, SIZES } from '../constants';

import useFetch  from '../hook/useFetch';

import Swiper from 'react-native-swiper';


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
                      <Text style={[style.text, {fontSize: 25}]}>From most liked to least liked</Text>
                    </View>
          
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                      <View style={{flex:1, flexDirection: "column", marginLeft: 15, alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.likes} style={{flex:1, height: 50, width: 40}}></Image>
                        <Text style={style.text}>{item.likes}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.commments} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={[style.text, {marginLeft: 10,}]}>{item.comments}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", marginRight: 5, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
                        <Image source={icons.listens} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={style.text}>{item.views}</Text>
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
                      <Text style={[style.text, {fontSize: 20}]}>From most commented to least commented</Text>
                    </View>
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                      <View style={{flex:1, flexDirection: "column", marginLeft: 15, alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.likes} style={{flex:1, height: 50, width: 40}}></Image>
                        <Text style={style.text}>{item.likes}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.commments} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={[style.text, {marginLeft: 10,}]}>{item.comments}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", marginRight: 5, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
                        <Image source={icons.listens} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={style.text}>{item.views}</Text>
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
        <View style={{alignItems: "center", paddingTop: 10}}>
                      <Text style={[style.text, {fontSize: 25}]}>From most viewed to least viewed</Text>
                    </View>
        <View  style={{ flex:1, paddingTop: 10}}> 
          
          <FlatList
              data={data}
              style={{}}
              keyExtractor={(item) => item.strMusicBrainzID.toString()}
              renderItem={({ item, index }) => {
                
                  return(
                <View style={{flex: 1, flexDirection: "row", borderWidth: 0, borderColor: "white", margin: 15, marginLeft: 0}}>
                  <Image source={item?.strTrackThumb != null ? {uri:item?.strTrackThumb}: icons.questionMark} style={{flex: 1, width: 150, height: 150, borderRadius: 20, margin: 1}}></Image>
                  <View style={{flexDirection: "column", flex: 2, borderWidth: 0, borderColor: "blue"}}>
                    <View style={{flex:1, borderWidth: 0, borderColor: "yellow"}}>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontWeight: "bold", fontSize: 23, color: "white"}]}>{item.strTrack}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 11}]}>{item.strAlbum}</Text>
                      <Text numberOfLines={1} ellipsizeMode="clip" style={[style.text, {fontSize: 18, color: "white"}]}>{item.strArtist}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row'}}>
                      <View style={{flex:1, flexDirection: "column", marginLeft: 15, alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.likes} style={{flex:1, height: 50, width: 40}}></Image>
                        <Text style={style.text}>{item.likes}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", alignContent: "center", justifyContent: "center"}}>
                        <Image source={icons.commments} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={[style.text, {marginLeft: 10,}]}>{item.comments}</Text>
                      </View>
                      <View style={{flex:1, flexDirection: "column", marginRight: 5, alignContent: "center", justifyContent: "center", alignItems: "center"}}>
                        <Image source={icons.listens} style={{flex:1, height: 50, width: 60}}></Image>
                        <Text style={style.text}>{item.views}</Text>
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
  <Swiper loop={false} showsPagination={true}>
    <LikedPage />
    <CommentPage />
    <ViewPage />
  </Swiper>
);


export default SwipingNavigator;