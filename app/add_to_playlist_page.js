import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity, useState } from 'react-native';
import ProfilePageLikedSongs from './profile_page_liked_songs';



export default function AddToPlaylistPage() {

    const [playlist, setPlaylist] = useState([]);

    const addToPlaylist = (playlistName, song) => {
        setPlaylist((prevPlaylist) => {
          const updatedPlaylist = [...prevPlaylist];
          const playlistIndex = updatedPlaylist.findIndex((p) => p.name === playlistName);
          if (playlistIndex !== -1) {
            updatedPlaylist[playlistIndex].songs.push(song);
          }
          return updatedPlaylist;
        });
      };
    

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: '#03001C'}}>

            <Text style={{color: 'white'}}>Add to Playlist:</Text>
            <Text style={{color: 'white'}}>Liked Songs</Text>
            <Text style={{color: 'white'}}>Sunny Side Up</Text>
            <Text style={{color: 'white'}}>Midnight Moods</Text>
            <Text style={{color: 'white'}}>Faith</Text>

        </SafeAreaView>
    );
}