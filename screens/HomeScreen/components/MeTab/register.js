import React from 'react';
import { StyleSheet, Text,Alert, View,TouchableOpacity,TextInput,Dimensions} from 'react-native';
import {  Avatar  } from "react-native-elements";

const Register = (props) => {


    return (
      <View style={styles.container}>
           <Avatar
                size="xlarge"
                rounded // làm tròn
                source={{
                  uri: 'https://yt3.ggpht.com/ytc/AAUvwnhsXtCE9Kpy5tX8tYzX_wOSwzkDgZA6bhb3BEo=s176-c-k-c0x00ffffff-no-rj',
                }}/>
                    {/* // input user register */}
                    <Text style={styles.title}>LOGO APP</Text>
                    <TextInput placeholder="Username"
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent"
                    style={styles.txtInput}  
                    //    onChangeText={(username) => this.setState({username:username})}
                    />
                    {/* // input email */}
                    
                    <TextInput placeholder="Email register"
                    placeholderTextColor="black"
                    underlineColorAndroid="transparent"
                    style={styles.txtInput}  
                    //    onChangeText={(username) => this.setState({username:username})}
                    />
                    {/* // input password  */}
                    <TextInput placeholder="Password"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        style={styles.txtInput} 
                        //  onChangeText={(password) => this.setState({password:password})}
                        />
                    {/* // input password again */}
                    <TextInput placeholder="Password again"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="black"
                        secureTextEntry={true}
                        style={styles.txtInput} 
                        //  onChangeText={(password) => this.setState({password:password})}
                        />
                    
                    <TouchableOpacity  style={styles.btnLogin}>
                        <Text style={styles.txtLogin}>Register</Text>
                    </TouchableOpacity>

                
      </View>
    );
  }

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:  '#354f89',
    height: DEVICE_HEIGHT,

  },
  title:{
    fontSize:30,
    color:'red'
  },
  txtInput:{
    backgroundColor: '#ffffff',
    width: DEVICE_WIDTH - 40,
    height:"50px",
    marginHorizontal: 20,
    padding:8,
    borderRadius: 20,
    color: '#000',
    marginTop:5
  },
  btnLogin:{
     width: DEVICE_WIDTH - 40,
     height:"50px",
     backgroundColor:'#5693F0',
     padding:8,
     borderRadius: 20,
     marginTop:15,
     shadowColor: "#000",
     shadowOpacity: 0.3,
     shadowRadius: 10,
     shadowOffset: { width: 0, height: 0 },
 
  },
  txtLogin:{
    color:'#fff',
    textAlign:'center',
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