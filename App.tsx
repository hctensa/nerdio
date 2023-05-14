// IMPORTING ALL LIBRARIES
import * as React from 'react';
import * as Native from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORTING NERDIO ASSETS
import Style from './assets/style'
const AppLogo = require('./assets/images/logo.png')
const AppIcon = require('./assets/images/icon.png')
const AppBackground = require('./assets/images/background.png')


function App(): JSX.Element {
  // === SCREENS
  const HomeScreen = ({navigation}:any) => {
    return (
      <Native.View style={Style.Container}>
        <Native.View style={Style.bottomView}>
          <Native.Text style={Style.Credits}>App created by Edith-Samuel Sbenghe</Native.Text>
        </Native.View>
      </Native.View>
    )
  }
  const GameScreen = ({navigation}:any) => {
    return (
      <Native.View>
        <Native.Text>This is the game screen</Native.Text>
      </Native.View>
    )
  }

  // === GAME LOGIC

  // === NAVIGATION
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
