import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Button,
  FlatList,
} from "react-native";
import { ListItem, Avatar, Badge } from "react-native-elements";
import Manga from "../../assets/manga";

const keyExtractor = (item, index) => index.toString();

const renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <ListItem.Content>
      <ListItem.Title>
        <img src={item.img} style={{ width: "382px" }}></img>
      </ListItem.Title>
    </ListItem.Content>
  </ListItem>
);
const ContentManga = (props) => {
  // const { navigation } = props;
  const { chapter } = props.route.params;
  const { imgs } = chapter[0];
  return (
    <View>
      <FlatList
        keyExtractor={keyExtractor}
        data={imgs}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    margin: 10,
  },
  itemName: {
    fontWeight: "700",
    color: "#ff6347",
    margin: 18,
  },
  containerInfor: {
    width: Dimensions.get("window").width,
    overflow: "hidden",
    margin: 10,
    marginBottom: 5,
    borderRadius: 4,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  loginBtn: {
    width: "90%",
  },
});

export default ContentManga;
