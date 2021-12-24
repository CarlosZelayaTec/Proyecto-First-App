import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { HomeScreen, RapisScreen, FavoritesScreen , AjustesScreen } from './Screens/index';
import { StyleSheet, View } from 'react-native';
import PerfilClienteStack from './Screens/PerfilClienteStack';

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
}, 
{ 
  initialRouteName: 'Home',
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarOptions: { // El objeto que utilizamos par hacer modificaciones a nuestra barra de menú
      style: { //Estilo a la barra de navegacion
        backgroundColor: '#667eea',
        height: 55,
        borderTopLeftRadius: 40,
        // backgroundColor: '#764ba2'
      },
      labelStyle: { //Estilo a la fuente de nuestros menus
        fontSize: 13,
        fontWeight: '300',
      },
      activeTintColor: '#667eea', // Color del texto de la pantalla en ejecucion
      inactiveTintColor: '#000', //Color de los textos de las pantallas inactivas
  },
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    let iconName
    let iconNameIonicon
    let iconNameMaterial

      if(routeName === 'Home'){
        iconNameIonicon = `${focused ? 'home-outline' : 'ios-home'}`;
      }

      if(routeName === 'Rapis'){
        iconName = 'motorcycle'
      }

      if(routeName === 'Favoritos'){
        iconNameMaterial = `${focused ? 'favorite-outline' : 'favorite'}`;
      }

      if(routeName === 'Ajustes'){
        iconNameIonicon = `${focused ? 'settings-outline' : 'settings-sharp'}`
      }
      
        return (
          <View style={ styles.centrar }>
            <MaterialIcons name={iconNameMaterial} size={25} />
            <Ionicons name={iconNameIonicon} size={25} />
            <FontAwesome5 name={iconName} size={25} />
          </View>
        )

  }
})
}
)

const AppNavigatorStack = createStackNavigator({
  Main: AppNavigator,
  Perfil: {
    screen: PerfilClienteStack,
  }
},{
  defaultNavigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#667eea',
      borderBottomEndRadius: 40,
      borderBottomStartRadius: 40,
    },
    title: 'Principal',
    headerTitleStyle: {
      fontSize: 20
    }
  })
})
  
export default createAppContainer(AppNavigatorStack);

const styles = StyleSheet.create({
  centrar: {
    flexDirection: 'row',
  }
})
