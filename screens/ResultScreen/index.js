import React, { useEffect, useState } from "react";
import {
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { searchMangaByName } from "../../api/apiRouter";
import { Avatar } from "react-native-elements";

const ResultSearchScreen = (props) => {
  const { navigation } = props;
  const { data } = props.route.params;

  const [searchMangas, setSearchMangas] = useState([]);

  const fetchMangeBySearchName = async () => {
    const response = await searchMangaByName(data);
    const mangas = response?.body;
    setSearchMangas(mangas);
  };

  useEffect(() => {
    fetchMangeBySearchName();
  }, [searchMangas]);

  return (
    <View
      style={{
        width: Dimensions.get("window").width,
        minHeight: Dimensions.get("window").height,
        backgroundColor: "#ffffff",
        padding: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {searchMangas?.length > 0 ? (
        searchMangas?.map((dataItem, index) => (
          <View
            key={dataItem?.id ?? index}
            style={{
              height: "200px",
              paddingLeft: "10px",
              paddingRight: "-10px",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation?.navigate("MangaDetail", {
                  data: dataItem,
                })
              }
            >
              <Avatar
                source={{ uri: dataItem?.avatar }}
                style={{
                  width: "175px",
                  height: "150px",
                  borderRadius: 5,
                  shadowColor: "#000",
                  shadowOpacity: 0.2,
                  shadowRadius: 10,
                }}
                alt=""
              />
              <View
                style={{
                  color: "#888",
                  fontSize: "14px",
                  marginTop: "12px",
                  textAlign: "initial",
                }}
              >
                <Text style={styles.text}>{dataItem?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))
      ) : (
        <View
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            maxHeight: Dimensions.get("window").height,
            backgroundColor: "#ffffff",
            padding: "20px",
          }}
        >
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Không có kết quả tìm kiếm nào...
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
});

export default ResultSearchScreen;
