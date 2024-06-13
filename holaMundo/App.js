import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';

const Texto=()=>{
  const [contenido,setContenido]= useState('holaMundo')
  const actualizarContenido=()=>{setContenido('State actualizo este texto')}
  return( <Text onPress={actualizarContenido}> {contenido}</Text>)
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto > </Texto>
      <Texto />    
      <Button title='Presioname' color="#000000"></Button>

      
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
