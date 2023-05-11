import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NotificationItem = ({ message, onDismiss }) => {
    const [isDisplayed, setIsDisplayed] = useState(true);
  
    const handleDismiss = () => {
      setIsDisplayed(false);
      onDismiss();
    };
  
    return (
      isDisplayed && (
        <TouchableOpacity style={style.notification} onPress={handleDismiss}>
          <Text>{message}</Text>
        </TouchableOpacity>
      )
    );
  };

  const ClearAllButton = ({ onClearAll }) => {
    return (
      <TouchableOpacity style={style.clearAllButton} onPress={onClearAll}>
        <Text>Clear All</Text>
      </TouchableOpacity>
    );
  };
  

export default function Notifications ({ navigation }) {

    const [notifications, setNotifications] = useState([
        { id: 1, message: 'Rob starting following you',  time: '9 minutes ago'},
        { id: 2, message: 'Maria liked your latest post', time: '15 minutes ago' },
        { id: 3, message: 'Debra started following you', time: '1 hour ago' },
        {id: 4, message: 'You have a new message from Daniel', time: '1 hour ago'},
        {id: 5, message: 'Daniel liked your latest post', time: '1 hour ago'},
        {id: 6, message: 'Daniel started following you', time: '2 hour ago'},
        {id: 7, message: 'Jennifer started following you', time: '2 hour ago'},
        {id: 8, message: 'Jenna liked your latest post', time: '2 hour ago'},
        {id: 9, message: 'You have a new message from Jenna', time: '2 hour ago'},
        {id: 10, message: 'Michael started following you', time: '3 hour ago'},
      ]);
      
    const handleNotificationPress = (id) => {
        const updatedNotifications = notifications.filter((n) => n.id !== id);
        setNotifications(updatedNotifications);
      };

    const handleDismissNotification = (id) => {
        setNotifications((notifications) =>
          notifications.filter((notification) => notification.id !== id)
        );
      };
    
    const handleClearAllNotifications = () => {
        setNotifications([]);
      };
      
    return (
        <SafeAreaView style = {{flex: 1, backgroundColor:'#03001C'}}>
            <View style={style.upper_container}>
                <View style={{flex:4}}>
                    <Image style={{resizeMode: 'contain', height:71, width:58}}
                    source={require('/Users/bedirhangursoy/Downloads/HCI-project-no-clone/Images/Logo.png')}/>
                </View>
                <View style={{flex:1}}>
                   <Image style={{resizeMode: 'contain', height:51, width:47, paddingLeft:100}}
                   source={require('/Users/bedirhangursoy/Downloads/HCI-project-no-clone/Images/Settings.png')}/>
                </View>
                <View style={{padding:8, flex:1}}>
                    <Image style={{resizeMode: 'contain', height:37, width:39, paddingLeft:120}}
                    source={require('/Users/bedirhangursoy/Downloads/HCI-project-no-clone/Images/Notification.png')}/>
                </View>
                <View style={{flex:1}}>
                    <Image style={{resizeMode: 'contain', height:45, width:47, paddingLeft:130}}
                    source={require('/Users/bedirhangursoy/Downloads/HCI-project-no-clone/Images/Messages.png')}/>
                </View>
            </View>

            <View style={{flexDirection: 'row', paddingLeft: 25, width: '100%'}}>
                <Text style={{flex: 0.75, fontSize:30, fontWeight: 'bold', color: 'white', paddingTop: 20}}>Your Notifications</Text>
                <View style={{flex: 0.20, paddingBottom:0}}>
                <ClearAllButton onClearAll={handleClearAllNotifications}/>
                </View>
            </View>

            <ScrollView style={{ width: '100%', height: 100}}>
                <View>
                    {notifications.map((n) => (
                    <TouchableOpacity key={n.id} onPress={() => handleNotificationPress(n.id)}>
                        <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
                        <Image style={{height: 60, width: 60}}source={require('/Users/bedirhangursoy/Downloads/HCI-project-no-clone/Images/Profile_Picture.png')}/>
                        <View style={{paddingLeft: 10, paddingTop: 10}}>
                        <Text style={style.name_text}>{n.message}</Text>
                        <Text style={style.time_text}>{n.time}</Text>
                        
                        </View>
                        </View>
                        
                        
                    </TouchableOpacity>
                    
                    ))}
                <View style={{width: '100%', alignItems: 'center', paddingTop: 10}}>
                    <Text style={{color: 'white', fontSize: 15}}>No more notification below</Text>
                    </View>
                </View>
            </ScrollView>



            
        </SafeAreaView>
    )
}



const style = StyleSheet.create({
    upper_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        width: '80%'},
    name_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',},
    time_text: {
        fontSize: 16,
        color: '#159895',},
    clearAllButton: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        marginTop: 20,
        },   
    });
     
    