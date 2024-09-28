import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '@/components/Header';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function TableMessage() {
  const messages = [
    { id: 1, title: 'Mensaje 1', description: 'Este es el primer mensaje creado.', date: '2024-09-24' },
    { id: 2, title: 'Mensaje 2', description: 'Este es el segundo mensaje creado.', date: '2024-09-23' },
    { id: 3, title: 'Mensaje 3', description: 'Este es el tercer mensaje creado.', date: '2024-09-22' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header /> {/* Asegúrate de usar el Header igual que en HomeScreen */}

        {/* Mensajes previos */}
        <View style={styles.container}>
          {messages.map((message) => (
            <View key={message.id} style={styles.messageCard}>
              <View style={styles.messageContent}>
                <Text style={styles.messageTitle}>{message.title}</Text>
                <Text style={styles.messageDescription}>{message.description}</Text>
                <Text style={styles.messageDate}>Fecha: {message.date}</Text>
              </View>
              <TouchableOpacity style={styles.editIcon}>
                <FontAwesome name="pencil" size={28} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  messageCard: {
    backgroundColor: '#424242', // Color gris oscuro
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between', // Mantiene el texto y el ícono separados
    alignItems: 'center',
  },
  messageTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageContent: {
    flex: 1,
  },
  messageDescription: {
    fontSize: 14,
    color: '#BDBDBD',
    marginBottom: 5,
  },
  messageDate: {
    fontSize: 12,
    color: '#BDBDBD',
  },
  editIcon: {
    padding: 10, // Asegura que el botón sea fácil de presionar
    alignItems: 'flex-end', // Alinea el ícono a la derecha
    justifyContent: 'center',
  },
});