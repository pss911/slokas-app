import React from "react";
import { View } from "react-native";
import Footer from "../components/Footer";
import SlokaContainer from "../containers/Sloka";

const Sloka = () => {
  return (
    <View style={{ flex: 1 }}>
      <SlokaContainer />
      <Footer />
    </View>
  );
};

export default Sloka;
