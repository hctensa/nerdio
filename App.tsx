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
  const [countdownDuration, setCountdownDuration] = React.useState(0);
  const [timer, setTimer] = React.useState(countdownDuration);

  React.useEffect(()=>{
    if (activeScore >= 11){
      setActiveScore(1);
    }
  }, [activeScore])

  // TIMER
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (timer <= 0) {
      switch (Difficulty) {
        case 'Easy': break;
        case 'Medium': setCountdownDuration(20);
        case 'Hard': setCountdownDuration(10);
        default: break;
      }
      setTimer(countdownDuration)
      if(Difficulty !== 'Easy'){
        GenerateNewQuestion()
      }
    }
  }, [timer]);

  const formatTime = (time:any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return `${formattedSeconds}`;
  };

  // DIFFICULTY
  const SwapDifficulty = (difficulty_internal:string) => {
    setActiveScore(1);
    GenerateNewQuestion();
    switch (difficulty_internal) {
      case 'easy': setDifficulty('Easy'); break;
      case 'medium': setDifficulty('Medium'); break;
      case 'hard': setDifficulty('Hard'); break;
      default: break;
    }
    switch (Difficulty) {
      case 'Easy': setTimer(0); break;
      case 'Medium': setTimer(20); break;
      case 'Hard': setTimer(10); break;
      default: break;
    }
  }

  const ProcessKeyPress = (KeyPressed:string) => {
    switch (KeyPressed) {
      case '0': if (userAnswer === 0){break} else {setUserAnswer(Number(String(userAnswer)+'0'))} break;
      case 'C': setUserAnswer(Number(String(userAnswer).slice(0,-1))); break;
      default: setUserAnswer(Number(String(userAnswer)+KeyPressed)); break;
    }
  }

  const ValidateAnswer = () => {
    if(userAnswer === correctAnswer){
      setActiveScore(activeScore+1)
    }
    switch (Difficulty) {
      case 'Easy': setTimer(0); break;
      case 'Medium': setTimer(20); break;
      case 'Hard': setTimer(10); break;
      default: break;
    }
    GenerateNewQuestion()
    setUserAnswer(0)
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
    let localNumber1Options = [2,4,6,8,10,12];
    let localNumber1 = localNumber1Options[Math.floor(Math.random() * 5)];
    let localNumber2 = localNumber1/2;
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
              <Native.Text style={Style.Countdown}>Time Left: {formatTime(timer)} Seconds</Native.Text>
            </Native.View>
          </Native.View>
          <Native.View style={Style.MiddleView}>
            <Native.ImageBackground source={QuestionBackground} style={Style.QuestionBackgroundImage}>
              <Native.Text style={Style.Question}>What is {number1} {mathSymbol} {number2}?</Native.Text>
                <Native.Text style={Style.Answer}>{userAnswer}</Native.Text>
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
        <Native.View style={Style.NumpadContainer}>
          <Native.Text style={Style.NumpadTutorial}>Use keypad below to answer </Native.Text>
          <Native.View style={Style.NumpadRow}>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('1')}>
              <Native.Text style={Style.NumpadText}>1</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('2')}>
              <Native.Text style={Style.NumpadText}>2</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('3')}>
              <Native.Text style={Style.NumpadText}>3</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('4')}>
              <Native.Text style={Style.NumpadText}>4</Native.Text>
            </Native.TouchableOpacity>
          </Native.View>
          <Native.View style={Style.NumpadRow}>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('5')}>
              <Native.Text style={Style.NumpadText}>5</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('6')}>
              <Native.Text style={Style.NumpadText}>6</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('7')}>
              <Native.Text style={Style.NumpadText}>7</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('8')}>
              <Native.Text style={Style.NumpadText}>8</Native.Text>
            </Native.TouchableOpacity>
          </Native.View>
          <Native.View style={Style.NumpadRow}>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('9')}>
              <Native.Text style={Style.NumpadText}>9</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('0')}>
              <Native.Text style={Style.NumpadText}>0</Native.Text>
            </Native.TouchableOpacity>
            <Native.TouchableOpacity style={Style.Numpad} onPress={()=>ProcessKeyPress('C')}>
              <Native.Text style={Style.NumpadText}>←</Native.Text>
            </Native.TouchableOpacity>
          </Native.View>
        </Native.View>
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