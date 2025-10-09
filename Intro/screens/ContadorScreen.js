
//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';



//2. Main: Zona de componentes
export default function Contador() {

     const [contador,setContador]= useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto }> Contador:</Text>
      <Text style={styles.texto2 }>  {contador} </Text>

    <View style={styles.botonesContainer}>

      <Button  style={styles.btn } color="#FF5733"  title='Agregar' onPress={()=>setContador(contador+1)} />
      <Button  style={styles.btn}  color="#4bce0aff" title='Quitar' onPress={()=>setContador(contador-1)} />
      <Button  style={styles.btn }  color="#edea0dff"  title='Reiniciar' onPress={()=>setContador(0)} />

    </View>

      <StatusBar style="auto" />
      
    </View>


  );
}

//3. Estilos: Zona estetica para componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0c2c27b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#370fe8ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',

  },
    texto2:{
    color:'#06930fff',
    fontSize: 35,
    fontFamily: 'Courier',
    fontWeight:'500',
    fontStyle:'normal',
    textDecorationLine:'underline',

  },
  botonesContainer: {
    marginTop:15,
    flexDirection: 'row', // <-- Esto los pone en una sola línea
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20, // separación entre botones (React Native 0.71+)
  },



});
