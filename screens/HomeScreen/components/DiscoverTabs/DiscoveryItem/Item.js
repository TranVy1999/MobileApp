import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import "antd-mobile/dist/antd-mobile.css";

export default function Item(props) {
  const { discovers } = props;

  return (
    <TouchableOpacity>
      <ListItem bottomDivider style={styles.containerItem}>
        <Avatar style={styles.itemImage} source={{ uri: discovers.imaged }} />
        <ListItem.Content>
          <ListItem.Title style={styles.itemName}>
            {discovers.name}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.itemSubtitle}>
            {discovers.contented}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  itemImage: {
    width: 100,
    height: 80,
    marginLeft: 0,
    margin: 10,
  },
  itemName: {
    fontWeight: "700",
    color: "#ff6347",
    marginTop: "0px",
  },
  itemSubtitle: {
    marginTop: 10,
  },
  containerItem: {
    flex: 1,
    //    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
});
