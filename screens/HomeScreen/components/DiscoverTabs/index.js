import React , {useEffect }from "react";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../../../../store/news/news.meta';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import { Carousel } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
import Item from "./DiscoveryItem/Item";
import Rank from "./DiscoveryItem/Rank";

const DiscoverTab = (props) => {
  const { navigation } = props;
  const heighPx = Dimensions.get("window").height * 0.33;


	const dispatch = useDispatch();
//2
	const fetchNews = () => {
		dispatch(actionCreators.actFetchNews());
	};
		//11
	const news = useSelector((store) => store.news?.news);
	console.log(news);
//1
	useEffect(() => fetchNews(), []);


  const discovers = [
    {
      id: 1,
      name: "Naruto",
      imaged:
        "https://animehay.tv/uploads/images/2016/02/naruto-phan-2-300-thumbnail.jpg",
      contented:
        "Naruto chính là cậu bé đã may mắn sống xót trong một trận phong ba bão táp, tất cả mọi thứ đã ra đi chỉ còn duy nhất một mình cậu với cuộc phưu lưu đầy mạo hiểm, những cơn lốc xoáy và gió cát đã khiến cho biết bao nhiêu người bỏ mạng tại khu làng Lá, may mắn thay cậu đã được sư phụ của mình chính là người đã có nhiều quyền năng tối cao giúp đỡ, ai ai nghe sư phụ Jiraiya củng đều cảm thấy dường như Naruto thật mang mắn",
    },
    {
      id: 2,
      name: "Connan",
      imaged:
        "https://animehay.tv/uploads/images/2016/03/tham-tu-lung-danh-conan-439-thumbnail.jpg",
      contented:
        "Shinichi trong phần đầu của Thám tử lừng danh Conan được miêu tả là một thám tử học đường. Trong một lần đi chơi công viên _Miền Nhiệt đới_ với cô bạn từ thuở nhỏ (cũng là bạn gái) Ran Mori (Rachel Moore), cậu bị dính vào vụ án một hành khách trên Chuyến tàu tốc hành trong công viên, Kishida (Kenneth), bị giết trong một vụ án cắt đầu rùng rợn.",
    },
    {
      id: 3,
      name: "Pokemon",
      imaged:
        "https://animehay.tv/uploads/images/2016/09/pokemon-tong-hop-thumbnail.jpg",
      contented:
        "Phim xoay quanh cuộc phiêu lưu của nhân vật Satoshi, đi thu phục những pokemon đồng hành và mục tiêu trở thành nhà huấn luyện Pokemon tài ba. Hãy cùng theo dõi cuộc hành trình dầy chông gai của anh chàng này nhé.",
    },
    {
      id: 4,
      name: "Vũ động càn khôn",
      imaged:
        "https://animehay.tv/uploads/images/2020/07/vu-dong-can-khon-thumbnail.png",
      contented:
        "Một đường tu luyện, trộm âm dương, đoạt vận may, chuyển thế niết bàn, nắm giữ sinh tử, chấp chưởng luân hồi. Vũ Chi Cực, Phá thương khung, động càn khôn! Một thế giới tiên hiệp mênh mông thần bí vô tận, nhiệt huyết như núi lửa sôi trào, cảm xúc mạnh mẽ như sóng biển gầm rú, dục vọng sâu thẳm như vực sâu hun hút",
    },
    {
      id: 5,
      name: " Attack On Titan",
      imaged:
        "https://animehay.tv/uploads/images/2020/07/hingeki-no-kyojin-chronicle-thumbnail.jpg",
      contented:
        "Cuộc chiến của con người chống lại các Titan khổng lồ để giành giật mạng sống của mình. Vài trăm năm trước, con người bắt đầu bị tấn công bởi những người Khổng lồ, một sinh vật ăn thịt người. Đáng ngại thay, chúng ăn con người như một thú vui hơn là nhu cầu ăn uống. Diện tích sống của con người ngày càng thu hẹp dần, họ đành phải xây những bước tường cao đến 60m để ngăn người Khổng lồ cao nhất lúc đó là 15m. ",
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
        "https://themepack.me/i/c/749x468/media/g/199/one-piece-theme-bh18.jpg",
      subtitle: "content sub",
      view: 1233,
    },
    {
      name: "One Punch Man",
      avatar_url:
        "https://static.epub.vn/epubvn-image/optimized-cover-1550675314370-poster.medium-(1).jpg",
      subtitle: "content sub 2",
      view: 1500,
    },
    {
      name: "Doctor Tone",
      avatar_url:
        "http://animehay.tv/uploads/images/2019/07/dr-stone-thumbnail.jpg",
      subtitle: "contensub 3",
      view: 1001,
    },
    {
      name: "Jujutsu Kaisen",
      avatar_url:
        "http://animehay.tv/uploads/images/2020/09/jujutsu-kaisen-tv-thumbnail.jpg",
      subtitle: "contensub 4",
      view: 500,
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
          <Text style={styles.title}> TIN MANGA </Text>
          <FlatList
            data={discovers}
            renderItem={({ item }) => (
              <Item discovers={item} navigation={navigation} />
            )}
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
            <FlatList
              data={rankingList}
              renderItem={({ item }) => (
                <Rank rank={item} navigation={navigation} />
              )}
              keyExtractor={(item) => `${item.name}`}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "800",
    color: "#0000ff",
    margin: 18,
    fontSize: 25,
  },
});

export default DiscoverTab;
