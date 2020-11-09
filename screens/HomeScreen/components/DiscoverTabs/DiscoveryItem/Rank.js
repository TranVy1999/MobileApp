import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import "antd-mobile/dist/antd-mobile.css";

export default function Rank(props ) {
  const { rank } = props;
 
 
   return (
     <TouchableOpacity>
            <ListItem bottomDivider>
            <Avatar source={{uri: rank.avatar_url}} />
            <ListItem.Content>
            <ListItem.Title>{rank.name}</ListItem.Title>
            <ListItem.Subtitle>{rank.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
        );
      }
     
      
 


