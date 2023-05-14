import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { songs } from './liked_songs';
import { SafeAreaView } from 'react-native-safe-area-context';

const songsData = [
  { id: 9, title: 'Whispering Shadows', artist: 'Luna Rainheart', image_path: require('../Images/whisperinshadows.jpeg') },
  { id: 2, title: 'Eternal Dream', artist: 'Phoenix Ember', image_path: require('../Images/eternal_dream.jpeg') },
  { id: 3, title: 'Midnight Serenade', artist: 'Aurora Moonlight', image_path: require('../Images/serenade.webp') },
  { id: 4, title: 'Lost in Stardust', artist: 'Nova Skye', image_path: require('../Images/lost.png') }
  // Add more songs to the array
];

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSongs, setSelectedSongs] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setSearchResults([]); // Clear search results when search query is empty
    } else {
      const filteredSongs = songsData.filter((song) =>
        song.title.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredSongs);
    }
  };

  const handleSongSelect = (song) => {
    setSelectedSongs((prevSongs) => [...prevSongs, song]);
  };

  const handleSongRemove = (song) => {
    setSelectedSongs((prevSongs) => prevSongs.filter((item) => item.id !== song.id));
  };

  const handleAddToLikedSongs = (song, songs) => {
    // Add the selected song to the "Liked Songs" playlist
    // You can implement your logic to add the song to the playlist here
    songs.push(song);
    console.log('Adding song to Liked Songs playlist:', song);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#03001C' }}>
      <View style={{paddingTop: 10}}>
      <TextInput
        style={{ height: 40, borderColor: '#887D7D', borderWidth: 1, paddingHorizontal: 10, color: 'black', backgroundColor: 'white', borderRadius: 10, margin: 5}}
        placeholder="Albums, Songs or Artists"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      </View>
      {searchResults.length > 0 && (
        <View>
          <Text style={styles.searchResultstext}>Top Searches:</Text>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row'}}>
              <View style={{flex: 6}}>
              <TouchableOpacity onPress={() => handleSongSelect(item)}>
                
                  <View style={{flexDirection: 'row', paddingTop: 20, paddingLeft: 25}}>
                      <Image style={{height: 60, width: 60, flex: 1}} source={item.image_path}/>
                    <View style={{paddingLeft: 9, flex: 5}}>
                      <Text style={styles.name_song}>{item.title}</Text>
                      <Text style={styles.artist_song}>Song • {item.artist}</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1, paddingTop: 40}}>
                <TouchableOpacity onPress={() => handleAddToLikedSongs(item, songs)}>
                  <Image style={{flex: 1, fontSize: 30, alignItems: 'center', height: 30, width: 30, resizeMode: 'contain'}} source={require('../Images/heart_button.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        </View>
      )}
      {selectedSongs.length > 0 && (
        <View>
          <Text style={styles.searchResultstext}>Recently Searched:</Text>
          {selectedSongs.map((song) => (
              
                <View key={song.id} style={{flexDirection: 'row', paddingTop: 20}}>
                <View style={{paddingLeft: 24}}>
                <Image style={{height: 56, width: 56}} source={song.image_path}/>
                </View>
                <View style={{paddingLeft: 10, flex: 6}}>
                <Text key={song.id} style={styles.name_song}>{song.title}</Text>
                <Text key={song.id} style={styles.artist_song}>Song • {song.artist}</Text>
                </View>
                <View style={{flex: 1.32}}>
                <TouchableOpacity key={song.id} onPress={() => handleSongRemove(song)}>
                  <Image style={{height: 30, width: 30}}source={require('../Images/close_button.png')}/>
                </TouchableOpacity>
                </View>
                </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  upper_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 70,
      width: '80%'},
  name_song: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 5
    },
  artist_song: {
    color: 'white',
    fontSize: 15,
    paddingTop: 5,
    color: '#868686'}
    ,
  searchResultstext: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 10
  },});




export default SearchScreen;