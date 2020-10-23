import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import HomeScreen from "./screens/HomeScreen";

const getFonts = () =>
  Font.loadAsync({
    "nutito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nutito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
  });

const App = () => {
  const [fontLoader, setFontLoaded] = useState(false);

  if (fontLoader) {
    return <HomeScreen />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontLoaded(true)} />
    );
  }
};

export default App;
