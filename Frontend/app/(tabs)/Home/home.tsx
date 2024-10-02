import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BackgroundWrapper from '@/components/background';
import Header from '../../../components/Header';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import EntryListScreen from './listEntry'; // Importar el componente que muestra las entradas

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
  {
    id: '2',
    content: {
      image: null,
      text: 'Una tarde en la playa',
      video: require('../../../assets/ejemplos/ejVideo.mp4'),
      audio: null,
    },
    date: '2024-08-22',
  },
  {
    id: '3',
    content: {
      image: null,
      text: 'Escuchando música en el parque',
      video: null,
      audio: require('../../../assets/ejemplos/ejAudio.m4a'),
    },
    date: '2024-07-14',
  },
  {
    id: '11',
    content: {
      image: null,
      text: 'Reflexionando sobre la vida',
      video: null,
      audio: null,
    },
    date: '2024-09-01',
  },
  {
    id: '12',
    content: {
      image: null,
      text: 'Podcast favorito sobre tecnología',
      video: null,
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
    },
    date: '2024-08-15',
  },
  {
    id: '13',
    content: {
      image: null,
      text: null,
      video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      audio: null,
    },
    date: '2024-07-10',
  },
  {
    id: '14',
    content: {
      image: null,
      text: 'Audio relajante para meditar',
      video: null,
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
    },
    date: '2024-06-20',
  },
  {
    id: '15',
    content: {
      image: null,
      text: 'Diario personal',
      video: null,
      audio: null,
    },
    date: '2024-05-18',
  },
  {
    id: '16',
    content: {
      image: null,
      text: 'Clase de historia grabada',
      video: null,
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
    },
    date: '2024-05-05',
  },
  {
    id: '17',
    content: {
      image: null,
      text: 'Solo un buen día para caminar',
      video: null,
      audio: null,
    },
    date: '2024-04-12',
  },
  {
    id: '18',
    content: {
      image: null,
      text: null,
      video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      audio: null,
    },
    date: '2024-03-30',
  },
  {
    id: '19',
    content: {
      image: null,
      text: 'Pensamientos sobre el futuro',
      video: null,
      audio: null,
    },
    date: '2024-03-01',
  },
  {
    id: '20',
    content: {
      image: null,
      text: 'Conversación interesante sobre ciencia',
      video: null,
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
    },
    date: '2024-02-15',
  }
  // (Continúa con el resto de las entradas...)
];

export default function HomeScreen() {
  const [respuesta, setRespuesta] = useState(''); // Para almacenar la respuesta
  const [inputVisible, setInputVisible] = useState(false); // Controla si el input se muestra
  const buttonPosition = useRef(new Animated.Value(0)).current; // Controla la posición del botón
  const inputWidth = useRef(new Animated.Value(0)).current; // Controla la anchura del input
  const inputOpacity = useRef(new Animated.Value(0)).current; // Controla la opacidad del input

  // Función para manejar el "toggle" del botón e input
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

          {/* Botón "+" centrado inicialmente */}
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
            {/* Pasamos las entradas locales como props a EntryListScreen */}
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
    paddingBottom: 10, // Añadir espacio al final para que el contenido no quede pegado al borde
  },
  questionContainer: {
    backgroundColor: '#ee684b',
    paddingVertical: 15,  // Espacio vertical más amplio
    paddingHorizontal: 10,  // Espacio horizontal más amplio
    borderRadius: 30,
    marginBottom: 10,  // Más espacio entre el título y el input
  },
  questionText: {
    fontSize: 12,  // Tamaño de texto más grande para mayor legibilidad
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
    marginBottom: 20,  // Espaciado adicional entre el input y las entradas
  },
  textInput: {
    minHeight: 40,
    maxHeight: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 15,  // Más espacio interno
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#FFA07A',
    color: 'black',
  },
  addButton: {
    width: 45,  // Botón un poco más grande
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#FFA07A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    marginLeft: 10,  // Separación entre el botón y el input
  },
  entryListContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 5,
  },
});
