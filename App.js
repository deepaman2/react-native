
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Button,TextInput, Alert} from 'react-native';

export default function App() {
  const myalert =() => Alert.alert("wrong input")
  return (
    <View style={styles.container }>
       
       <Image
        style={{
         
          width: 60,
         height: 60,
         margin:50,
         }}
       source={{
       uri: 'https://repository-images.githubusercontent.com/429731156/cd5cfe35-c70c-40fd-b997-7e21f41eedf8'   }}
      
       />
       <Image
        style={{
         width: 60,
         height: 60,
         margin:50,
         
         }}
       source={{
       uri: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png'   }}
       
       />
       <Image
        style={{
         width: 60,
         height: 60,
         margin:50,
         
         }}
       source={{
       uri: 'https://images.ctfassets.net/23aumh6u8s0i/3vCAkDy9os54mkVdD09lps/2b5386b4302f7ce38c4f6a69d6379dc0/reactjs'   }}
       
       />
       <Text>adarsh kaur </Text>
       <Button 
       title="click me" 
       //style={{backgroundColor: 'red', borderRadius: 12}}
       color="purple"
       onPress={myalert}
       />
       <TextInput
       value="Enter the details"
       style={{
        backgroundColor:"white",
        borderRadius: 10, 
        paddingHorizontal: 50,
        
      }}/>
       </View>
       );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    //flexDirection:'row',
    shadowColor:'black',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
