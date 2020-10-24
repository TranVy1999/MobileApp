import React from "react";
import { View, Dimensions, ScrollView, Image } from "react-native";
import { Carousel } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

const CarouselHome = (props) => {
  const heighPx = Dimensions.get("window").height * 0.33;
  const carouselImages = [
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/452-f491.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/458-a623.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/456-4cff.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/454-5d73.jpg",
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
          <View
            style={{
              position: "absolute",
              bottom: "-70px",
              width: "110%",
              height: "100px",
              transform: "translateX(-5%)",
              borderRadius: "50%",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: "#fff",
            }}
          ></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CarouselHome;
