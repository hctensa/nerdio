// IMPORTING ALL LIBRARIES
import * as React from 'react';
import * as Native from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//IMPORTING NERDIO ASSETS
import Style from './assets/style';
const AppLogo = require('./assets/images/logo.png');
const AppHomeBackground = require('./assets/images/home_background.png');
const QuestionBackground = require('./assets/images/question_background.png');


function App(): JSX.Element {
  // === GAME LOGIC
  const [level0Score, setLevel0Score] = React.useState(1);
  const [level1Score, setLevel1Score] = React.useState(1);
  const [level2Score, setLevel2Score] = React.useState(1);
  const [Difficulty, setDifficulty] = React.useState('Easy');
  const [activeLevelScore, setActiveLevelScore] = React.useState(1);
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
  const GameScreen = () => {
    return (
      <Native.View style={Style.Container}>
        <Native.ImageBackground source={AppHomeBackground} style={Style.BackgroundImage}>
          <Native.View style={Style.TopView}>
            <Native.View style={Style.MiddleView}>
              <Native.Text style={Style.ScoreCounter}>Question {activeLevelScore}/10</Native.Text>
              <Native.Text style={Style.Countdown}>Time Left: 0 Seconds</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={Style.MiddleView}>
            <Native.ImageBackground source={QuestionBackground} style={Style.QuestionBackgroundImage}>
              <Native.Text style={Style.Question}>What is 1 + 1?</Native.Text>
              <Native.TextInput style={Style.AnswerBox} placeholder='Enter answer here...'/>
              <Native.TouchableOpacity style={Style.HandInButton}>
                <Native.Text style={Style.HandInButtonText}>Hand In</Native.Text>
              </Native.TouchableOpacity>
            </Native.ImageBackground>
          </Native.View>
          <Native.View style={Style.BottomView}>
            <Native.View style={Style.MiddleView}>
            </Native.View>
            <Native.View style={Style.BottomView}>
              <Native.Text style={Style.Subheading}>Want to try a different difficulty?</Native.Text>
              <Native.View style={Style.LevelButtonView}>
                <Native.TouchableOpacity style={Style.LevelButtonEasy}>
                  <Native.Text style={Style.LevelButtonText}>Easy</Native.Text>
                </Native.TouchableOpacity>
                <Native.TouchableOpacity style={Style.LevelButtonMedium}>
                  <Native.Text style={Style.LevelButtonText}>Medium</Native.Text>
                </Native.TouchableOpacity>
                <Native.TouchableOpacity style={Style.LevelButtonHard}>
                  <Native.Text style={Style.LevelButtonText}>Hard</Native.Text>
                </Native.TouchableOpacity>
              </Native.View>
            </Native.View>
          </Native.View>
        </Native.ImageBackground>
      </Native.View>
    );
  }

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
