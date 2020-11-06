import React, { useState, Suspense } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import configureStore from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Spinner from "./shares/Spiner";
import Router from "./router.js";

const getFonts = () =>
  Font.loadAsync({
    "nutito-regular": require("./assets/fonts/NunitoSans-Regular.ttf"),
    "nutito-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
  });

const App = () => {
  const { store, persistor } = configureStore();

  const [fontLoader, setFontLoaded] = useState(false);

  if (fontLoader) {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<Spinner />}>
            <Router />
          </Suspense>
        </PersistGate>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense fallback={<Spinner />}>
            <AppLoading
              startAsync={getFonts}
              onFinish={() => setFontLoaded(true)}
            />
          </Suspense>
        </PersistGate>
      </Provider>
    );
  }
};

export default App;
