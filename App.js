import React, { useState } from "react";
import { loadAsync } from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/NavigationStack";

const getFonts = () =>
  loadAsync({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    Telugu1: require("./assets/fonts/NTR-Regular.ttf"),
    Telugu2: require("./assets/fonts/Mandali-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return fontsLoaded ? (
    <Navigator />
  ) : (
    <AppLoading
      startAsync={getFonts}
      onFinish={() => setFontsLoaded(true)}
      onError={() => setFontsLoaded(false)}
    />
  );
}
