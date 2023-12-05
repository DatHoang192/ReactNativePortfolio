import React, {FC, PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import {FontFamObj, FontWeightObj, MainWhite} from '../../globalConstant';

type TitleProps = {
  style?: StyleProp<TextStyle>;
};

const Title: FC<PropsWithChildren<TitleProps>> = ({children, style}) => {
  return <Text style={[styles.defaultTitleStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  defaultTitleStyle: {
    fontFamily: FontFamObj.RussoOneRegular,
    color: MainWhite,
    fontSize: 24,
    fontWeight: FontWeightObj.SemiBold,
  },
});

export default Title;
