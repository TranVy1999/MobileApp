import React, { useState, useEffect } from "react";
import { TabBar } from "antd-mobile";
import { View, Dimensions } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faLayerGroup,
  faCompass,
  faSwatchbook,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

import "antd-mobile/dist/antd-mobile.css";
import TypesTabs from "./components/TypesTabs";
import CarouselHome from "./components/CarouselHome";
import DiscoverTab from "./components/DiscoverTabs";
import MeTab from "./components/MeTab"
const HomeScreen = (props) => {
  const [selectedTab, setSelectedTab] = useState("homeTab");

  const tabStyle = {
    width: "22px",
    height: "22px",
    color: "#ff5454",
  };

  const navigation = [
    {
      key: "home",
      selected: "homeTab",
      title: "Trang chủ",
      icon: faHome,
      children: <CarouselHome />,
      onPress: () => setSelectedTab("homeTab"),
    },
    {
      key: "categories",
      selected: "categoriesTab",
      title: "Phân loại",
      icon: faLayerGroup,
      children: <TypesTabs />,
      onPress: () => setSelectedTab("categoriesTab"),
    },
    {
      key: "discovery",
      selected: "discoveryTab",
      title: "Khám phá",
      icon: faCompass,
      children: <DiscoverTab />,
      onPress: () => setSelectedTab("discoveryTab"),
    },
    {
      key: "bookStore",
      selected: "bookStoreTab",
      title: "Tủ sách",
      icon: faSwatchbook,
      onPress: () => setSelectedTab("bookStoreTab"),
    },
    {
      key: "me",
      selected: "meTab",
      title: "Tôi",
      icon: faUserCircle,
      children: <MeTab />,
      onPress: () => setSelectedTab("meTab"),
    },
  ];

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#ff5454"
        barTintColor="white"
        tabBarPosition="bottom"
      >
        {navigation?.map((it) => (
          <TabBar.Item
            key={it?.key}
            title={it?.title}
            icon={
              <FontAwesomeIcon
                style={{ ...tabStyle, color: "rgb(148, 148, 148)" }}
                icon={it?.icon}
              />
            }
            selectedIcon={
              <FontAwesomeIcon style={{ ...tabStyle }} icon={it?.icon} />
            }
            selected={selectedTab === it?.selected}
            onPress={it?.onPress}
          >
            {it?.children}
          </TabBar.Item>
        ))}
      </TabBar>
    </View>
  );
};
export default HomeScreen;
