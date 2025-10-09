
//1. Imports: Zona de importaciones
import { StyleSheet, Text, View,Button } from 'react-native';
import React,{useState} from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen'; 



//2. Main: Zona de componentes
export default function MenuScreen() {

const [screen, setScreen] = useState('menu');

switch (screen) {
     case 'contador':
       return <ContadorScreen />;
     case 'botones':
        return <BotonesScreen />;
      case 'menu':
          default:
          return (
          <View style={styles.menu}>

            <Text style={styles.title}>Menú de Practicas</Text>

            <View style={styles.buttonRow}>
              <Button onPress={() => setScreen('contador')} title="Pract:Contador" />
            </View>

            <View style={styles.buttonRow}>
              <Button onPress={() => setScreen('botones')} title="Pract:Botones" />
            </View>
            
          </View>            

    );//return

  }//switch

}//main

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#cec5c57b',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: '700',
  },
  buttonRow: {
    width: '60%',
    marginVertical: 8,
  },
});
