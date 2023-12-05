import React from 'react';
import {StyleSheet, View} from 'react-native';
import Title from '../../../CommonComponents/Title';
import {MainBlack, MainGray, MainWhite} from '../../../globalConstant';

const JobTitle = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.GrayText}>Mobile</Title>
      <Title style={styles.WhiteText}>Software</Title>
      <Title style={styles.GrayText}>Developer</Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  GrayText: {
    fontSize: 58,
    marginLeft: 10,
    color: MainGray,
    textShadowColor: MainWhite,
    textShadowOffset: {width: 1, height: -1.5},
    textShadowRadius: 1,
  },
  WhiteText: {
    marginRight: 20,
    fontSize: 58,
    color: MainBlack,
    textShadowColor: MainWhite,
    textShadowRadius: 3,
    textAlign: 'right',
  },
});

export default JobTitle;
