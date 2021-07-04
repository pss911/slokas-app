import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Menu from "../screens/Menu";
import SubMenu from "../screens/SubMenu";
import Sloka from "../screens/Sloka";

const screens = {
  Menu: {
    screen: Menu,
    navigationOptions: {
      title: "శ్లోకములు",
      headerBackTitle: "Back",
      headerStyle: {
        backgroundColor: "#FCCE89",
        height: 115
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Telugu1",
        fontSize: 36,
      },
    },
  },
  SubMenu: {
    screen: SubMenu,
    navigationOptions: {
      title: "శ్లోకములు",
      headerBackTitle: "Back",
      headerStyle: {
        backgroundColor: "#FCCE89",
        height: 115
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Telugu1",
        fontSize: 36,
      },
    },
  },
  Sloka: {
    screen: Sloka,
    navigationOptions: {
      title: "శ్లోకములు",
      headerBackTitle: "Back",
      headerStyle: {
        backgroundColor: "#FCCE89",
        height: 115
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Telugu1",
        fontSize: 36,
      },
    },
  },
};

const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);
