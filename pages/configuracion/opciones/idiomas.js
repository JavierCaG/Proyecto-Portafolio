import React from 'react';
import { View, Text } from 'react-native';
import styles  from '../../styles';
const Idiomas = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Idiomas</Text>
      <Text style={styles.optionDescription}>
        aqui va los idiomas con una api probablemente
      </Text>
    </View>
  );
};

export default Idiomas;
