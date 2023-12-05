import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainBlack} from '../../globalConstant';
import JobTitle from './components/JobTitle';
import Information from './components/Information';

const PortfolioComponent = () => {
  return (
    <SafeAreaView style={{backgroundColor: MainBlack, flex: 1}}>
      <JobTitle />
      <Information />
    </SafeAreaView>
  );
};

export default PortfolioComponent;
