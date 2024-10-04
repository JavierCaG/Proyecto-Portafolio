import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '../styles';  // Importamos los estilos
import { useNavigation } from '@react-navigation/native';

const Configuraciones = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="settings" size={32} color="#ff6f00" />
        <Text style={styles.configHeader}>Configuración</Text>
      </View>

      <ScrollView style={styles.optionsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Seguridad')}>
          <Text style={styles.buttonText}>Seguridad</Text>
          <Text style={styles.optionDescription}>Activa o desactiva la huella biométrica.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AdministrarCuenta')}>
          <Text style={styles.buttonText}>Administrar cuenta</Text>
          <Text style={styles.optionDescription}>Controla tu contraseña, métodos de pago y permisos en la cuenta.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Temas')}>
          <Text style={styles.buttonText}>Temas</Text>
          <Text style={styles.optionDescription}>Personaliza tu aplicación.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Idiomas')}>
          <Text style={styles.buttonText}>Idiomas</Text>
          <Text style={styles.optionDescription}>Selecciona los idiomas que gustes.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Privacidad')}>
          <Text style={styles.buttonText}>Privacidad</Text>
          <Text style={styles.optionDescription}>Personaliza los permisos que pueden tener las aplicaciones compartidas.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Accesibilidad')} >
          <Text style={styles.buttonText}>Accesibilidad</Text>
          <Text style={styles.optionDescription}>Ajusta las opciones de accesibilidad.</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logoutButton} disabled={true}>
          <Text style={styles.logoutText}>Cerrar Cuenta</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Configuraciones;
