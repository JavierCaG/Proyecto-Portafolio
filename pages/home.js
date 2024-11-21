import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, Mundo desde Home!</Text>
      <Button
        title="Ir a Configuraciones"
        onPress={() => navigation.navigate('Configuraciones')}
      />
      <Button
        title="Ir a Testigos"
        onPress={() => navigation.navigate('Testigos')}
      />
      <Button
        title="Ir a Beneficiarios"
        onPress={() => navigation.navigate('Beneficiarios')}
      />
      <Button
        title="Ir a Historial"
        onPress={() => navigation.navigate('Historial')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
