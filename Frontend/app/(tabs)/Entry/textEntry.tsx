import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TextEntryProps {
  text: string;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'; // Opciones de truncamiento
}

const TextEntry: React.FC<TextEntryProps> = ({ text, numberOfLines, ellipsizeMode }) => {
  return (
    <Text 
      style={styles.text} 
      numberOfLines={numberOfLines} 
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ff9900',
  },
});

export default TextEntry;
