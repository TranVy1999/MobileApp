import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Alert, View, TouchableOpacity, TextInput, Dimensions, ImageBackground } from 'react-native';
import { Avatar } from "react-native-elements";
import { useDispatch } from 'react-redux'
import {actionCreator} from '../../../../store/user/user.meta'

const Register = (props) => {
  const dispatch = useDispatch()
  const { navigation } = props
  const [username, setUserName] = useState(String)
  const [usermail, setUserMail] = useState(String)
  const [password, setPassword] = useState(String)
  
  const handleRegister = () => {
    console.log(username + " user " + password + " pass");
  
    dispatch(actionCreator.register({
      username: username,
      usermail: usermail,
      password: password
    }))
  }
	useEffect(() => handleRegister(), []);


  return (
    <View >
      <ImageBackground style={styles.container} source={{ uri: 'https://i.pinimg.com/originals/44/8d/41/448d41e3df798cd669787b4fbd2733ea.jpg' }}>
        <Avatar
          size="xlarge"
          rounded // làm tròn
          source={{
            uri: 'https://yt3.ggpht.com/ytc/AAUvwnhsXtCE9Kpy5tX8tYzX_wOSwzkDgZA6bhb3BEo=s176-c-k-c0x00ffffff-no-rj',
          }} />
        {/* // input user register */}
        <Text style={styles.title}>LOGO APP</Text>
        <TextInput placeholder="Username"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={(username) => setUserName(username)}
        />
        {/* // input email */}

        <TextInput placeholder="Email register"
          placeholderTextColor="black"
          underlineColorAndroid="transparent"
          style={styles.txtInput}
          onChangeText={(usermail) => setPassword(usermail)}
        />
        {/* // input password  */}
        <TextInput placeholder="Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.txtInput}
          onChangeText={(password) => setPassword(password)}
        />
        {/* // input password again */}
        <TextInput placeholder="Password again"
          underlineColorAndroid="transparent"
          placeholderTextColor="black"
          secureTextEntry={true}
          style={styles.txtInput}
        //  onChangeText={(password) => this.setState({password:password})}
        />

        <TouchableOpacity style={styles.btnLogin} onPress={handleRegister}>
          <Text style={styles.txtLogin}>Register</Text>
        </TouchableOpacity>
      </ImageBackground>

    </View>
  );
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#354f89',
    height: DEVICE_HEIGHT,

  },
  title: {
    fontSize: 30,
    color: 'red'
  },
  txtInput: {
    backgroundColor: '#ffffff',
    width: DEVICE_WIDTH - 40,
    height: "50px",
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 20,
    color: '#000',
    marginTop: 5
  },
  btnLogin: {
    width: DEVICE_WIDTH - 40,
    height: "50px",
    backgroundColor: '#5693F0',
    padding: 8,
    borderRadius: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },

  },
  txtLogin: {
    color: '#fff',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '700',
  },


  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    padding: 10,
  },

});
export default Register;