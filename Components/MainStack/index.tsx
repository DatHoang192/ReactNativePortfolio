import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import ContactScreen from '../../screens/Contact';
import PortfolioScreen from '../../screens/Portfolio';
import Icon from '../../CommonComponents/Icon';
import {MainBlack, MainGray} from '../../globalConstant';
import CommonText from '../../CommonComponents/CommonText';

const MainStackTab = createBottomTabNavigator();

const MainStack: FC = () => {
  const getTabBarIcon = (
    route: string,
    focused: boolean,
  ): React.JSX.Element => {
    let component = <></>;
    switch (route) {
      case 'Portfolio':
        component = (
          <Icon
            family="AntDesign"
            name="aliwangwang-o1"
            size={24}
            color={focused ? MainBlack : MainGray}
          />
        );
        break;
      case 'Contact':
        component = (
          <Icon
            family="AntDesign"
            name="infocirlce"
            size={24}
            color={focused ? MainBlack : MainGray}
          />
        );
        break;

      default:
        component = <></>;
    }
    return (
      <>
        {component}
        <CommonText style={{color: focused ? MainBlack : MainGray}}>
          {route}
        </CommonText>
      </>
    );
  };
  return (
    <MainStackTab.Navigator>
      <MainStackTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => getTabBarIcon('Portfolio', focused),
        }}
        name="Portfolio"
        component={PortfolioScreen}
      />
      <MainStackTab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => getTabBarIcon('Contact', focused),
        }}
        name="Contact"
        component={ContactScreen}
      />
    </MainStackTab.Navigator>
  );
};

export default MainStack;
