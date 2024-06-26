import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';

export default function App() {

  const [user,setUser]= useState([])
  const [loading,setLoading]= useState(true)

  useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data=>{setUser(data), setLoading(false)})
  },[])


  if(loading){
    return <View style={styles.center}>
         <ActivityIndicator size='large' color='#0000ff' /> 
          <Text> Cargando </Text>
    </View>
  }


  return (

    <View style={styles.container}>

      <FlatList
      data={user}
      renderItem={({item})=> <Text style={styles.item}> {item.username}  {item.address.city}  </Text> }
      />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
    paddingTop:60,
  },
  item:{
    padding:10,
    fontSize:24,
    height:50,
    borderColor:'blue',
    borderBottomWidth:2
  },
  center:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'

  }

});
