import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,ActivityIndicator} from 'react-native';
import React,{useState,useEffect} from 'react';
import Prueba from './screens/Prueba.js';


export default function App() {

  return (

    <Prueba></Prueba>
    

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
