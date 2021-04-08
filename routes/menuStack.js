import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Menu from "../screens/Menu";
import Header from "../components/Header";

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
};

const MenuStack = createStackNavigator(screens);

export default createAppContainer(MenuStack);
