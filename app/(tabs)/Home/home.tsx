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

            {/* Nueva sección con imagen y pregunta */}
            <View style={styles.profileSection}>
                <View style={styles.profileBox}>
                    {/* Imagen del usuario */}
                    <Image
                        source={require('../../../assets/images/usuario.jpg')} // Ruta corregida
                        style={styles.userImage}
                    />

                    {/* Pregunta */}
                    <Text style={styles.question}>¿Cómo te sientes hoy?</Text>

                    {/* Barra de texto para responder */}
                    <TextInput
                        style={styles.input}
                        placeholder="Escribe tu respuesta aquí..."
                        value={respuesta}
                        onChangeText={text => setRespuesta(text)}
                    />
                </View>
            </View>

            <View style={styles.container}>
                {/* Tarjeta 1 */}
                <TouchableOpacity
                    style={[styles.card, { backgroundColor: '#FF6B6B' }]}
                    onPress={() => router.push('/Message/tableMessage')}
                >
                    <FontAwesome name="envelope" size={24} color="white" />
                    <Text style={styles.cardText}>Mensajes</Text>
                </TouchableOpacity>
                {/* Tarjeta 2 */}
                <TouchableOpacity style={[styles.card, { backgroundColor: '#4ECDC4' }]}>
                    <FontAwesome name="star" size={24} color="white" />
                    <Text style={styles.cardText}>Deseos</Text>
                </TouchableOpacity>

                {/* Tarjeta 3 */}
                <TouchableOpacity style={[styles.card, { backgroundColor: '#5C4CF7' }]}>
                    <FontAwesome name="file-text" size={24} color="white" />
                    <Text style={styles.cardText}>Historia de Vida</Text>
                </TouchableOpacity>

                {/* Tarjeta 4 */}
                <TouchableOpacity style={[styles.card, { backgroundColor: '#FF9F1C' }]}>
                    <FontAwesome name="book" size={24} color="white" />
                    <Text style={styles.cardText}>Álbum de vida</Text>
                </TouchableOpacity>
            </View>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    profileSection: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20, // Separación vertical
    },
    profileBox: {
        backgroundColor: 'rgba(186, 255, 254, 0.7)', // Fondo blanco semitransparente
        padding: 20,
        borderRadius: 15, // Bordes redondeados
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5, // Sombra para Android
    },
    userImage: {
        width: 200,
        height: 200,
        borderRadius: 100, // Para hacer la imagen redonda
        marginBottom: 10,
    },
    question: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '80%', // Ancho de la barra de texto
        fontSize: 16,
        backgroundColor: 'white', // Fondo blanco para el campo de texto
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        justifyContent: 'center',
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        width: 200,
        gap: 8,
        margin: 10,
        padding: 10,
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Permite que las tarjetas se ajusten en filas
        justifyContent: 'space-between', // Distribuye las tarjetas con espacio entre ellas
        padding: 10,
    },
    card: {
        width: '48%', // Ocupa el 48% del ancho, para que quepan dos tarjetas por fila con espacio entre ellas
        aspectRatio: 1.5, // Mantiene la proporción de la tarjeta
        borderRadius: 10, // Bordes redondeados
        justifyContent: 'center', // Centrar el contenido horizontal y verticalmente
        alignItems: 'center',
        marginBottom: 15, // Espacio entre las filas de tarjetas
        padding: 10,
    },
    cardText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
    },
    iconButton: {
        padding: 10,
    },
});