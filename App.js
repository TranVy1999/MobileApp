import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Navigation from './routes/drawer';
import Home from './screens/Home'

const getFonts = () => Font.loadAsync({
    'nutito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nutito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
  })

export default function App() {
  const [fontLoader, setFontLoaded] = useState(false);

    if(fontLoader){
      return (
          <Home />
        );
      }else{
        return(
          <AppLoading 
            startAsync={getFonts} 
            onFinish={ () => setFontLoaded(true)}
          />
        )
      }
  }