import React from "react";
import {
  View,
  Text,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";

import { ListItem, Avatar, Badge } from "react-native-elements";

const MeTab = (props) => {
  const { navigation } = props;

  const Information = {
    name_account: "Viet Nguyen",
    pass: "123123",
    avatar_url:
      "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
    subtitle: "content sub",
    email: "me1236666@gmail.com",
  };

  const name = Information.name_account;
  const avataicon = Information.avatar_url;
  return (
    <View style={styles.container}>
      <View style={styles.containerInfor}>
        <View style={styles.content}>
          <Avatar
            size="medium"
            rounded // làm tròn
            source={{
              uri: avataicon,
            }}
          />
          <Text style={styles.itemName}>{name}</Text>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notification")}
            >
              <Avatar
                source={{
                  uri:
                    "https://www.flaticon.com/svg/static/icons/svg/709/709846.svg",
                }}
                size="small"
              />
              <Badge
                value="9+"
                status="success"
                containerStyle={{ position: "absolute", top: -4, right: -4 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.row}>
          <View style={styles.imageScroll}>
            <View style={{ textAlign: "center", marginTop: "20%" }}>
              <Avatar
                rounded
                source={{
                  uri:
                    "https://www.flaticon.com/svg/static/icons/svg/2933/2933116.svg",
                }}
              />
            </View>
            <View style={{ marginTop: "25%" }}>
              <Text style={{ textAlign: "center", fontWeight: "700" }}>
                Số Xu: 0
              </Text>
            </View>
          </View>
          <View style={styles.imageScroll}>
            <View style={{ textAlign: "center", marginTop: "20%" }}>
              <Avatar
                rounded
                source={{
                  uri:
                    "https://www.flaticon.com/svg/static/icons/svg/3190/3190503.svg",
                }}
              />
            </View>
            <View style={{ marginTop: "25%" }}>
              <Text style={{ textAlign: "center", fontWeight: "700" }}>
                Số điểm: 0
              </Text>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("UpdateInformation")}
        >
          <ListItem key={1} bottomDivider>
            <Avatar
              source={{
                uri:
                  "https://www.flaticon.com/svg/static/icons/svg/3039/3039437.svg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>Cập nhật thông tin</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity>
          <ListItem key={2} bottomDivider>
            <Avatar
              source={{
                uri:
                  "https://www.flaticon.com/svg/static/icons/svg/845/845665.svg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>Nạp tiền</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Language")}>
          <ListItem key={3} bottomDivider>
            <Avatar
              source={{
                uri:
                  "https://www.flaticon.com/svg/static/icons/svg/888/888878.svg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>Ngôn ngữ</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>

        <ListItem key={4} bottomDivider>
          <Avatar
            source={{
              uri:
                "https://www.flaticon.com/svg/static/icons/svg/1000/1000914.svg",
            }}
          />
          <ListItem.Content>
            <ListItem.Title>Phiên bản </ListItem.Title>
            <ListItem.Subtitle>1.0</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>

        <TouchableOpacity>
          <ListItem key={5} bottomDivider>
            <Avatar
              source={{
                uri:
                  "https://www.flaticon.com/svg/static/icons/svg/892/892339.svg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>Giới thiệu</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        </TouchableOpacity>
      </View>
      <View style={styles.stylebtn}>
        <Button
          title="Đăng nhập"
          color="#ed0707"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: "100%",
    backgroundColor: "#FFF",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  stylebtn: {
    marginTop: 200,
    marginEnd: 10,
    backgroundColor: "#FFF",
  },

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
    width: Dimensions.get("window").width - 20,
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
  imageScroll: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    textAlign: "center",
    width: 150,
    height: 100,
    borderRadius: 10,
    backgroundColor: "#E3E9DE",
  },
});

export default MeTab;
