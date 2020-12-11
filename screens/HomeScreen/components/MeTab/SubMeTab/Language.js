import * as React from 'react';
import { View , StyleSheet,} from 'react-native';
import { RadioButton, Text } from 'react-native-paper';

const Language = () => {
  const [value, setValue] = React.useState('english');

  return (
    <View style={styles.background}>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.content}>
        <Text style={styles.text}>English</Text>
        <RadioButton value="english" />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>Vietnamese</Text>
        <RadioButton value="vietnamese" />
      </View>
    </RadioButton.Group>
    </View>
  );
};
const styles = StyleSheet.create({
    content:{ display: "flex",
           flexDirection: "row",
           justifyContent: 'space-between',
           width: "90%",
           margin:10 ,
            backgroundColor: '#FFFFFF',
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 0 },
        },
    text:{
        // textAlign: "justify",
        fontSize: 20,
        padding:10,
    },
    background: {
      backgroundColor: "#ffffff",
      height: '100%'
      
}
   
    
  });

export default Language;