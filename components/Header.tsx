import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      {/* Ícono de casa */}
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="home" size={24} color="white" />
      </TouchableOpacity>

      {/* Título centrado */}
      <Text style={styles.headerText}>My Legacy</Text>

      {/* Ícono de configuración */}
      <TouchableOpacity style={styles.iconButton}>
        <FontAwesome name="cog" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    backgroundColor: '#1E88E5', // Color azul oscuro para el header
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15, // Espaciado a los lados
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconButton: {
    padding: 10,
  },
});
