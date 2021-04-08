import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Menu from "../screens/Menu";
import SubMenu from "../screens/SubMenu";
import Header from "../components/Header";
import Sloka from "../screens/Sloka";

const screens = {
  Menu: {
    screen: Menu,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
    },
  },
  SubMenu: {
    screen: SubMenu,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
    },
  },
  Sloka: {
    screen: Sloka,
    navigationOptions: {
      headerTitle: () => <Header />,
      headerStyle: {
        backgroundColor: "#FCCE89",
      },
    },
  },
};

const MenuStack = createStackNavigator(screens);

export default createAppContainer(MenuStack);
