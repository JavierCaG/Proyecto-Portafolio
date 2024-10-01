import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface ImageEntryProps {
  image: string | ImageSourcePropType; // El tipo de image puede ser un string (URL) o un objeto (imagen local)
}

const ImageEntry: React.FC<ImageEntryProps> = ({ image }) => (
  <View style={styles.largeItem}>
    <Image
      source={typeof image === 'string' ? { uri: image } : image} // Si es una URL, la convierte en un objeto { uri: }
      style={styles.image}
      resizeMode="cover"
    />
  </View>
);

const styles = StyleSheet.create({
  largeItem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageEntry;
