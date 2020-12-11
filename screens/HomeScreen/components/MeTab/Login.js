import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import { Avatar } from "react-native-elements";

const Login = (props) => {
  return (
    <View style={styles.container}>
      <Avatar
        size="xlarge"
        rounded // làm tròn
        source={{
          uri:
            "https://i.pinimg.com/564x/28/ab/e2/28abe2033f1adc6d8a29da35a4c16749.jpg",
        }}
      />

      <Text style={styles.title}>LOGO APP</Text>
      <TextInput
        placeholder="Username"
        placeholderTextColor="black"
        underlineColorAndroid="transparent"
        style={styles.txtInput}
        //    onChangeText={(username) => this.setState({username:username})}
      />
      <TextInput
        placeholder="Password"
        underlineColorAndroid="transparent"
        placeholderTextColor="black"
        secureTextEntry={true}
        style={styles.txtInput}
        //  onChangeText={(password) => this.setState({password:password})}
      />
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text
          style={styles.registerTextStyle}
          // onPress={() => navigation.navigate('RegisterScreen')}
        >
          New Here ? Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#242245",
    height: DEVICE_HEIGHT,
  },
  title: {
    fontSize: 30,
    color: "red",
  },
  txtInput: {
    backgroundColor: "#ffffff",
    width: DEVICE_WIDTH - 40,
    height: "50px",
    marginHorizontal: 20,
    padding: 8,
    borderRadius: 20,
    color: "#000",
    marginTop: 5,
  },
  btnLogin: {
    width: DEVICE_WIDTH - 40,
    height: "50px",
    backgroundColor: "#5693F0",
    padding: 8,
    borderRadius: 20,
    marginTop: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
  },
  txtLogin: {
    color: "#fff",
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "700",
  },

  registerTextStyle: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center",
    padding: 10,
  },
});
export default Login;
