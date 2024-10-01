import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Animated, Easing } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import BackgroundWrapper from '@/components/background';
import Header from '../../../components/Header';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import EntryListScreen from './listEntry'; // Asegúrate de que la ruta sea correcta

const localAudio = require('../../../assets/ejemplos/ejAudio.m4a');
const localVideo = require('../../../assets/ejemplos/ejVideo.mp4');
const localImage = require('../../../assets/ejemplos/persona.jpg');

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
    id: '4',
    content: {
      image: 'https://via.placeholder.com/200',
      text: 'Explorando la ciudad',
      video: undefined,
      audio: undefined,
    },
    date: '2024-06-01',
  },
  {
    id: '5',
    content: {
      image: undefined,
      text: 'Viaje en bicicleta por el campo',
      video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      audio: undefined,
    },
    date: '2024-05-20',
  },
  {
    id: '6',
    content: {
      image: 'https://via.placeholder.com/150',
      text: 'Un paseo en el bosque',
      video: undefined,
      audio: undefined,
    },
    date: '2024-05-15',
  },
  {
    id: '7',
    content: {
      image: undefined,
      text: 'Navegando en un barco',
      video: undefined,
      audio: undefined,
    },
    date: '2024-04-10',
  },
  {
    id: '8',
    content: {
      image: 'https://via.placeholder.com/150',
      text: 'Un día en el zoológico',
      video: undefined,
      audio: undefined,
    },
    date: '2024-03-05',
  },
  {
    id: '9',
    content: {
      image: undefined,
      text: 'Picnic en el parque',
      video: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
      audio: undefined,
    },
    date: '2024-02-14',
  },
  {
    id: '10',
    content: {
      image: 'https://via.placeholder.com/150',
      text: 'Una caminata por la montaña',
      video: undefined,
      audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    },
    date: '2024-01-28',
  },
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
  },
  questionContainer: {
    backgroundColor: '#ee684b',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'center',
  },
  textInput: {
    minHeight: 40,
    maxHeight: 60,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#FFA07A',
    color: 'black',
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFA07A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  entryListContainer: {
    flex: 1,
    width: '100%',
  },
});
