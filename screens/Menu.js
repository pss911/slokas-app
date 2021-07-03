import React from "react";
import { View, Button } from "react-native";

import Footer from "../components/Footer";
import SlokaCards from "../containers/SlokaCards";

const Menu = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SlokaCards navigation={navigation} />
      <Footer />
      <Button
        title="go to Sub Sloka Cards"
        onPress={() => navigation.navigate("SubMenu")}
      />
    </View>
  );
};

export default Menu;
