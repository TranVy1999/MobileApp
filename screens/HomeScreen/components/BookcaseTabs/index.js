import React from "react";
import { Tabs } from "antd-mobile";
import { View, ScrollView, Text, FlatList } from "react-native";
import LovelyItem from "./LovelyItem";
import HistoryItem from "./HistoryItem";

const BookcaseTabs = (props) => {
  const { navigation } = props;

  const tabs = [
    { title: "Yêu thích", sub: "1" },
    { title: "Lich sử", sub: "2" },
  ];

  const lovely = [
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


  const history = [
    {
     
      id: 1,
      name: "Connan",
      imaged:
        "https://animehay.tv/uploads/images/2016/03/tham-tu-lung-danh-conan-439-thumbnail.jpg",
      contented:
        "Shinichi trong phần đầu của Thám tử lừng danh Conan được miêu tả là một thám tử học đường. Trong một lần đi chơi công viên _Miền Nhiệt đới_ với cô bạn từ thuở nhỏ (cũng là bạn gái) Ran Mori (Rachel Moore), cậu bị dính vào vụ án một hành khách trên Chuyến tàu tốc hành trong công viên, Kishida (Kenneth), bị giết trong một vụ án cắt đầu rùng rợn.",
    },
    {
      id: 2,
      name: "Pokemon",
      imaged:
        "https://animehay.tv/uploads/images/2016/09/pokemon-tong-hop-thumbnail.jpg",
      contented:
        "Phim xoay quanh cuộc phiêu lưu của nhân vật Satoshi, đi thu phục những pokemon đồng hành và mục tiêu trở thành nhà huấn luyện Pokemon tài ba. Hãy cùng theo dõi cuộc hành trình dầy chông gai của anh chàng này nhé.",
    },
    {
      id: 3,
      name: " Attack On Titan",
      imaged:
        "https://animehay.tv/uploads/images/2020/07/hingeki-no-kyojin-chronicle-thumbnail.jpg",
      contented:
        "Cuộc chiến của con người chống lại các Titan khổng lồ để giành giật mạng sống của mình. Vài trăm năm trước, con người bắt đầu bị tấn công bởi những người Khổng lồ, một sinh vật ăn thịt người. Đáng ngại thay, chúng ăn con người như một thú vui hơn là nhu cầu ăn uống. Diện tích sống của con người ngày càng thu hẹp dần, họ đành phải xây những bước tường cao đến 60m để ngăn người Khổng lồ cao nhất lúc đó là 15m. ",
    },
   
  ];

  return (
    <View style={{ height: "100%" }}>
      <Tabs
        tabs={tabs}
        initialPage={"1"}
        tabBarPosition="top"
        animated={false}
        swipeable={false}
        useOnPan={false}
        tabBarActiveTextColor="#ff5454"
        tabBarUnderlineStyle={{
          borderWidth: "1px",
          borderColor: "#FF5454",
        }}
        tabBarTextStyle={{
          fontSize: "15px",
          fontWeight: "bold",
        }}
      >
        <View style={{ height: "100%" }}>
          <FlatList
            data={lovely}
            renderItem={({ item }) => (
              <LovelyItem lovely={item} navigation={navigation} />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        </View>
        <View style={{ height: "100%" }}>
           <FlatList
            data={history}
            renderItem={({ item }) => (
              <HistoryItem history={item} navigation={navigation} />
            )}
            keyExtractor={(item) => `${item.id}`}
          /> 
        </View>

      </Tabs>
    </View>
  );
};

export default BookcaseTabs;
