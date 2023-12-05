import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {FontFamObj, MainWhite} from '../../globalConstant';

type CommonTextType = {
  style?: StyleProp<TextStyle>;
};

const CommonText: FC<PropsWithChildren<CommonTextType>> = ({
  children,
  style,
}) => {
  return <Text style={[styles.textDefaultStyle, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  textDefaultStyle: {
    fontFamily: FontFamObj.RussoOneRegular,
    color: MainWhite,
  },
});

export default CommonText;
