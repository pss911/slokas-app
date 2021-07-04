import React from "react";
import { View, Button } from "react-native";

import Footer from "../components/Footer";
import SubSlokaCards from "../containers/SubSlokaCards";

const SubMenu = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SubSlokaCards id={navigation.getParam("id")} navigation={navigation} />
      <Footer />
      <Button
        title="go to Sub Sloka Cards"
        onPress={() => navigation.navigate("Sloka")}
      />
    </View>
  );
};

export default SubMenu;
