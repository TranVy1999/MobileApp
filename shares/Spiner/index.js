import React, { useEffect, useRef } from "react";
import { StyleSheet, View, Animated, Dimensions } from "react-native";

const Spinner = () => {
  const animation = new Animated.Value(0);
  const animateRef = useRef(animation);

  const rotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(animateRef.current, {
        toValue: 1,
        duration: 800,
      })
    ).start();
  }, []);

  return (
    <View style={styles.spinner}>
      <Animated.View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 5,
          width: 60,
          height: 60,
          display: "block",
          transform: [{ rotate: rotation }],
          border: "5px solid #eeee",
          borderRadius: "50%",
          borderTop: "5px solid #ff5454",
        }}
      >
        <Animated.View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
            width: "100%",
            height: "100%",
            display: "block",
            transform: [{ rotate: rotation }],
            border: "5px solid #eeee",
            borderRadius: "50%",
            borderBottom: "5px solid #ff5454",
          }}
        ></Animated.View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    zIndex: "1000",
    maxWidth: Dimensions.get("window").width,
    minHeight: `calc(${Dimensions.get("window").height}px - 50px)`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    background: "#000",
  },
});

export default Spinner;
