import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MangaItem = (props) => {
  console.log(props, "abc");
  return (
    <View style={styles.mangaItem}>
      <View style={styles.mangaItemContent}>{props.children}</View>
    </View>
  );
};

export default MangaItem;

const styles = StyleSheet.create({
  mangaItem: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
  mangaItemContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
