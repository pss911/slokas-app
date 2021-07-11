import React from "react";
import { View } from "react-native";

import Footer from "../components/Footer";
import SlokaCards from "../containers/SlokaCards";

const Menu = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SlokaCards navigation={navigation} />
      {/* <Footer /> */}
    </View>
  );
};

export default Menu;
