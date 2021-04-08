import React from "react";
import { View } from "react-native";

import Footer from "../components/Footer";
import SubSlokaCards from "../containers/SubSlokaCards";

const SubMenu = () => {
  return (
    <View style={{ flex: 1 }}>
      <SubSlokaCards />
      <Footer />
    </View>
  );
};

export default SubMenu;
