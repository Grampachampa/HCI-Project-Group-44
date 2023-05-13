import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { songs } from './liked_songs';
 

const ProfilePageLikedSongs = ({ navigation }) => {
    
    const [likedSongs, setLikedSongs] = useState(songs);

  const handleSongRemove = (songId) => {
    const updatedSongs = likedSongs.filter((song) => song.id !== songId);
    setLikedSongs(updatedSongs);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#03001C' }}>
      <View style={styles.upper_container}>
        <View style={{ flex: 4 }}>
          <Image style={{ resizeMode: 'contain', height: 71, width: 58 }} source={require('../Images/Logo.png')} />
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ resizeMode: 'contain', height: 51, width: 47, paddingLeft: 100 }} source={require('../Images/Settings.png')} />
        </View>
        <View style={{ padding: 8, flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
            <Image style={{ resizeMode: 'contain', height: 37, width: 39, paddingLeft: 120 }} source={require('../Images/Notification.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <Image style={{ resizeMode: 'contain', height: 45, width: 47, paddingLeft: 130 }} source={require('../Images/Messages.png')} />
        </View>
      </View>
      <View style={{ alignItems: 'center', width: '100%', height: 200, backgroundColor: '#03001C' }}>
        <Image style={{ height: 200, width: 200 }} source={require('../Images/Liked.png')} />
        <Text style={{ paddingTop: 5, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Liked Songs</Text>
      </View>
      <ScrollView>
      {likedSongs.map((song) => (
            <View style={{ flexDirection: 'row', paddingTop: 30, paddingLeft: 25 }}>
              <Image style={{ height: 60, width: 60 }} source={song.image_path} />
              <View style={{flex: 6}}>
                <Text style={{ paddingLeft: 8, fontSize: 20, fontWeight: 'bold', color: 'white' }}>{song.title}</Text>
                <Text style={{ paddingLeft: 8, fontSize: 18, paddingTop: 5, color: 'white' }}>Song • {song.artist}</Text>
              </View>
              <TouchableOpacity key={song.id} onPress={() => handleSongRemove(song.id)}>
                <Image style={{ height: 0, width: 0, paddingLeft: 100, flex: 0.5, resizeMode: 'contain'}} source={require('../Images/close_button.png')} />
              </TouchableOpacity>
            </View>
          
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upper_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: '80%'
    },
    profile_container:{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      height: 160,
      width: '80%'


    },

    logo: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    settings: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notifications: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'},
    messages: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'},

})

 

export default ProfilePageLikedSongs;  