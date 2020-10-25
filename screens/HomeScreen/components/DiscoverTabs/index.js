import React from "react";
import { Tabs } from "antd-mobile";
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
