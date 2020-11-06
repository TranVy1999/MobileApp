import React, { lazy } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = lazy(() => import("./screens/HomeScreen"));
const MangaDetail = lazy(() => import("./screens/MangaDetail"));

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "",
            headerStyle: {
              height: 0,
            },
          }}
        />
        <Stack.Screen name="MangaDetail" component={MangaDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
