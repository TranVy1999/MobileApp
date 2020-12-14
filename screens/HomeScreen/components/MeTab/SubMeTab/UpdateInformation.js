import * as React from 'react';
import { View , StyleSheet, Button} from 'react-native';
import { List, InputItem, } from 'antd-mobile';


const UpdateInformation = () => {

 

  return (
    <View style={styles.background}>
        <View style={styles.content}>
                <List renderHeader={() => 'Thông tin của bạn'}>
                    
                        <InputItem
                        defaultValue="Nguyen Quoc Viet "
                        placeholder="please input content"
                        >Tên : </InputItem>
                        <InputItem
                        value="viet@gmail.com "
                       
                        disabled
                        >Email : </InputItem>
                    
                </List>
        </View>
          <View style={styles.stylebtn}>
         <Button  
          title="Lưu"
          color="#ed0707"
        //   onPress={() => navigation.navigate("Login")}
        />
            </View>

    </View>
  );
};
const styles = StyleSheet.create({
    content:{ display: "flex",
              flexDirection: "row",
               justifyContent: 'space-between',
              width: "100%",
        },
    stylebtn:{ 
            margin: 50,
             backgroundColor:"#FFF",
              },     
    background: {
            backgroundColor: "#ffffff",
            height: '100%'
            
    }
   
    
  });

export default UpdateInformation;