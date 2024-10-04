import React from 'react';
import { View, Text } from 'react-native';
import styles  from '../../styles';
const Accesibilidad = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accesibilidad</Text>
      <Text style={styles.optionDescription}>
        Ajusta las opciones de accesibilidad para mejorar la experiencia de uso.
      </Text>
    </View>
  );
};

export default Accesibilidad;
