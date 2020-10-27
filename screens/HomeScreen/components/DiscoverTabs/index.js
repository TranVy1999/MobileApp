import React from "react";
import { View, ScrollView, Text, FlatList } from "react-native";
import { Carousel, WingBlank } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import Item from "./DiscoveryItem/Item";

export default class DiscoverTabs extends React.Component {
  constructor(props) {
    super(props);
    this.arr = {
      discovers: [
        {
          id: 1,
          name: "new article1",
          imaged:
            "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-light-novel-2020.jpg",
        },
        {
          id: 2,
          name: "new article2",
          imaged:
            "https://truyenvn.com/tin/wp-content/uploads/2020/10/kimetsu-no-yaiba-movie-364x205.jpg",
        },
        {
          id: 3,
          name: "new article3",
          imaged:
            "https://truyenvn.com/tin/wp-content/uploads/2020/10/toi-tro-thanh-hau-gai-cua-ba-tuoc-avatar-364x205.jpg",
        },
        {
          id: 4,
          name: "new article4",
          imaged:
            "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-truyen-yaoi-364x205.jpg",
        },
      ],
    };
  }

  state = {
    data: ["1", "2", "3", "4"],
    imgHeight: 176,
  };
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [
          "top-light-novel-2020",
          "kimetsu-no-yaiba-movie-364x205",
          "toi-tro-thanh-hau-gai-cua-ba-tuoc-avatar-364x205",
          "top-truyen-yaoi-364x205",
        ],
      });
    }, 100);
  }
  render() {
    const { discovers } = this.arr;
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={(index) => console.log("slide to", index)}
        >
          {this.state.data.map((val) => (
            <a
              key={val}
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight,
              }}
            >
              <img
                src={`https://truyenvn.com/tin/wp-content/uploads/2020/10/${val}.jpg`}
                alt=""
                style={{ width: "100%", verticalAlign: "top" }}
                onLoad={() => {
                  window.dispatchEvent(new Event("resize"));
                  this.setState({ imgHeight: "auto" });
                }}
              />
            </a>
          ))}
        </Carousel>

        <FlatList
          data={discovers}
          renderItem={({ item }) => <Item discovers={item} />}
          keyExtractor={(item) => `${item.id}`}
        />
      </WingBlank>
    );
  }
}
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
        "this is content 2 erererererereererd sdas đâsdasdasd  DẤDAdfsd sdfsd fdsf   sdfdsdsfdsdf asda sdaa adasc asda ascasd asda acvascv ấc asas ầ a",
    },
    {
      id: 3,
      name: "New article3",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/toi-tro-thanh-hau-gai-cua-ba-tuoc-avatar-364x205.jpg",
      contented: "this is content 3 asdadsadascascascacacsa  sdaad áda",
    },
    {
      id: 4,
      name: "New article4",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-truyen-yaoi-364x205.jpg",
      contented: "this is content 4 daassssssssssssssssssss s ss sssss",
    },
    {
      id: 5,
      name: "New article5",
      imaged:
        "https://truyenvn.com/tin/wp-content/uploads/2020/10/top-truyen-yaoi-364x205.jpg",
      contented: "this is content 5 bbbbb b b aasssssss c cccc bbbb",
    },
  ];

  const carouselImages = [
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/452-f491.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/458-a623.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/456-4cff.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/456-4cff.jpg",
  ];

  const RankingList = [
    {
      name: "One Piece ",
      avatar_url:
        "https://i.pinimg.com/564x/2f/27/93/2f279347b6f5cdfe48a8a15d9d456d33.jpg",
      subtitle: "content sub",
    },
    {
      name: "One Punch Man",
      avatar_url:
        "https://static.epub.vn/epubvn-image/optimized-cover-1550675314370-poster.medium-(1).jpg",
      subtitle: "content sub 2",
    },
    {
      name: "Doctor Tone",
      avatar_url:
        "https://m.media-amazon.com/images/M/MV5BZTU1ODAyN2UtZjdlOC00ODUwLWE3NjEtYjE3NmViNTAwMzMyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
      subtitle: "contensub 3",
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
            {RankingList.map((l, i) => (
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
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DiscoverTab;
