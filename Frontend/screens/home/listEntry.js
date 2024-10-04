import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { ResponsiveGrid } from 'react-native-flexible-grid';

export default function EntryListScreen({ entries }) {
    const [data, setData] = useState([]);

    // Generar los datos con imágenes o videos o solo texto
    const generateData = () => {
        return entries.map((entry) => ({
            id: String(entry.id),
            media: entry.content.image ?? entry.content.video, // Prioridad a imagen o video
            isVideo: Boolean(entry.content.video),
            text: entry.content.text ?? '', // Mostrar texto si está disponible
            date: entry.date,  // Añadimos la fecha
            heightRatio: entry.content.image || entry.content.video ? 1.5 : 0.5, // Si hay media, más alto
        }));
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={[styles.boxContainer, { height: (item.heightRatio ?? 1) * 150 }]} // Ajustar la altura según si hay media
            >
                {/* Mostrar la fecha arriba sin fondo contenedor cuando hay media */}
                {item.media ? (
                    <Text style={styles.dateTextTop}>{item.date}</Text>
                ) : (
                    <Text style={styles.dateTextBottom}>{item.date}</Text>
                )}

                {item.isVideo ? (
                    item.media && (
                        <Video
                            source={typeof item.media === 'string' ? { uri: item.media } : item.media}
                            style={styles.box}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}  // Ajustamos el video al contenedor
                            isLooping
                        />
                    )
                ) : item.media ? (
                    <Image
                        source={typeof item.media === 'string' ? { uri: item.media } : item.media}
                        style={styles.box}
                        resizeMode="cover"
                    />
                ) : (
                    <View style={styles.textOnlyContainer}>
                        <Text style={styles.textOnly}>{item.text}</Text>
                        <Text style={styles.dateText}>{item.date}</Text>
                    </View>
                )}

                {/* Overlay del texto solo si hay media */}
                {item.text && item.media && (
                    <View style={styles.overlayBottom}>
                        <Text style={styles.overlayText}>{item.text}</Text>
                    </View>
                )}
            </View>
        );
    };

    useEffect(() => {
        setData(generateData());
    }, [entries]);

    return (
        <View style={{ flex: 1 }}>
            <ResponsiveGrid
                maxItemsPerColumn={2} // Dos columnas
                data={data}
                renderItem={renderItem}
                showScrollIndicator={false}
                style={{ padding: 0 }}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    boxContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
    },
    box: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    textOnlyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#C19A6B', // Fondo para cuando es solo texto
    },
    textOnly: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center',
    },
    dateTextTop: {
        position: 'absolute',
        top: 10,  // Coloca la fecha en la parte superior para imágenes o videos
        left: 10,
        fontSize: 12,
        color: '#fff',  // Blanco para contraste
        backgroundColor: 'rgba(0, 0, 0, 0.3)',  // Fondo translúcido para mayor legibilidad
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 5,
        zIndex: 1,  // Asegura que esté sobre el contenido
    },
    dateTextBottom: {
        position: 'absolute',
        bottom: 10,  // Coloca la fecha en la parte inferior centrada para texto solo
        left: 0,
        right: 0,
        fontSize: 12,
        color: '#333',  // Color más oscuro para mayor contraste en el fondo de texto
        textAlign: 'center',
        backgroundColor: 'transparent',  // Sin fondo en este caso
    },
    overlayBottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        paddingVertical: 10,
        paddingHorizontal: 5,
    },
    overlayText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    dateText: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
        marginTop: 5, // Separar la fecha del resto del contenido
    },
});
