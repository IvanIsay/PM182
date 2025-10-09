
//1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


//2. Main: Zona de componentes
export default function Contador() {

  return (

    <View style={styles.container}>

      <Text style={styles.texto }> Proximamente.....</Text>

      <StatusBar style="auto" />
      
    </View>


  );
}

//3. Estilos: Zona estetica para componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#78ba167b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'#370fe8ff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'underline',

  },

});
