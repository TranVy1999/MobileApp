import React from "react";
import { Tabs } from "antd-mobile";
import { View, ScrollView, Text } from "react-native";
import MangaItem from "../../../../shares/MangaItem";
import mangas from "../../../../manga";

const TypesTabs = (props) => {
  const { navigation } = props;

  const tabs = [
    { title: "Truyện tranh", sub: "1" },
    { title: "Truyện Chat", sub: "2" },
  ];

  const filterMangas = (tabName) => {
    return mangas.filter((manga) => {
      return manga?.categories?.includes(tabName);
    });
  };

  const tabList = [
    { title: "HOT NHẤT", sub: "1", children: filterMangas("HOT NHẤT") },
    { title: "MỚI NHẤT", sub: "2", children: filterMangas("MỚI NHẤT") },
    { title: "HÀNH ĐỘNG", sub: "3", children: filterMangas("HÀNH ĐỘNG") },
    { title: "ĐÃ FULL", sub: "4", children: filterMangas("ĐÃ FULL") },
    { title: "KINH DỊ", sub: "5", children: filterMangas("KINH DỊ") },
    { title: "TÌNH YÊU", sub: "6", children: filterMangas("TÌNH YÊU") },
    { title: "MẠO HIỂM", sub: "7", children: filterMangas("MẠO HIỂM") },
    { title: "TRƯỜNG HỌC", sub: "8", children: filterMangas("TRƯỜNG HỌC") },
    { title: "HÀI HƯỚC", sub: "9", children: filterMangas("HÀI HƯỚC") },
    { title: "XUYÊN KHÔNG", sub: "10", children: filterMangas("XUYÊN KHÔNG") },
    { title: "VIỄN TƯỞNG", sub: "11", children: filterMangas("VIỄN TƯỞNG") },
    {
      title: "SIÊU NĂNG LỰC",
      sub: "12",
      children: filterMangas("SIÊU NĂNG LỰC"),
    },
    {
      title: "ĐANG CẬP NHẬT",
      sub: "13",
      children: filterMangas("ĐANG CẬP NHẬT"),
    },
  ];

  const renderContent = (tab, index) => {
    const style = {
      justifyContent: "center",
      alignItems: "center",
    };
    const content = (
      <View key={`${index}${tab}`} style={style}>
        {tab?.children.map((it, idx) => (
          <MangaItem manga={it} key={idx} navigation={navigation} />
        ))}
      </View>
    );
    return content;
  };

  const InnerTab = (props) => {
    const { tabList } = props;
    return (
      <View style={{ height: "100%" }}>
        <Tabs
          tabs={tabList}
          initialPage={0}
          tabBarPosition="top"
          animated={true}
          tabBarActiveTextColor="#ff5454"
          tabBarUnderlineStyle={{
            borderWidth: "1px",
            borderColor: "#FF5454",
          }}
          tabBarTextStyle={{
            fontSize: "10px",
            fontWeight: "bold",
          }}
          renderTabBar={(props) => <Tabs.DefaultTabBar {...props} page={4} />}
        >
          {renderContent}
        </Tabs>
      </View>
    );
  };

  return (
    <View style={{ height: "100%" }}>
      <Tabs
        tabs={tabs}
        initialPage={"1"}
        tabBarPosition="top"
        animated={false}
        tabBarActiveTextColor="#ff5454"
        swipeable={false}
        useOnPan={false}
        tabBarUnderlineStyle={{
          borderWidth: "1px",
          borderColor: "#FF5454",
        }}
      >
        <InnerTab tabList={tabList} />
        <InnerTab tabList={tabList} />
      </Tabs>
    </View>
  );
};

export default TypesTabs;
