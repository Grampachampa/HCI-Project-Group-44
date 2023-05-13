import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { songs } from './liked_songs';

const songsData = [
  { id: 9, title: 'Something else', artist: 'IDK', image_path: require('../Images/faith.png') },
  { id: 2, title: 'Delta', artist: 'Tijoux', image_path: require('../Images/Delta.png') },
  { id: 3, title: 'Hentin Up', artist: 'EZE', image_path: require('../Images/Hentin_Up.png') },
  {id: 4, title: 'Head In the Clouds', artist: 'Chenoweth', image_path: require('../Images/Clouds.png')}
  
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
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }}
        placeholder="Search songs..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      {searchResults.length > 0 && (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{flexDirection:'row'}}>
              <View style={{flex: 6}}>
              <TouchableOpacity onPress={() => handleSongSelect(item)}>
                
                  <View style={{flexDirection: 'row', paddingTop: 30, paddingLeft: 25}}>
                      <Image style={{height: 60, width: 60, flex: 1}} source={item.image_path}/>
                    <View style={{paddingLeft: 9, flex: 5}}>
                      <Text>{item.title}</Text>
                      <Text>{item.artist}</Text>
                    </View>
                  </View>
              </TouchableOpacity>
              </View>
              <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => handleAddToLikedSongs(item, songs)}>
                  <Image style={{flex: 1, fontSize: 30, alignItems: 'center', height: 30, width: 30, resizeMode: 'contain'}} source={require('../Images/heart_button.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
      {selectedSongs.length > 0 && (
        <View>
          <Text>Recently Searched:</Text>
          {selectedSongs.map((song) => (
              <TouchableOpacity key={song.id} onPress={() => handleSongRemove(song)}>
                <View key={song.id} style={{flexDirection: 'row', padding: 10}}>
                <Image style={{height: 60, width: 60}} source={song.image_path}/>
                <View style={{paddingLeft: 9}}>
                <Text key={song.id}>{song.title}</Text>
                <Text key={song.id}>{song.artist}</Text>
                </View>
                </View>
              </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};





export default SearchScreen;