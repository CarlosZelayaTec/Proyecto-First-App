import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, RapisScreen, FavoritesScreen, AjustesScreen } from './Screens/index';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Rapis: {
    screen: RapisScreen,
  },
  Favoritos: {
    screen: FavoritesScreen,
  },
  Ajustes: {
    screen: AjustesScreen,
  }
}, { initialRouteName: 'Home' })

export default createAppContainer(AppNavigator);
