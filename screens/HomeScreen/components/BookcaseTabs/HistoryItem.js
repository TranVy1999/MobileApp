import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
export default function HistoryItem(props) {
  const { history } = props;
  const { navigation } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ContentDiscoverItem",{ data: discovers})}
    >
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
              <Avatar
                style={styles.itemImage}
                source={{ uri: history.imaged }}
              />
            </View>
            <View style={styles.itemContent}>
              <ListItem.Title style={styles.itemName}>
                {history.name}
              </ListItem.Title>
              <ListItem.Subtitle>
                <View style={styles.itemSubtitle}>
                  <Text style={styles.contented}>
                    {history.contented.length > 70
                      ? history.contented.substring(0, 70 - 3) + "..."
                      : history.contented}
                  </Text>
                </View>
              </ListItem.Subtitle>
            </View>
          </View>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
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
  contented: {
    width: `calc(${Dimensions.get("window").width}px - 162px)`,
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
