import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import "antd-mobile/dist/antd-mobile.css";

const MangaItem = (props) => {
  const { manga } = props;

  return (
    <TouchableOpacity onPress={() => props?.navigation.navigate("MangaDetail")}>
      <ListItem bottomDivider style={styles.containerItem}>
        <ListItem.Content>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View>
              <Avatar style={styles.itemImage} source={{ uri: manga.image }} />
            </View>
            <View style={styles.itemContent}>
              <ListItem.Title style={styles.itemName}>
                {manga?.name}
              </ListItem.Title>
              <ListItem.Subtitle>
                <View style={styles.itemSubtitle}>
                  <Text style={styles.itemDescription}>
                    {manga?.description.length > 110
                      ? manga?.description.substring(0, 110 - 3) + "..."
                      : manga?.description}
                  </Text>
                </View>
              </ListItem.Subtitle>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
};

export default MangaItem;

const styles = StyleSheet.create({
  itemImage: {
    width: 100,
    height: 100,
  },
  itemName: {
    fontWeight: "700",
    color: "#ff6347",
  },
  itemSubtitle: {
    padding: 10,
    paddingLeft: 0,
  },
  itemDescription: {
    width: `calc(${Dimensions.get("window").width}px - 162px)`,
    color: "#111",
  },
  itemContent: {
    width: `calc(${Dimensions.get("window").width}px - 162px)`,
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerItem: {
    width: `calc(${Dimensions.get("window").width}px - 20px)`,
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
});
