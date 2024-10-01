import React, { useRef } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ResponsiveGrid } from 'react-native-flexible-grid';
import { FontAwesome } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av';

// Definir las interfaces para el tipado
interface EntryContent {
    image?: string | number;
    text: string;
    video?: string;
    audio?: string;
}

interface Entry {
    id: string;
    content: EntryContent;
    date: string;
}

interface EntryListScreenProps {
    entries: Entry[];
}

const EntryListScreen: React.FC<EntryListScreenProps> = ({ entries }) => {
    const videoRefs = useRef<{ [key: string]: any }>({});  // Referencias para manejar múltiples videos

    // Función que se encarga de controlar la reproducción del video
    const handlePlayPause = (id: string, isPlaying: boolean) => {
        const videoRef = videoRefs.current[id];
        if (videoRef) {
            if (isPlaying) {
                videoRef.pauseAsync();
            } else {
                videoRef.playAsync();
            }
        }
    };

    const renderItem = ({ item }: { item: Entry }) => {
        return (
            <View style={styles.entryContainer}>
                {/* Si tiene video, mostrar el reproductor */}
                {item.content.video ? (
                    <View style={styles.videoContainer}>
                        <Video
                            ref={(ref) => (videoRefs.current[item.id] = ref)} // Almacenar la referencia del video
                            source={{ uri: item.content.video }}
                            style={styles.entryImage}
                            resizeMode={ResizeMode.COVER}  // Usar ResizeMode
                            useNativeControls
                            isLooping
                            onPlaybackStatusUpdate={(status) => {
                                if (status.isLoaded) {
                                    if (!status.isPlaying && status.positionMillis === status.durationMillis) {
                                        handlePlayPause(item.id, true);  // Pausar al finalizar
                                    }
                                } else {
                                    console.log("Error al cargar el video", status);
                                }
                            }}
                        />
                        {/* Botón de play/pausa superpuesto */}
                        <TouchableOpacity
                            style={styles.playButton}
                            onPress={() => handlePlayPause(item.id, false)}
                        >
                            <FontAwesome
                                name="play-circle"
                                size={50}
                                color="rgba(255, 255, 255, 0.8)"
                            />
                        </TouchableOpacity>
                    </View>
                ) : (
                    /* Mostrar imagen si no hay video */
                    item.content.image && (
                        <Image
                            source={typeof item.content.image === 'string' ? { uri: item.content.image } : item.content.image}
                            style={styles.entryImage}
                        />
                    )
                )}

                {/* Texto */}
                <Text style={styles.entryText}>{item.content.text}</Text>

                {/* Mostrar si hay audio */}
                {item.content.audio && <Text style={styles.mediaLabel}>🎵 Audio disponible</Text>}
            </View>
        );
    };

    return (
        <ResponsiveGrid
            keyExtractor={(item) => item.id.toString()}
            maxItemsPerColumn={2}  // Mantén esto en 2 para una mejor disposición
            data={entries}
            renderItem={renderItem}
            style={styles.gridContainer}
        />
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        padding: 10,
    },
    entryContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        minHeight: 200, // Altura mínima consistente para todos los ítems
        width: '100%',
    },
    entryImage: {
        width: 150,  // Tamaño consistente para imágenes y videos
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: '#ddd',  // Placeholder de color si no hay imagen
    },
    videoContainer: {
        position: 'relative',
    },
    playButton: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -25 }, { translateY: -25 }],
    },
    entryText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    mediaLabel: {
        fontSize: 14,
        color: '#666',
    },
});

export default EntryListScreen;
