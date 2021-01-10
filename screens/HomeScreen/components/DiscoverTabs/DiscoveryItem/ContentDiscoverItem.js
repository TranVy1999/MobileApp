import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { Image, Tile } from "react-native-elements";

const ContentDiscoverItem = (props) => {
  const { data } = props.route.params;
  return (
    <View>
      <Text style={styles.itemName}>TIN MANGAR</Text>
      <View>
        <Tile
          imageSrc={{ uri: data.imaged }}
          title={data.name}
          contentContainerStyle={{ height: 70 }}
        ></Tile>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ margin: 5, backgroundColor: "#ffc038" }}>
          {" "}
          element defines text with strong importance. The content inside is
          typically displayed in bold.
        </Text>
        <Text style={{ margin: 5, backgroundColor: "#ffc038" }}>
          {" "}
          element defines text with strong importance. The content inside is
          typically displayed in bold.{" "}
        </Text>
      </View>

      <View style={{ backgroundColor: "#ffff" }}>
        <View style={styles.textcontent}>
          <Text style={{ fontSize: 20 }}>
          {data.contented}
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <Image
            style={styles.imageScroll}
            source={{
              uri:
                "https://truyenvn.com/tin/wp-content/uploads/2020/10/truyen-one-piece-1-758x379.jpg",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            style={styles.imageScroll}
            source={{
              uri:
                "https://animehay.tv/uploads/images/2016/09/pokemon-tong-hop-thumbnail.jpg",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            style={styles.imageScroll}
            source={{
              uri:
                "https://animehay.tv/uploads/images/2020/07/vu-dong-can-khon-thumbnail.png",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            style={styles.imageScroll}
            source={{
              uri:
                "https://animehay.tv/uploads/images/2018/06/dragon-ball-heroes-thumbnail.jpg",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
          <Image
            style={styles.imageScroll}
            source={{
              uri:
                "https://truyenvn.com/tin/wp-content/uploads/2020/10/truyen-one-piece-1-758x379.jpg",
            }}
            PlaceholderContent={<ActivityIndicator />}
          />
        </ScrollView>

        <View style={styles.textcontent}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageScroll: {
    width: 120,
    height: 200,
    marginLeft: 10,
    borderRadius: 1,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  itemName: {
    fontWeight: "700",
    color: "#ffc038",
    margin: 18,
  },
  textcontent: {
    margin: 15,
    color: "#0000",
  },
});

export default ContentDiscoverItem;
