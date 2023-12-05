import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainBlack} from '../../globalConstant';

const ContactComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: MainBlack, flex: 1}}>
      <Text>Contact</Text>
    </SafeAreaView>
  );
};

export default ContactComponent;
