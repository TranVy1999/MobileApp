import React from "react";
import { View, Dimensions, ScrollView, Image, StyleSheet } from "react-native";
import { Carousel, Grid } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import { faBold } from "@fortawesome/free-solid-svg-icons";

const CarouselHome = (props) => {
  const heighPx = Dimensions.get("window").height * 0.33;
  const state = {}
  const carouselImages = [
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/452-f491.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/458-a623.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/456-4cff.jpg",
    "http://cn.e.pic.mangatoon.mobi/homepage-banners/454-5d73.jpg",
  ];
  const data1 = [
    {
      key: '1',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg",
      title : "Tổng Tài Tại Thượng",
    },
    {
      key : '2',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/1677952a88.jpg",
      title : "Sủng Thê Thành Nghiện: Bảo Bối Của Lục Thiếu",
    },
    {
      key : '3',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/1732df55.jpg-posterup4",
      title : "Tiểu Thư Đỏng Đảnh",
    },
    {
      key: '4',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/782a303.jpg",
      title : "Thiếu Soái Vợ Ngài Lại Trốn Rồi",
    }
    
  ];

  const data2 = [
    {
      key: '1',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/7859c5a.jpg",
      title : "Tổng Tài Tại Thượng",
    },
    {
      key : '2',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/1677952a88.jpg",
      title : "Sủng Thê Thành Nghiện: Bảo Bối Của Lục Thiếu",
    },
    {
      key : '3',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/1732df55.jpg-posterup4",
      title : "Tiểu Thư Đỏng Đảnh",
    },
    {
      key: '4',
      img : "http://cn.e.pic.mangatoon.mobi/cartoon-posters/782a303.jpg",
      title : "Thiếu Soái Vợ Ngài Lại Trốn Rồi",
    }
    
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
            dots={false}
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
        <View className="sub-title" style={styles.contentGird}>Mới cập nhật!</View>
          <Grid data={data1}
            carouselMaxRow={1}
            columnNum={2}
            isCarousel
            hasLine={false}
            renderItem={dataItem => (
              <View key={dataItem.key} style={{ height: "200px", paddingLeft: '10px', paddingRight: '-10px' }}>
                <img src={dataItem.img} style={{ width: '175px', height: '150px' }} alt="" />
                <View style={{ color: '#888', fontSize: '14px', marginTop: '12px', textAlign: 'initial' }}>
                  <span>{dataItem.title}</span>
                </View>
              </View>
                )}
          />

        <View className="sub-title" style={styles.contentGird}>Đề Xuất!</View>
          <Grid data={data2}
            carouselMaxRow={2}
            columnNum={2}
            // isCarousel
            hasLine={false}
            renderItem={dataItem => (
              <View key={dataItem.key} style={{ height: "200px", paddingLeft: '10px', paddingRight: '-10px' }}>
                <img src={dataItem.img} style={{ width: '175px', height: '150px' }} alt="" />
                <View style={{ color: '#888', fontSize: '14px', marginTop: '12px', textAlign: 'initial' }}>
                  <span>{dataItem.title}</span>
                </View>
              </View>
                )}
          />  
        <View className="sub-title" style={styles.contentGird}>Truyện Mới!</View>
          <Grid data={data1}
            carouselMaxRow={1}
            columnNum={2}
            isCarousel
            hasLine={false}
            renderItem={dataItem => (
              <View key={dataItem.key} style={{ height: "200px", paddingLeft: '10px', paddingRight: '-10px' }}>
                <img src={dataItem.img} style={{ width: '175px', height: '150px' }} alt="" />
                <View style={{ color: '#888', fontSize: '14px', marginTop: '12px', textAlign: 'initial' }}>
                  <span>{dataItem.title}</span>
                </View>
              </View>
                )}
          />

          <View className="sub-title" style={styles.contentGird}>Viễn Tưởng</View>
          <Grid data={data2}
            carouselMaxRow={2}
            columnNum={2} 
            hasLine={false}
            renderItem={dataItem => (
              <View key={dataItem.key} >
                <img src={dataItem.img} style={{width: '200px', height: '150px'}} alt=""/>
                <View style={{ color: '#888', fontSize: '14px', marginTop: '12px', textAlign: 'initial' }}>
                  <span>{dataItem.title}</span>
                </View>
              </View>
                )}
          />  
      </ScrollView>

    </View>
  );
};
const styles = StyleSheet.create({
  contentGird: {
    marginTop: '20px',
    marginLeft: '15px',
    fontWeight: "bold", 
    height: "30px"
  }
})
export default CarouselHome;
