import React from "react";
import { View } from "react-native";

import Footer from "../components/Footer";
import SubSlokaCards from "../containers/SubSlokaCards";

const SubMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SubSlokaCards id={navigation.getParam("id")} navigation={navigation} />
      {/* <Footer /> */}
    </View>
  );
};

export default SubMenu;
