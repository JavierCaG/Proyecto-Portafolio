import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BackgroundWrapper from '@/components/background';
import Header from '../../../components/Header';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import EntryListScreen from './listEntry'; // Asegúrate de que la ruta sea correcta

const entries = [
    {
        id: '1',
        content: {
            image: require('../../../assets/ejemplos/persona.jpg'),
            text: 'Mi primer viaje a las montañas',
            video: null,
            audio: null,
        },
        date: '2024-09-30',
    },
    // ... el resto de las entradas ...
];

export default function Home( navigation ) {
    const [respuesta, setRespuesta] = useState('');
    const [inputVisible, setInputVisible] = useState(false);
    const buttonPosition = useRef(new Animated.Value(0)).current;
    const inputWidth = useRef(new Animated.Value(0)).current;
    const inputOpacity = useRef(new Animated.Value(0)).current;

    const handlePress = () => {
        if (inputVisible) {
            // Si el input está visible, revertimos la animación
            Animated.parallel([
                Animated.timing(buttonPosition, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(inputWidth, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }),
                Animated.timing(inputOpacity, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: true,
                }),
            ]).start(() => setInputVisible(false));
        } else {
            setInputVisible(true);
            Animated.parallel([
                Animated.timing(buttonPosition, {
                    toValue: -10,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }),
                Animated.timing(inputWidth, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }),
                Animated.timing(inputOpacity, {
                    toValue: 1,
                    duration: 500,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }),
            ]).start();
        }
    };

    return (
        <ParallaxScrollView>
            <BackgroundWrapper>
                <Header />
                <View style={styles.dailyContainer}>
                    <View style={styles.questionContainer}>
                        <Text style={styles.questionText}>¿Cuál fue tu viaje más importante?</Text>
                    </View>

                    <View style={styles.inputContainer}>
                        <Animated.View style={[{ transform: [{ translateX: buttonPosition }] }]}>
                            <TouchableOpacity style={styles.addButton} onPress={handlePress}>
                                <FontAwesome name="plus" size={24} color="white" />
                            </TouchableOpacity>
                        </Animated.View>

                        {inputVisible && (
                            <Animated.View
                                style={{
                                    flex: 1,
                                    opacity: inputOpacity,
                                    maxWidth: inputWidth.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0%', '80%'],
                                    }),
                                }}
                            >
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Escribe tu respuesta aquí..."
                                    value={respuesta}
                                    onChangeText={setRespuesta}
                                />
                            </Animated.View>
                        )}
                    </View>

                    {/* Renderiza la lista de entradas */}
                    <View style={styles.entryListContainer}>
                        <EntryListScreen entries={entries} />
                    </View>
                </View>
            </BackgroundWrapper>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    dailyContainer: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
        paddingBottom: 10,
    },
    questionContainer: {
        backgroundColor: '#C19A6B',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginBottom: 10,
    },
    questionText: {
        fontSize: 12,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        justifyContent: 'center',
        marginBottom: 20,
    },
    textInput: {
        minHeight: 40,
        maxHeight: 60,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#FFA07A',
        color: 'black',
    },
    addButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: '#C19A6B',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginLeft: 10,
    },
    entryListContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        paddingHorizontal: 0,
    },
});
