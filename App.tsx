// IMPORTING ALL LIBRARIES
import * as React from 'react';
import * as Native from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORTING NERDIO ASSETS
import Style from './assets/style'


function App(): JSX.Element {
  // === SCREENS
  const HomeScreen = () => {
    return (
      <Native.View>
        <Native.Text style={Style.Heading}>This is the home screen</Native.Text>
      </Native.View>
    )
  }
  const GameScreen = () => {
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
