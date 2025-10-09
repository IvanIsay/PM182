// ProductRegisterScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Platform,
  ActivityIndicator,
} from "react-native";

export default function ProductRegisterScreen() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 URL de la API (ajusta esta constante a la dirección de tu backend)
  const API_URL = "http://127.0.0.1:8000/api/v1/products";

  const handleSave = async () => {
  if (!nombre || !descripcion || !precio) {
    Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
    return;
  }

  try {

    setLoading(true);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, descripcion, precio: parseFloat(precio) }),
    });

    // NO hagas: setApiResponse(response)  <-- esto causa el error

    // SI haz:
    const data = await response.json(); // convierte a objeto JS "plano"
    
    // Guarda datos simples / planos en estado o almacenamiento:
    setProductSaved(data); // por ejemplo, guardar solo el objeto devuelto

    Alert.alert("Éxito", `Producto "${data.nombre}" guardado con éxito.`);
  } catch (err) {
    console.error(err);
    Alert.alert("Error", "No se pudo guardar el producto.");
  } finally {
    setLoading(false);
  }
};


  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#f5f6fa" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.title}>Registro de Producto</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nombre del producto</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            value={nombre}
            onChangeText={setNombre}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Descripción</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder=" "
            value={descripcion}
            onChangeText={setDescripcion}
            multiline
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Precio</Text>
          <TextInput
            style={styles.input}
            placeholder=""
            keyboardType="numeric"
            value={precio}
            onChangeText={setPrecio}
          />
        </View>

        <TouchableOpacity
          style={[styles.button, loading && { backgroundColor: "#b2bec3" }]}
          onPress={handleSave}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Guardar</Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#940808ff",
    marginBottom: 32,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#636e72",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#dfe6e9",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  button: {
    backgroundColor: "#09e376ff",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#0984e3",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 3,
  },
  buttonText: {
    color: "#100f0fff",
    fontSize: 17,
    fontWeight: "600",
  },
});
