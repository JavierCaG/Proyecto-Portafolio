import React from 'react';
import { View, Text } from 'react-native';
import styles  from '../../styles';
const Privacidad = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacidad</Text>
      <Text style={styles.optionDescription}>
        Privacidad del usuario
      </Text>
    </View>
  );
};

export default Privacidad;
