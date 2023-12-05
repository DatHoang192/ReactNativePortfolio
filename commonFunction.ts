import {Icon} from 'react-native-vector-icons/Icon';
import VectorIcon from './VectorIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export const getIcon = (
  family: string,
): typeof Icon | typeof FontAwesome5Icon => {
  let Family;
  switch (family) {
    case 'AntDesign':
      Family = VectorIcon.AntDesign;
      break;
    case 'Entypo':
      Family = VectorIcon.Entypo;
      break;
    case 'EvilIcons':
      Family = VectorIcon.EvilIcons;
      break;
    case 'Feather':
      Family = VectorIcon.Feather;
      break;
    case 'FontAwesome':
      Family = VectorIcon.FontAwesome;
      break;
    case 'FontAwesome5':
      Family = VectorIcon.FontAwesome5;
      break;
    case 'Fontisto':
      Family = VectorIcon.Fontisto;
      break;
    case 'Ionicons':
      Family = VectorIcon.Ionicons;
      break;
    case 'MaterialCommunityIcons':
      Family = VectorIcon.MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      Family = VectorIcon.MaterialIcons;
      break;
    case 'Octicons':
      Family = VectorIcon.Octicons;
      break;
    case 'SimpleLineIcons':
      Family = VectorIcon.SimpleLineIcons;
      break;
    case 'Zocial':
      Family = VectorIcon.Zocial;
      break;
    case 'FontAwesome5Pro':
      Family = VectorIcon.FontAwesome5Pro;
      break;
    case 'FontAwesome6':
      Family = VectorIcon.FontAwesome6;
      break;
    case 'FontAwesome6Pro':
      Family = VectorIcon.FontAwesome6Pro;
      break;
    default:
      Family = VectorIcon.Ionicons;
  }
  return Family;
};
