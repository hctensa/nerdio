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
  const [activeScore, setActiveScore] = React.useState(1);
  const [Difficulty, setDifficulty] = React.useState('Easy');
  const [number1, setNumber1] = React.useState(1);
  const [number2, setNumber2] = React.useState(1);
  const [mathSymbol, setMathSymbol] = React.useState('+');
  const [userAnswer, setUserAnswer] = React.useState(0);
  const [correctAnswer, setCorrectAnswer] = React.useState(0);

  React.useEffect(()=>{
    if (activeScore >= 11){
      setActiveScore(1);
    }
  }, [activeScore])

  const SwapDifficulty = (difficulty_internal:string) => {
    setActiveScore(1)
    switch (difficulty_internal) {
      case 'easy': setDifficulty('easy'); break;
      case 'medium': setDifficulty('medium'); break;
      case 'hard': setDifficulty('hard'); break;
      default: break;
    }
  }

  const ValidateAnswer = () => {
    if(userAnswer === correctAnswer){
      setActiveScore(activeScore+1)
    }
    GenerateNewQuestion()
  }

  const GenerateNewQuestion = () => {
    switch (GenerateRandomNumber1to4Inclusive()) {
      case 1: /* Addition */ GenerateAdditionQuestion(); break;
      case 2: /* Multiplication */ GenerateMultiplicationQuestion(); break;
      case 3: /* Subtraction */ GenerateSubtractionQuestion(); break;
      case 4: /* Division */ GenerateDivisionQuestion(); break;
      default: break;
    }
  }

  const GenerateAdditionQuestion = () => {
    const localNumber1:number = GenerateRandomNumber1to12Inclusive();
    const localNumber2:number = GenerateRandomNumber1to12Inclusive();
    const localCorrectAnswer:number = localNumber1+localNumber2;
    setNumber1(localNumber1);
    setNumber2(localNumber2);
    setMathSymbol("+");
    setCorrectAnswer(localCorrectAnswer);
  }

  const GenerateMultiplicationQuestion = () => {
    const localNumber1:number = GenerateRandomNumber1to12Inclusive();
    const localNumber2:number = GenerateRandomNumber1to12Inclusive();
    const localCorrectAnswer:number = localNumber1*localNumber2;
    setNumber1(localNumber1);
    setNumber2(localNumber2);
    setMathSymbol("x");
    setCorrectAnswer(localCorrectAnswer);
  }

  const GenerateSubtractionQuestion = () => {
    const localNumber1:number = GenerateRandomNumber7to12Inclusive();
    const localNumber2:number = GenerateRandomNumber1to6Inclusive();
    const localCorrectAnswer:number = localNumber1-localNumber2;
    setNumber1(localNumber1);
    setNumber2(localNumber2);
    setMathSymbol("-");
    setCorrectAnswer(localCorrectAnswer);
  }

  const GenerateDivisionQuestion = () => {
    let localNumber1 = Math.floor(Math.random() * 12) + 1;
    let localNumber2 = Math.ceil(Math.random() * (12 / localNumber1)) * localNumber1;
    const localCorrectAnswer:number = localNumber1/localNumber2;
    setNumber1(localNumber1);
    setNumber2(localNumber2);
    setMathSymbol("÷");
    setCorrectAnswer(localCorrectAnswer);
  }

  const GenerateRandomNumber1to4Inclusive = () => {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 4;
    const finalNumber = Math.floor(scaledNumber) + 1;
    return finalNumber;
  }

  const GenerateRandomNumber1to12Inclusive = () => {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 12;
    const finalNumber = Math.floor(scaledNumber) + 1;
    return finalNumber;
  }
  
  const GenerateRandomNumber7to12Inclusive = () => {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 6;
    const finalNumber = Math.floor(scaledNumber) + 7;
    return finalNumber;
  }

  const GenerateRandomNumber1to6Inclusive = () => {
    const randomNumber = Math.random();
    const scaledNumber = randomNumber * 6;
    const finalNumber = Math.floor(scaledNumber) + 1;
    return finalNumber;
  }

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
              <Native.Text style={Style.ScoreCounter}>Question {activeScore}/10</Native.Text>
              <Native.Text style={Style.Countdown}>Time Left: 0 Seconds</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={Style.MiddleView}>
            <Native.ImageBackground source={QuestionBackground} style={Style.QuestionBackgroundImage}>
              <Native.Text style={Style.Question}>What is {number1} {mathSymbol} {number2}?</Native.Text>
              <Native.TextInput style={Style.AnswerBox} placeholder='Enter answer here...' keyboardType='numeric' value={String(userAnswer)} textAlign='center' onChangeText={(inputText) => setUserAnswer(Number(inputText))}/>
              <Native.TouchableOpacity style={Style.HandInButton} onPress={ValidateAnswer}>
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
                <Native.TouchableOpacity style={Style.LevelButtonEasy} onPress={() => SwapDifficulty('easy')}>
                  <Native.Text style={Style.LevelButtonText}>Easy</Native.Text>
                </Native.TouchableOpacity>
                <Native.TouchableOpacity style={Style.LevelButtonMedium} onPress={() => SwapDifficulty('medium')}>
                  <Native.Text style={Style.LevelButtonText}>Medium</Native.Text>
                </Native.TouchableOpacity>
                <Native.TouchableOpacity style={Style.LevelButtonHard} onPress={() => SwapDifficulty('hard')}>
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