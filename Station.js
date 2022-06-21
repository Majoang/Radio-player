import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import { Feather , AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { Audio } from 'expo-av';
import {useState, useEffect} from 'react';
//<AntDesign name="play" size={37} color='lime' />

export default function Station() {

 
  let trueState = true;
  let falseState = false;

 // const [station, setStation] = useState([]);
  const [isPlaying, setIsPlaying] = useState(falseState)
  const [playBackObject, setPlayBackObject] = useState(null)
  const [playBackObjectStatus, setPlayBackObjectStatus] = useState(null)
  const [sound, setSound] = React.useState() 

  const RadioStations = [
   {
    fname : 'Moafrika FM',
    uri: 'http://ca3.rcast.net:8040/;stream.mp3',
    icon: 'https://cdn.onlineradiobox.com/img/l/6/102286.v1.png',
   },

   {
    
    fname: 'Harvest FM',
    uri:'http://node-08.zeno.fm/v0myu53ae3quv?zs=Qyh0r6OsRQ2IvATq1GO7Xw&zs=iJCqf_4VRoyHYF3Kw_5ZMw&rj-tok=AAABgXq4nFoAX6smAN5esSnQng&rj-ttl=5',
    icon: 'https://cdn.onlineradiobox.com/img/l/1/13271.v5.png',

   },

  {
     fname: 'Radio Maria',
     uri: 'https://worldradiomap.com/ls/play/maria',
     icon: 'https://static-media.streema.com/media/cache/cc/ce/ccce39c828782a1c12ac41031dcb07b9.jpg',
  },
  
  {
    fname: 'Tsenolo FM',
    uri: 'http://onlineradiobox.com/ls/tsenolo/player/?cs=ls.tsenolo&played=1',
    icon: 'https://cdn.onlineradiobox.com/img/l/8/82788.v1.png',
 }
  

]


  useEffect(() => {
    if(playBackObject === null){
      setPlayBackObject(new Audio.Sound())
    }
  }, [])

  const playPauseFunction = async(index) => {
   try{
    if(playBackObject !== null && playBackObjectStatus === null){
        const status = await playBackObject.loadAsync(
          {uri: RadioStations[index].uri},
          {ShouldPlay: trueState}
        );
        setIsPlaying(trueState);
        return setPlayBackObjectStatus(status)
      }
     
  
      if(playBackObjectStatus.isPlaying){
        const status = await playBackObject.pauseAsync();
          setIsPlaying(falseState);
          return setPlayBackObjectStatus(status)
      }
      if(!playBackObjectStatus.isPlaying){
        const status = await playBackObject.playAsync();
        setIsPlaying(trueState)
        return setPlayBackObjectStatus(status)
      }
   }catch(msg){
    console.log(msg);
   }
  };

  React.useEffect(() => {
    return sound ? () => {
    console.log("There has been an error");
    sound.unloadAsync();
      
    } : undefined

  }, [sound])

 
async function playme(rad){
  const sound = new Audio.Sound();
  try{
    await sound.loadAsync({uri: rad[1].uri});
    await sound.playAsync();

    await sound.unloadAsync();
  }catch(error){
    console.log("ooooop")
  }
};



return (
<View style={styles.main}>

<View>
<ImageBackground source={{uri: RadioStations[0].icon}} style={styles.stationImage} imageStyle={{ borderRadius:16}}>
  <View style={styles.playview}>
  <TouchableOpacity  onPress={playPauseFunction(1)} >
  <Ionicons  style={{ alignSelf: 'center', backgroundColor: 'lime', padding: 10, borderRadius: 50, }} name={isPlaying ? 'play' : 'pause'} size={24} color='#000'/>
  
    </TouchableOpacity>

  </View>
 </ImageBackground>
 <Text style={{fontStyle:'italic', fontWeight:'700', fontSize:13,marginRight: 20,marginLeft:10,color:'white',marginBottom: 30}}>{RadioStations[0].fname}</Text>
 </View>

<View>
 <ImageBackground source={{uri: RadioStations[1].icon}} style={styles.stationImage} imageStyle={{ borderRadius:16}}>
  
  <View style={styles.playview}>
  <TouchableOpacity >
  <AntDesign name="play" size={37} color='#000'  />
  
    </TouchableOpacity>
   
  </View>
  
 </ImageBackground>
 <View><Text style={{fontStyle:'italic', fontWeight:'700', fontSize:13,color: 'white'}}>{RadioStations[1].fname}</Text></View>
 </View>
 
<View>
 <ImageBackground source={{uri: RadioStations[2].icon}} style={styles.stationImage} imageStyle={{ borderRadius:16}}>
  <View style={styles.playview}>
  <TouchableOpacity>
  <Ionicons  style={{ alignSelf: 'center', backgroundColor: 'lime', padding: 10, borderRadius: 50, }} name={isPlaying ? 'play' : 'pause'} size={24} color='#000'/>
    </TouchableOpacity>
   
  </View>
 </ImageBackground>
 <View><Text style={{fontStyle:'italic', fontWeight:'700', fontSize:13,color: 'white'}}>{RadioStations[2].fname}</Text></View>
 </View>

<View>
 <ImageBackground source={{uri: RadioStations[3].icon}} style={styles.stationImage} imageStyle={{ borderRadius:16}}>
  <View style={styles.playview}>
  <TouchableOpacity>
    <AntDesign name="play" size={37} color='#000'  />
    </TouchableOpacity>
  </View>
 </ImageBackground>
 <View><Text style={{fontStyle:'italic', fontWeight:'700', fontSize:13,color:'white'}}>{RadioStations[3].fname}</Text></View>
 </View>
</View>

);
 
}

const styles = StyleSheet.create({

    main: {
      flexDirection:'row',
      justifyContent:'space-between',
      flexWrap:'wrap',
      paddingHorizontal: 15,
      paddingVertical: 20
    },
    stat:{
        backgroundColor: '#4DD0E1',
        borderRadius:16,
        height: 130,
        width: 130,
        marginBottom:20,
        justifyContent:'flex-end'


    },
    stationImage:{
      height: 150,
      width: 150,
      marginBottom:20,
      justifyContent:'flex-end',
  
    }, 
    playview:{
      flexDirection: 'row',
      justifyContent:'space-between',
      paddingLeft:6
   
    }
})