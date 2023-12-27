import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './views/HomeScreen';
import CrearCultivoScreen from './views/CrearCultivoScreen';
import InformacionPlagasScreen from './views/InformacionPlagasScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Notifications from 'expo-notifications';
const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === 'Cultivos') {
        iconName = focused ? 'list' : 'list';
      } else if (route.name === 'Agregar Cultivo') {
        iconName = 'add-circle';
        size = 50;
      } else if (route.name === 'Plagas') {
        iconName = focused ? 'info' : 'info';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: '#4285F4', 
    tabBarInactiveTintColor: 'gray', 
    showLabel: false,
    tabBarStyle: {
      height: 65, 
      paddingTop: 10, 
      backgroundColor: 'white', 
    },
  })}
>
        <Tab.Screen
          name="Cultivos"
          component={HomeScreen}
        />
        <Tab.Screen
          name="Agregar Cultivo"
          component={CrearCultivoScreen}
          options={{
          tabBarLabel: '',
    tabBarIcon: ({ focused, color, size }) => (
      <Icon name="add-circle" size={40} color={focused ? '#4285F4' : 'gray'} />
    ),
    labelStyle: { display: 'none' }, 
  }}        
      />
        <Tab.Screen
          name="Plagas"
          component={InformacionPlagasScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

