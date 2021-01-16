import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { List, InputItem, } from 'antd-mobile';
import { actionCreator } from '../../../../../store/user/user.meta'
import { useDispatch, useSelector } from 'react-redux';

const UpdateInformation = () => {
  const dispatch = useDispatch();

  const [username, setUserName] = useState(String);

  const handleUpdateUser = () => {
    console.log(username);
    dispatch(actionCreator.register({
      username: username,
    }))
  }
  
  useEffect(() => handleUpdateUser(), []);
  
  const user = useSelector((store) => {store.user?.user})

  return (
    <View style={styles.background}>
      <View style={styles.content}>
        <List renderHeader={() => 'Thông tin của bạn'}>

          <InputItem
            defaultValue="Nguyen Quoc Viet "
            placeholder="please input content"
            onChangeText={(username) => setUserName(username)}
          >Tên : </InputItem>
          <InputItem
            value="viet@gmail.com "
            disabled>
            Email : </InputItem>

        </List>
      </View>
      <View style={styles.stylebtn}>
        <Button
          title="Lưu"
          color="#ed0707"
          onPress={handleUpdateUser}
        />
      </View>

    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    width: "100%",
  },
  stylebtn: {
    margin: 50,
    backgroundColor: "#FFF",
  },
  background: {
    backgroundColor: "#ffffff",
    height: '100%'

  }


});

export default UpdateInformation;