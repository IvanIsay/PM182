import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,SectionList} from 'react-native';
//import React,{useState} from 'react';

export default function App() {


  return (

    <View style={styles.container}>

      <SectionList
         sections={[
          { title:'Grupo A',
            data:[
              {key:1,name:'Ivan Isay'},
              {key:2,name:'Victor'},
              {key:3,name:'Elias'},
              {key:4,name:'Alan'}, ]
            },
          { title:'Grupo B',
              data:[  
                {key:5,name:'Pablo'},
                {key:6,name:'Lilian'},
                {key:7,name:'Monse'},
               ]
            },
          { title:'Grupo C',
              data:[
                {key:8,name:'Ivan'},
                {key:9,name:'Vic'},
                {key:10,name:'Eli'},
                {key:11,name:'Alan'}, ]
              },
        ]}
        renderItem={ ({item})=> <Text style={styles.item} > {item.name} </Text>  }
        renderSectionHeader={ ({section})=> <Text style={styles.section} >{section.title}</Text>  }
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
  section:{
    fontSize:16,
    fontWeight:'bold',
    backgroundColor:'#eee',
    paddingTop:4,
    paddingBottom:4,
  }

});
