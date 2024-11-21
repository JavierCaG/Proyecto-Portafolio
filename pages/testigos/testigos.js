import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import globalStyles from '../styles';
import { useNavigation } from '@react-navigation/native';

const witnesses = [
  {
    id: '1',
    name: 'Juan Pérez',
    number: '555-1234',
    circle: 'Amigo cercano',
    image: 'https://via.placeholder.com/150x150.png?text=Juan',
  },
  {
    id: '2',
    name: 'María García',
    number: '555-5678',
    circle: 'Familiar',
    image: 'https://via.placeholder.com/150x150.png?text=Maria',
  },
  {
    id: '3',
    name: 'Carlos Sánchez',
    number: '555-9876',
    circle: 'Compañero de trabajo',
    image: 'https://via.placeholder.com/150x150.png?text=Carlos',
  },
  {
    id: '4',
    name: 'Luisa Martínez',
    number: '555-6543',
    circle: 'Vecina cercana',
    image: 'https://via.placeholder.com/150x150.png?text=Luisa',
  },
];

const Testigos = () => {
  const naviation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={globalStyles.card}>
      <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }} />
      <View style={{ flex: 1 }}>
        <Text style={globalStyles.cardText}>{item.name}</Text>
        <Text>Número: {item.number}</Text>
        <Text>Círculo cercano: {item.circle}</Text>
      </View>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Testigos asociados</Text>
      <FlatList
        data={witnesses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={globalStyles.button} onPress={()=> naviation.navigate('AdministrarTestigos')}>
        <Text style={globalStyles.buttonText}>Administrar testigos</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Testigos;
