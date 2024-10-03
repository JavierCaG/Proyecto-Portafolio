import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';


export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!email || !password ) {
            Alert.alert('Error', 'Por favor completa todos los campos');
            return;
        }

        // Lógica para manejar el inicio de sesion del usuario, por ejemplo, llamar a una API
        Alert.alert('Inicio de sesion exitoso.', `Nombre: ${name}\nEmail: ${email}`);
    };

    return (

        <LinearGradient
            // Colores del degradado de izquierda a derecha
            colors={['#b6c0e8', '#ffcccb']}
            style={styles.background}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
        >

            <Image
                source={require('../../../assets/images/flores.png')} // Reemplaza con la ruta de tu imagen
                style={styles.image}
                resizeMode="cover"
            />

            <View style={styles.container}>
                <Text style={styles.title}>Inicia Sesion</Text>
                <Text style={styles.subtitle}>Inicia Sesion</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Correo electrónico"
                    placeholderTextColor="#aaa"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor="#aaa"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Iniciar Sesion</Text>
                </TouchableOpacity>

            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 600,
        position: 'absolute',
        top: 0,
        opacity: 0.7,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 10
    },
    input: {
        height: 50,
        width: '100%',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 15,
        backgroundColor: '#f9f9f9',
    },
    button: {
        backgroundColor: '#ff9999',
        paddingVertical: 15,
        width: '100%',
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#000000',
        marginTop: 10,
        textAlign: 'center',
    },
});