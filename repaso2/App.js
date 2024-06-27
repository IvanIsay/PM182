import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, ActivityIndicator, Text, StyleSheet, Alert, ImageBackground } from 'react-native';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const items = [
    'Psicosis',
    'El resplando',
    'Halloween',
    'El exorcista',
    'El proyecto de la bruja de Blair',
    'Begotten',
    'Nosferatu',
    'Texas Chainsaw',
    'Pesadilla en Elm Street',
    'La profecia',
    'The vvitch',
    'Un lugar tranquilo'
  ];

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const results = items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
      setFilteredData(results);
      setLoading(false);
      if (results.length === 0) {
        Alert.alert('Sin Resultados', 'No existen coincidencias en la lista.');
      }
    }, 2000);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://e0.pxfuel.com/wallpapers/412/141/desktop-wallpaper-aesthetic-iphone-xr-red-largest-portal-neon-red-skull.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}> Buscador de Peliculas </Text>
        <TextInput
          style={styles.input}
          placeholder="Titulo o parte..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
        <Button title="Buscar" onPress={handleSearch} />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          />
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Ajusta la imagen para que cubra toda la pantalla
  },
  overlay: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Agrega un fondo semi-transparente para mejorar la legibilidad
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  titulo: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 25,
    //color: 'red',
    fontWeight: 'bold',
  },
});

export default App;
