import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';
import { router, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Header from '../../../components/Header';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    const router = useRouter();
    const [respuesta, setRespuesta] = useState(''); // Para almacenar la respuesta

    return (
        <ParallaxScrollView>
            <Header />
            <View style={styles.container}>
                {/* Contenedor con texto y bordes redondeados */}
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}>¿Cuál fue tu viaje más importante?</Text>
                </View>

                {/* Botón circular con icono de "+" */}
                <TouchableOpacity style={styles.addButton}>
                    <FontAwesome name="plus" size={24} color="white" />
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        justifyContent: 'center', // Centrar verticalmente
        alignItems: 'center', // Centrar horizontalmente
      },
      questionContainer: {
        backgroundColor: '#ee684b', // Color de fondo del contenedor de la pregunta
        paddingVertical: 10, // Espaciado en el eje Y
        paddingHorizontal: 20, // Espaciado en el eje X
        borderRadius: 30, // Bordes redondeados
        marginBottom: 20, // Espacio entre la pregunta y el botón
      },
      questionText: {
        fontSize: 16,
        color: 'black', // Color del texto
        fontWeight: 'bold',
        textAlign: 'center',
      },
      addButton: {
        width: 60, // Tamaño del botón circular
        height: 60,
        borderRadius: 30, // Hace que el botón sea circular
        backgroundColor: '#FFA07A', // Color de fondo del botón
        justifyContent: 'center',
        alignItems: 'center', // Centrar el icono de "+"
        elevation: 5, // Sombra para Android
        shadowColor: '#000', // Sombra para iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
});