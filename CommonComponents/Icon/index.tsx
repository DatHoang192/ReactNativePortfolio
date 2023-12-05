import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import {getIcon} from '../../commonFunction';

type props = {
  family: string;
  name: string;
  size: number;
  color: string;
  style?: StyleProp<TextStyle>;
};

const Icon = ({family, name, size, color, style}: props) => {
  const Family: typeof Icon | typeof FontAwesome5Icon = getIcon(family);

  return <Family style={style} name={name} color={color} size={size} />;
};

export default Icon;
