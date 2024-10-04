import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      {/* Menú hamburguesa alineado a la derecha */}
      <TouchableOpacity style={styles.menuButton}>
        <FontAwesome name="bars" size={28} color="black" />
      </TouchableOpacity>

      {/* Icono de perfil centrado */}
      <View style={styles.profileContainer}>
        <Image
          source={require('./../../assets/images/usuario.jpg')} // Imagen de perfil
          style={styles.profileIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 50, // Ajuste para la altura del navbar
    backgroundColor: '#ee684b', // Color del navbar
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Posición relativa para el perfil
  },
  profileContainer: {
    position: 'absolute',
    top: 0, // Este valor mueve el perfil hacia abajo para que sobresalga del navbar
    left: '50%',
    transform: [{ translateX: -40 }], // Centrar el perfil horizontalmente
    width: 83,
    height: 83,
    borderRadius: 40, // Hace que el contenedor sea circular
    backgroundColor: '#ee684b', // Fondo blanco detrás de la imagen
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Asegura que el perfil esté por encima del navbar
  },
  profileIcon: {
    width: 70,
    height: 70,
    borderRadius: 35, // Hace que la imagen sea circular
  },
  menuButton: {
    position: 'absolute',
    right: 20, // Alinea el botón de menú a la derecha
    top: 10, // Ajusta la posición vertical del botón de menú
  },
});
