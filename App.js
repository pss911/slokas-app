import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { loadAsync } from "expo-font";
import AppLoading from "expo-app-loading";

import Footer from "./components/Footer";
import Header from "./components/Header";
import SlokaCard from "./components/SlokaCard";

const getFonts = () =>
  loadAsync({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <SafeAreaView>
        {/* <SlokaCard /> */}
        <Footer />
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => setFontsLoaded(false)}
      />
    );
  }
}

const styles = StyleSheet.create({});
