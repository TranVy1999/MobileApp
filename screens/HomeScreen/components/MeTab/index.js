import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import "antd-mobile/dist/antd-mobile.css";
import { ListItem, Avatar ,Badge} from "react-native-elements";

const MeTab = (props) => {


  const listMetab = [
    {
      title: 'Cập nhật thông tin',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/3039/3039437.svg'
    },
    {
      title: 'Lịch sử',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/3602/3602274.svg'
    },
    {
      title: 'Ngôn ngữ',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/888/888878.svg'
    },
    {
      title: 'Phiên Bản',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/1000/1000914.svg'
    },
    {
      title: 'Giới thiệu',
      icon: 'https://www.flaticon.com/svg/static/icons/svg/892/892339.svg'
    },

  ]

  const Information = 
    {
      name_account: "Viet Nguyen",
      pass: "123123",
      avatar_url:
        "https://thuthuatnhanh.com/wp-content/uploads/2018/07/anh-dai-dien-dep.jpg",
      subtitle: "content sub",
      email: "me1236666@gmail.com",
    };

  const name= Information.name_account;
  const avataicon = Information.avatar_url;
  return (
    <View>
          <View
            style={styles.containerInfor}>
                <View  style={styles.content}>          
                    <Avatar
                    size="medium"
                    rounded // làm tròn
                    source={{
                      uri:
                        avataicon,
                    }}/>
                    <Text style ={styles.itemName}>{name}</Text>
                      <View >
                        <TouchableOpacity>
                          <Avatar           
                            source={{
                              uri: 'https://www.flaticon.com/svg/static/icons/svg/709/709846.svg',
                            }}
                            size="small"/>
                          <Badge value="9+" status="success" 
                                containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
                        </TouchableOpacity>
                    </View>
                </View>
                  
          </View>
          <View>
              {listMetab.map((item, index) => (
                  <TouchableOpacity>
                    <ListItem key={index} bottomDivider>
                      <Avatar source={{ uri: item.icon }} />
                      <ListItem.Content>
                        <ListItem.Title>{item.title}</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  </TouchableOpacity>
                ))}
          </View>
    </View>
          
  );
}

const styles = StyleSheet.create({
 content:{ display: "flex",
           flexDirection: "row",
           justifyContent: 'space-between',
           width: "90%",
           margin:10 },
  itemName: {
    fontWeight: "700",
    color: "#ff6347",
    margin: 18
  },
  containerInfor:{
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
  }
 
});

export default MeTab;