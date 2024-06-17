import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Formulario Enviado', `Nombre: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#aaa" // Color del placeholder
        />
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu email"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#aaa" // Color del placeholder
        />
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#aaa" // Color del placeholder
        />
        <Button title="Guardar"  color='#FF0709' onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#AFACAC', // Color de fondo del contenedor principal
  },
  formContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#ffffff', // Color de fondo del formulario
    borderRadius: 10,
    shadowColor: '#000', // Sombra para la vista
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Sombra en Android
  },
  label: {
    fontSize: 20,
    marginBottom: 8,
    color: '#009F0B', // Color del texto de las etiquetas
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f0f0f0', // Color de fondo del campo de entrada
    color: '#333', // Color del texto del campo de entrada
  },
});

export default App;