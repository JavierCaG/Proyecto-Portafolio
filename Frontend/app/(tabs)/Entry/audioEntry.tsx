import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AudioEntryProps {
    onPress: () => void; // Define el tipo de onPress como una función que no retorna nada
  }
  
  const AudioEntry: React.FC<AudioEntryProps> = ({ onPress }) => (
    <View style={styles.smallItem}>
      <View style={styles.audioContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.audioText}>🎵 Reproducir audio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  smallItem: {
    width: '100%',
    backgroundColor: '#f8c291',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  audioContainer: {
    backgroundColor: '#f8c291',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  audioText: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AudioEntry;
