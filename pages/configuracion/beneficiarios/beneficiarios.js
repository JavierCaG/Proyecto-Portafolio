import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles';

const beneficiaries = [
  {
    id: '1',
    name: 'Naomi Sebastián',
    relation: 'Esposa',
    description: 'Esa persona especial que me ha querido apoyar incondicionalmente.',
    image: 'https://via.placeholder.com/150x150.png?text=Naomi',
  },
  {
    id: '2',
    name: 'Ricardo Ramírez',
    relation: 'Hijo',
    description: 'Mi hijo que me da fuerzas todos los días para seguir adelante.',
    image: 'https://via.placeholder.com/150x150.png?text=Ricardo',
  },
  {
    id: '3',
    name: 'Miguel Támara',
    relation: 'Mejor Amigo',
    description: 'Amigo leal, siempre ahí cuando lo necesito.',
    image: 'https://via.placeholder.com/150x150.png?text=Miguel',
  },
  {
    id: '4',
    name: 'Scarlett Botachelli',
    relation: 'Amiga',
    description: 'La amiga que nunca falla, siempre con buenos consejos.',
    image: 'https://via.placeholder.com/150x150.png?text=Scarlett',
  },
];

const Beneficiarios = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={{ width: 60, height: 60, borderRadius: 30, marginRight: 15 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.cardText}>{`${item.name} - ${item.relation}`}</Text>
        <Text>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administrar Beneficiarios</Text>
      <FlatList
        data={beneficiaries}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agregar Beneficiario</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Beneficiarios;
