import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as RN from 'react-native';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RN.Text>Hello World!</RN.Text>
    </NavigationContainer>
  );
}

export default App;
