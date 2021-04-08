import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import { loadAsync } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/menuStack";

const getFonts = () =>
  loadAsync({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Telugu1: require("./assets/fonts/NTR-Regular.ttf"),
    Telugu2: require("./assets/fonts/Mallanna-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
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
