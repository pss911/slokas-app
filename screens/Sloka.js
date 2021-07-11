import React from "react";
import { View } from "react-native";
import Footer from "../components/Footer";
import SlokaContainer from "../containers/Sloka";

const Sloka = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <SlokaContainer id={navigation.getParam("id")} />
      {/* <Footer /> */}
    </View>
  );
};

export default Sloka;
