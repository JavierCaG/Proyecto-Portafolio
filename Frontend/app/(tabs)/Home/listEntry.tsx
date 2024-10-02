import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { ResponsiveGrid } from 'react-native-flexible-grid';

// Definir las interfaces para el tipado
interface EntryContent {
    image?: string | number | null;
    text?: string | null;
    video?: string | number | null;
    audio?: string | null;
}

interface Entry {
    id: string;
    content: EntryContent;
    date: string;
}

interface EntryListScreenProps {
    entries: Entry[];
}

// Función para obtener un tamaño aleatorio solo para imágenes y videos
const getRandomResize = () => {
    const sizes = [
        { widthRatio: 1, heightRatio: 1 }, // Pequeño
        { widthRatio: 2, heightRatio: 2 }, // Mediano
        { widthRatio: 3, heightRatio: 3 }, // Grande
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
};

const EntryListScreen: React.FC<EntryListScreenProps> = ({ entries }) => {
    const renderItem = ({ item }: { item: Entry }) => {
        // Si el contenido tiene imagen o video, aplicamos un tamaño aleatorio
        const resize = item.content.image || item.content.video ? getRandomResize() : { widthRatio: 1, heightRatio: 1 };

        return (
            <View
                style={[
                    styles.boxContainer,
                    {
                        flex: resize.widthRatio,
                        height: item.content.image || item.content.video ? 150 * resize.heightRatio : 'auto',
                    },
                ]}
            >
                {/* Contenedor de imagen */}
                {item.content.image && (
                    <View style={styles.imageContainer}>
                        <Image
                            source={typeof item.content.image === 'string' ? { uri: item.content.image } : item.content.image}
                            style={styles.box}
                            resizeMode="cover"
                        />
                        {/* Si hay texto o audio acompañando la imagen, aplica estilo específico */}
                        {(item.content.text || item.content.audio) && (
                            <View style={styles.overlayContent}>
                                {item.content.text && (
                                    <Text style={styles.overlayText}>{item.content.text}</Text>
                                )}
                                {item.content.audio && (
                                    <Text style={styles.overlayAudioText}>🎵 Audio disponible</Text>
                                )}
                            </View>
                        )}
                    </View>
                )}

                {/* Contenedor de video */}
                {item.content.video && (
                    <View style={styles.videoContainer}>
                        <Video
                            source={typeof item.content.video === 'string' ? { uri: item.content.video } : item.content.video}
                            style={styles.box}
                            resizeMode={ResizeMode.COVER}
                            useNativeControls
                            isLooping
                        />
                        {/* Si hay texto o audio acompañando el video, aplica estilo específico */}
                        {(item.content.text || item.content.audio) && (
                            <View style={styles.overlayContent}>
                                {item.content.text && (
                                    <Text style={styles.overlayText}>{item.content.text}</Text>
                                )}
                                {item.content.audio && (
                                    <Text style={styles.overlayAudioText}>🎵 Audio disponible</Text>
                                )}
                            </View>
                        )}
                    </View>
                )}

                {/* Contenedor para texto o audio que no tienen imagen ni video */}
                {(!item.content.image && !item.content.video) && (
                    <View style={styles.textAudioContainer}>
                        {item.content.text && (
                            <Text style={styles.text}>{item.content.text}</Text>
                        )}
                        {item.content.audio && (
                            <Text style={styles.audioText}>🎵 Audio disponible</Text>
                        )}
                    </View>
                )}
            </View>
        );
    };

    return (
        <ResponsiveGrid
            maxItemsPerColumn={2}
            data={entries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            style={styles.gridContainer}
        />
    );
};

const styles = StyleSheet.create({
    gridContainer: {
        flex: 1,
        paddingHorizontal: 10,
        paddingBottom: 20,
    },
    boxContainer: {
        marginHorizontal: '1%',
        marginVertical: 10,
        padding: 5,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    videoContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    overlayContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro transparente
        padding: 5,
    },
    overlayText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
    overlayAudioText: {
        color: '#fff',
        fontSize: 10,
        textAlign: 'center',
        marginTop: 2,
    },
    textAudioContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    text: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },
    audioText: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default EntryListScreen;
