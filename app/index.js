import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePageLikedSongs from './profile_page_liked_songs';
import Home from './profile_page';
import Notifications from './notifications-page_2';
import AddToPlaylistPage from './add_to_playlist_page';
import SearchScreen from './search_page';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProfilePageLikedSongs" component={ProfilePageLikedSongs} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name='AddToPlaylistPage' component={AddToPlaylistPage} />
          <Stack.Screen name='ProfilePage' component={Home} />
          <Stack.Screen name='SearchScreen' component={SearchScreen} />
          {/* Add more screens/components as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

