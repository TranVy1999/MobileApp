import React from "react";
import { TouchableOpacity } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

export default function Rank(props) {
  const { rank } = props;
  const { navigation } = props;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("MangaDetail")}>
      <ListItem bottomDivider>
        <Avatar source={{ uri: rank.avatar_url }} />
        <ListItem.Content>
          <ListItem.Title>{rank.name}</ListItem.Title>
          <ListItem.Subtitle>{rank.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
}
