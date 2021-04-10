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
      title: "Slokas App",
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Poppins",
        fontSize: 30,
      },
    },
  },
  SubMenu: {
    screen: SubMenu,
    navigationOptions: {
      title: "Slokas App",
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Poppins",
        fontSize: 30,
      },
    },
  },
  Sloka: {
    screen: Sloka,
    navigationOptions: {
      title: "Slokas App",
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
      headerTintColor: "#C31A1A",
      headerTitleStyle: {
        fontWeight: "900",
        letterSpacing: 1,
        fontFamily: "Poppins",
        fontSize: 30,
      },
    },
  },
};

const NavigationStack = createStackNavigator(screens);

export default createAppContainer(NavigationStack);
