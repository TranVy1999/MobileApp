import React, {Component} from 'react';
import { Text, View ,Image ,StyleSheet ,ImageBackground } from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import 'antd-mobile/dist/antd-mobile.css';

export default function Item (props){  
    const { discovers} = props
        
        return (
          
            <ListItem bottomDivider style={styles.containerItem}>
                <Avatar style={styles.itemImage} source={{uri: discovers.imaged}} />
                <ListItem.Content>
                <ListItem.Title>{discovers.name}</ListItem.Title>
                <ListItem.Subtitle>bá đạo từng hạt gạo</ListItem.Subtitle>
                </ListItem.Content>
               
            </ListItem>
        );
    }
    const styles = StyleSheet.create({
        itemImage : {
            width: 100,
            height: 80,
            marginLeft:0,
            margin: 10
        },
        containerItem :{
            flex:1,
            flexDirection: 'row',
            padding:10,
            marginTop:10,
            alignItems: 'center',
            borderRadius:4,
            backgroundColor: '#FFF',
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 10,
            shadowOffset: {width : 0 , height:0}
        }
    }) ;