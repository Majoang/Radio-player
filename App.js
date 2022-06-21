import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Station from './Station';
import {useState} from 'react';
import { Feather , AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { Button } from 'react-native';
//<Button title="Radio" onPress={addStation}></Button>
/*function addStation()
{
  axios.get('http://91.132.145.114/json/stations').then((response) => {setStation(response.data, ...station)})
 }
*/

export default function App() {
  return (
   <> 
   
   <View style={styles.container}>
   <View style={styles.header}>
     <Text style={{color:'#EEEEEE', fontSize:25, fontWeight:'700'}}>Denvar Stations</Text>
     <Ionicons name="md-options" size={24} color='#EEEEEE' />
     </View>
     <View style={{flexDirection:'row', justifyContent:'space-between', padding:50}}>
       <Text style={{fontWeight:'700', color:'#EEEEEE', fontSize:20}}>Radio</Text>
       <Text style={{fontWeight:'700', color:'#EEEEEE', fontSize:20,marginRight:50}}>Podcast</Text>
     </View>
     <View style={{justifyContent:'space-between', flexDirection:'row', flexWrap:'wrap', marginHorizontal:20, marginVertical:10}}>
     </View>
     <Station/>
 </View>
 </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#37474F',
    flexWrap:'wrap',

  },

  header: {
    marginTop:15,
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    alignItems:'center',
  
  }
});
