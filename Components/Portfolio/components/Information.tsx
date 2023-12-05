import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommonText from '../../../CommonComponents/CommonText';
import Icon from '../../../CommonComponents/Icon';
import {MainGreen, MainWhite} from '../../../globalConstant';

const Information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstLine}>
        <CommonText style={styles.textStyle}>Hi</CommonText>
        <Icon
          style={styles.iconStyle}
          family="MaterialCommunityIcons"
          name="hand-wave-outline"
          size={30}
          color={MainWhite}
        />
      </View>
      <View style={styles.secondLine}>
        <CommonText style={styles.textFont}>I'm </CommonText>
        <CommonText style={[styles.nameText, styles.textFont]}>
          Hoang Tien Dat
        </CommonText>
      </View>
      <View style={styles.paragraph}>
        <CommonText style={styles.smallTextFont}>
          With two years of experience as a mobile developer, I specialize in
          React and React Native. I also possess strong design and developer
          management skills.
        </CommonText>
      </View>
      <CommonText style={styles.endLine}>Consultant at Netcompany.</CommonText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  firstLine: {
    flexDirection: 'row',
  },
  iconStyle: {
    marginLeft: 10,
  },
  textStyle: {
    fontSize: 28,
  },
  secondLine: {
    flexDirection: 'row',
  },
  nameText: {
    color: MainGreen,
  },
  textFont: {
    fontSize: 34,
  },
  paragraph: {
    paddingVertical: 5,
  },
  smallTextFont: {
    fontSize: 16,
  },
  endLine: {
    color: MainGreen,
    fontSize: 16,
  },
});

export default Information;
