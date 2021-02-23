import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ChatScreen from './src/screens/ChatScreen';
import Announcements from './src/screens/Announcements';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Chat: ChatScreen,
    Announcements: Announcements,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
