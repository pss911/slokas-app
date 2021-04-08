import React from "react";
import { View, ScrollView, StyleSheet, SafeAreaView } from "react-native";

import Footer from "../components/Footer";
import SlokaCards from "../containers/SlokaCards";

const Menu = () => {
  return (
    <View style={{ flex: 1 }}>
      <SlokaCards />
      <Footer />
    </View>
  );
};

export default Menu;
