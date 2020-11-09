import React from "react";
import {
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Carousel, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import Item from "./DiscoveryItem/Item";
import Rank from "./DiscoveryItem/Rank";
import { ListItem, Avatar } from "react-native-elements";

const DiscoverTab = (props) => {
  const heighPx = Dimensions.get("window").height * 0.33;

  const discovers = [
    {
      id: 1,
      name: "New article1",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-light-novel-2020.jpg",
      contented: "this is content 1 ",
    },
    {
      id: 2,
      name: "New article2",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/kimetsu-no-yaiba-movie-364x205.jpg",
      contented:
        "thisiscontent2erererererereererdsdasâsdasdasdDẤDAdfsdsdfsddsfsdfdsdsfdsdfasdasdaadascasdaascasdasdaacvascvấcasasầa",
    },
    {
      id: 3,
      name: "New article3",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/toi-tro-thanh-hau-gai-cua-ba-tuoc-avatar-364x205.jpg",
      contented: "thisiscontentasdadsadascascascacacssdaadáda",
    },
    {
      id: 4,
      name: "New article4",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-truyen-yaoi-364x205.jpg",
      contented: "thisiscontent4daasssssssssssssssssssssssssss",
    },
    {
      id: 5,
      name: "New article5",
      imaged:
        "http://cn.e.pic.mangatoon.mobi/cartoon-posters/18164baf.jpg",
      contented: "thisscontentbbbbbbbassssssscccccbbbb",
    },
  ];

  const carouselImages = [
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/466-0793.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/458-a623.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/465-b76f.jpg",
    "https://riki.edu.vn/wp-content/uploads/2020/04/one-piece-01-1024x717.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/470-dee7.jpg",
  ];

  const rankingList = [
    {
      name: "One Piece ",
      avatar_url:
        "https://i.pinimg.com/564x/2f/27/93/2f279347b6f5cdfe48a8a15d9d456d33.jpg",
      subtitle: "content sub",
      view : 1233,
    },
    {
      name: "One Punch Man",
      avatar_url:
        "https://static.epub.vn/epubvn-image/optimized-cover-1550675314370-poster.medium-(1).jpg",
      subtitle: "content sub 2",
      view : 1500,
    },
    {
      name: "Doctor Tone",
      avatar_url:
        "http://animehay.tv/uploads/images/2019/07/dr-stone-thumbnail.jpg",
      subtitle: "contensub 3",
      view : 1001,
    },
    {
      name: "Jujutsu Kaisen",
      avatar_url:
        "http://animehay.tv/uploads/images/2020/09/jujutsu-kaisen-tv-thumbnail.jpg",
      subtitle: "contensub 4",
      view : 500,
    },
  ];
  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: "100%",
        backgroundColor: "#fff",
      }}
    >
      <ScrollView>
        <View
          style={{
            position: "relative",
            overflow: "hidden",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            infinite
            dotActiveStyle={{
              background: "#ff5454",
            }}
          >
            {carouselImages?.map((it, idx) => (
              <View key={idx}>
                <Image
                  style={{ width: "100%", height: heighPx }}
                  source={{ uri: it }}
                />
              </View>
            ))}
          </Carousel>

          <FlatList
            data={discovers}
            renderItem={({ item }) => <Item discovers={item} />}
            keyExtractor={(item) => `${item.id}`}
          />

          <View>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 24,
                marginLeft: 10,
              }}
            >
              Bảng xếp Hạng
            </Text>
          </View>
          <View>
            {/* {rankingList.map((l, i) => (
              <TouchableOpacity>
                <ListItem key={i} bottomDivider>
                  <Avatar source={{ uri: l.avatar_url }} />
                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Chevron />
                </ListItem>
              </TouchableOpacity>
            ))} */}
            
           <FlatList
            data={rankingList}
            renderItem={({ item}) => <Rank rank={item} />}
            keyExtractor={(item) => `${item.name}`}
          />

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverTab;
