import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, ResizeMode, AVPlaybackSource } from 'expo-av'; // Asegúrate de importar los tipos adecuados

interface VideoEntryProps {
  video: string | AVPlaybackSource; // Definimos el tipo de video
}

const VideoEntry: React.FC<VideoEntryProps> = ({ video }) => (
  <View style={styles.largeItem}>
    <Video
      source={typeof video === 'string' ? { uri: video } : video} // Comprueba si es un string (URL) o un objeto
      style={styles.video}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
    />
  </View>
);

const styles = StyleSheet.create({
  largeItem: {
    width: '100%',
    height: 200, // Ajusta según tu necesidad
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoEntry;
