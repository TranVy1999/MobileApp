import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
 
} from "react-native";
import { ListItem, Avatar ,Badge } from "react-native-elements";

const Notification = (props) => {

//   const {navigation} = props
  const listThongBao = [
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


  return (
    <View style={styles.background}>
        
          <View>
            
                <TouchableOpacity>
                    <ListItem key={1} bottomDivider>
                      <Avatar source={{ uri: 'https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg' }} />
                      <ListItem.Content>
                        <ListItem.Title>aaaaaaaaaa</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <ListItem key={2} bottomDivider>
                      <Avatar source={{ uri: 'https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg' }} />
                      <ListItem.Content>
                        <ListItem.Title>bbbbbbbbbb</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <ListItem key={3} bottomDivider>
                      <Avatar source={{ uri: 'https://www.flaticon.com/svg/static/icons/svg/2190/2190552.svg' }} />
                      <ListItem.Content>
                        <ListItem.Title>vvvvvvvvvvv</ListItem.Title>
                      </ListItem.Content>
                      <ListItem.Chevron />
                    </ListItem>
                  </TouchableOpacity>
                 
          </View>
          <View>
          </View>
    </View>
          
  );
}

const styles = StyleSheet.create({
 content:{ display: "flex",
           flexDirection: "row",
           justifyContent: 'center',
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
  },
  background: {
    backgroundColor: "#ffffff",
    height: '100%'
    
}
});

export default Notification;