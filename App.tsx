// IMPORTING ALL LIBRARIES
import * as React from 'react';
import * as Native from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORTING NERDIO ASSETS
import Style from './assets/style';
const AppLogo = require('./assets/images/logo.png');
const AppHomeBackground = require('./assets/images/home_background.png');


function App(): JSX.Element {
  // === SCREENS
  const HomeScreen = ({navigation}:any) => {
    return (
      <Native.View style={Style.Container}>
        <Native.ImageBackground source={AppHomeBackground} style={Style.BackgroundImage}>
          <Native.View style={Style.TopView}>
            <Native.Image source={AppLogo} style={Style.Logo}/>
          </Native.View>
          <Native.View style={Style.MiddleView}>
            <Native.TouchableOpacity style={Style.PlayButton} onPress={() => navigation.navigate('Game')}>
              <Native.Text style={Style.PlayButtonText}>Play Now</Native.Text>
            </Native.TouchableOpacity>
          </Native.View>
          <Native.View style={Style.BottomView}>
            <Native.Text style={Style.Credits}>App created by Edith-Samuel Sbenghe</Native.Text>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }
  const GameScreen = ({navigation}:any) => {
    return (
      <Native.View style={Style.Container}>
        <Native.ImageBackground source={AppHomeBackground} style={Style.BackgroundImage}>
        </Native.ImageBackground>
      </Native.View>
    );
  }

  // === GAME LOGIC

  // === NAVIGATION
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Game" component={GameScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
