import React from "react";
import { Tabs } from "antd-mobile";
import { View, ScrollView, Text } from "react-native";
import "antd-mobile/dist/antd-mobile.css";

const TypesTabs = (props) => {
  const tabs = [
    { title: "Truyện tranh", sub: "1" },
    { title: "Truyện Chat", sub: "2" },
  ];

  const tabList = [
    { title: "HOT NHẤT", sub: "1", children: "ABC" },
    { title: "MỚI NHẤT", sub: "2", children: "ABC" },
    { title: "HÀNH ĐỘNG", sub: "3", children: "ABC" },
    { title: "ĐÃ FULL", sub: "4", children: <span>ABCDXYZ</span> },
    { title: "KINH DỊ", sub: "5", children: "ABC" },
    { title: "TÌNH YÊU", sub: "6", children: "ABC" },
    { title: "MẠO HIỂM", sub: "7", children: "ABC" },
    { title: "TRƯỜNG HỌC", sub: "8", children: "ABC" },
    { title: "HÀI HƯỚC", sub: "9", children: "ABC" },
    { title: "XUYÊN KHÔNG", sub: "10", children: "ABC" },
    { title: "VIỄN TƯỞNG", sub: "11", children: "ABC" },
    { title: "SIÊU NĂNG LỰC", sub: "12", children: "ABC" },
    { title: "ĐANG CẬP NHẬT", sub: "13", children: "ABC" },
  ];

  const renderContent = (tab, index) => {
    const style = {
      padding: "40px",
      justifyContent: "center",
      alignItems: "center",
      margin: "10px",
      backgroundColor: "#ddd",
    };
    const content = (
      <View key={`${index}_${tab}`} style={style}>
        <Text>{tab?.children}</Text>
      </View>
    );
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>{content}</ScrollView>
    );
  };

  const InnerTab = (props) => {
    const { tabList } = props;
    return (
      <View>
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

  const tabStyle = {
    tabStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
      backgroundColor: "#fff",
    },
  };

  return (
    <View style={{ display: "flex" }}>
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
        <View style={tabStyle}>
          <InnerTab tabList={tabList} />
        </View>
        <View style={tabStyle}>
          <InnerTab tabList={tabList} />
        </View>
      </Tabs>
    </View>
  );
};

export default TypesTabs;
