import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>


      <Text>   Hola mundo!  </Text>
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
