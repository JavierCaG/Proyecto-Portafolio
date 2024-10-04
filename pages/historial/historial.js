import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import globalStyles from '../styles';  // Importar los estilos globales

const events = [
  {
    id: '1',
    title: 'Cumpleaños',
    description: 'Mi gente me estaba esperando con una fiesta sorpresa, fue muy emotivo',
    date: '12 Julio 2020',
    image: 'https://via.placeholder.com/150x150.png?text=Cumpleaños',
  },
  {
    id: '2',
    title: 'Cumpleaños de mi hija',
    description: 'Le quise dar una sorpresa a nuestra hija y quedó muy contenta',
    date: '28 Agosto 2020',
    image: 'https://via.placeholder.com/150x150.png?text=Cumpleaños+hija',
  },
  {
    id: '3',
    title: 'Boda de David',
    description: 'Al David se le ocurrió casarse el día de su cumpleaños, más alegría por mi pana',
    date: '30 Septiembre 2020',
    image: 'https://via.placeholder.com/150x150.png?text=Boda',
  },
  {
    id: '4',
    title: 'Primavera Sound',
    description: 'Fuimos al Primavera Sound con mi hermana para su cumpleaños y fue un día increíble',
    date: '12 Noviembre 2020',
    image: 'https://via.placeholder.com/150x150.png?text=Primavera+Sound',
  },
];

const Historial = () => {
  const renderItem = ({ item }) => (
    <View style={globalStyles.eventContainer}>
      <Image source={{ uri: item.image }} style={globalStyles.eventImage} />
      <View style={globalStyles.eventTextContainer}>
        <Text style={globalStyles.eventDate}>{item.date}</Text>
        <Text style={globalStyles.eventTitle}>{item.title}</Text>
        <Text style={globalStyles.eventDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Historial</Text>
      <FlatList
        data={events}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Historial;
