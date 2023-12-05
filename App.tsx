import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './Components/MainStack';
import {MainBlack} from './globalConstant';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: MainBlack,
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </View>
  );
}

export default App;
