import { useState} from 'react';
import { StyleSheet, View, Text, Image, SafeAreaView, Switch, Animated, TouchableOpacity } from 'react-native';


export default function Home ({ navigation }) {
    const [checked, setChecked] = useState(false)
    const contentOffset = useState(new Animated.Value(0))[0];

    const toggleChecked = () => {
      Animated.timing(contentOffset, {
        toValue: checked ? 0 : 1,
        duration: 50,
        useNativeDriver: true,
      }).start();
      setChecked(!checked);
    };
  
    const renderContent = () => {
        if (checked) {
          return (
            <Animated.View style={{ transform: [{ translateX: contentOffset.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }] }}>
            <View>
                <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color: 'white', paddingTop: 10}}>My Uploads</Text>
            <View style={{paddingLeft: 10, alignItems: 'center', paddingTop: 55, width: '100%'}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', height:250, width:'80%', paddingTop: 5, alignItems: 'center'}}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ProfilePageLikedSongs')}>
                        <View style={{padding: 10}}>
                            <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/Liked.png')}/>
                            <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Liked</Text>
                        </View> 
                        </TouchableOpacity>   
                        <View style={{padding: 10}}>
                            <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/Sunny_side_up.jpeg')}/>
                            <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Sunny Side Up</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{padding: 10}}>
                            <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/Moonlight.png')}/>
                            <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Midnight Moods</Text>
                        </View>
                        <View style={{padding: 10}}>
                            <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/faith.png')}/>
                            <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Faith</Text>
                        </View>
                    </View>

                </View>
            </View>
            </View>
            </Animated.View>);}
            else {
                return (
                    <Animated.View style={{ transform: [{ translateX: contentOffset.interpolate({ inputRange: [0, 1], outputRange: [0, -200] }) }] }}>
                    <View>
                        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color: 'white', paddingTop: 10}}>My Playlists</Text>
                        <View style={{paddingLeft: 10, alignItems: 'center', paddingTop: 55, width: '100%'}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', height:250, width:'80%', paddingTop: 5, alignItems: 'center'}}>
                                <View>
                                    <View style={{padding: 10}}>
                                        <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/just_an_echo.png')}/>
                                        <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Just an Echo</Text>
                                    </View>    
                                    <View style={{padding: 10}}>
                                        <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/galactic_reverie.png')}/>
                                        <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Galactic Reverie</Text>
                                    </View>
                                </View>
                                <View>
                                    <View style={{padding: 10}}>
                                        <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/echoes_of_eup....png')}/>
                                        <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Echoes of Eup...</Text>
                                    </View>
                                    <View style={{padding: 10}}>
                                        <Image style={{resizeMode: 'contain', height:125, width:125}} source={require('../Images/dreamscape.png')}/>
                                        <Text style={{textAlign: 'center', paddingTop: 5, color: 'white'}}>Dreamscape</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                    </Animated.View>);}};

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: '#03001C'}}>

            <View style={styles.upper_container}>
                <View style={{flex:4}}>
                    <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
                    <Image style={{resizeMode: 'contain', height:71, width:58}}
                    source={require('../Images/Logo.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                   <Image style={{resizeMode: 'contain', height:51, width:47, paddingLeft:100}}
                   source={require('../Images/Settings.png')}/>
                </View>
                <View style={{padding:8, flex:1}}>
                <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                    
                        <Image style={{resizeMode: 'contain', height:37, width:39, paddingLeft:120}}
                        source={require('../Images/Notification.png')}/>
                </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Image style={{resizeMode: 'contain', height:45, width:47, paddingLeft:130}}
                    source={require('../Images/Messages.png')}/>
                </View>
            </View>

            <View style={styles.profile_container}>
                <View style={{flex:1, paddingLeft:20}}>
                    <Image style={{resizeMode: 'contain', height:160, width:130}}
                    source={require('../Images/Profile_Picture.png')}/>
                </View>
                <View style={{flex:2, paddingLeft: 120, paddingTop: 20}}>
                    <Text style={{fontSize:20, fontWeight:'bold' , color: 'white'}}>Profile Name</Text>
                </View>
            </View>
            <View style={{borderBottomColor: '#57C5B6', borderBottomWidth: 1.2,}}/>

            <View>
            
            {renderContent()}

                <View style={{ paddingTop: 35, alignItems: 'center' }}>
                    <Switch
                    value={checked}
                    onValueChange={toggleChecked}
                    trackColor={{ false: 'red', true: '#57C5B6' }}
                    thumbColor={'#193636'}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

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
      height: 150,
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