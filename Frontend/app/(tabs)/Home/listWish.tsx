import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, Image, TouchableOpacity, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av'; // Asegúrate de tener expo-av instalado
import MasonryList from '@react-native-seoul/masonry-list'; // Masonry list

// Define la interfaz Entry
interface Entry {
    id: string;
    content: {
        image?: string | null;
        video?: string | null;
        audio?: string | null;
        text?: string | null;
    };
    date: string;
}

// Define la interfaz EntryListScreenProps
interface EntryListScreenProps {
    entries: Entry[];
}

const EntryListScreen: React.FC<EntryListScreenProps> = ({ entries }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState<Entry['content'] | null>(null); // Contendrá la imagen o video actual

    const openModal = (content: Entry['content']) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setModalContent(null);
    };

    return (
        <View style={styles.container}>
            <MasonryList
                data={entries}
                keyExtractor={(item: Entry) => item.id}
                numColumns={2}
                renderItem={({ item }: any) => (
                    <View key={item.id} style={styles.entryContainer}>
                        <TouchableOpacity onPress={() => openModal(item.content)} style={styles.cardContent}>
                            {item.content.image && (
                                <Image source={{ uri: item.content.image }} style={styles.imageThumbnail} />
                            )}
                            {item.content.video && (
                                <Video
                                    source={{ uri: item.content.video }}
                                    style={styles.videoThumbnail}
                                    useNativeControls
                                    resizeMode={ResizeMode.CONTAIN}
                                />
                            )}
                            {/* Manejo del audio */}
                            {item.content.audio && (
                                <TouchableOpacity onPress={() => console.log('Reproducir audio')}>
                                    <Text style={styles.audioButton}>Reproducir Audio</Text>
                                </TouchableOpacity>
                            )}
                            {/* Manejo del texto */}
                            {item.content.text && (
                                <Text numberOfLines={5} ellipsizeMode="tail" style={styles.textEntry}>
                                    {item.content.text}
                                </Text>
                            )}
                        </TouchableOpacity>
                        <Text style={styles.date}>{item.date}</Text>
                    </View>
                )}
            />




            {/* Modal para mostrar la imagen o el video */}
            <Modal visible={modalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {modalContent?.image && (
                            <Image source={{ uri: modalContent.image }} style={styles.fullscreenImage} />
                        )}
                        {modalContent?.video && (
                            <Video
                                source={{ uri: modalContent.video }}
                                style={styles.fullscreenVideo}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN} // Usa ResizeMode aquí también
                            />
                        )}
                        <Button title="Cerrar" onPress={closeModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    entryContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        padding: 10,
        marginHorizontal: 5, // Espaciado horizontal entre columnas
        marginBottom: 5, // Espaciado vertical entre filas
        flexGrow: 1, // Permitir que crezca
    },
    cardContent: {
        marginBottom: 0,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    imageThumbnail: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    videoThumbnail: {
        width: '100%',
        height: 150,
    },
    date: {
        marginTop: 5,
        textAlign: 'right',
        color: '#7f8c8d',
        fontSize: 12,
    },
    audioButton: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#ff9900',
        textAlign: 'center',
        marginTop: 10,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Fondo oscuro semi-transparente
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: '90%',
        height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textEntry: {
        fontSize: 14,
        color: '#333',
        marginTop: 10,
    },
    fullscreenImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    fullscreenVideo: {
        width: '100%',
        height: '100%',
    },
});

export default EntryListScreen;
