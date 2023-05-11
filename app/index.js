import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfilePageLikedSongs from './profile_page_liked_songs';
import Home from './profile_page';
import Notifications from './notifications-page_2';

const Stack = createStackNavigator();

export default function Navigation() {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ProfilePageLikedSongs" component={ProfilePageLikedSongs} />
          <Stack.Screen name="Notifications" component={Notifications} />
          {/* Add more screens/components as needed */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

