import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contenedor principal
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#002b55',
  },

  // Títulos generales
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#fff',
  },

  // Botones reutilizables
  button: {
    backgroundColor: '#00bcd4',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  // Opciones de configuración
  optionsContainer: {
    flex: 1,
  },
  optionDescription: {
    fontSize: 14,
    color: '#f0f0f0',
    marginTop: 5,
  },

  // Cabecera para la pantalla de configuración
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  // Estilo específico para la pantalla de configuración
  configHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ff6f00',
    textAlign: 'center',
    marginBottom: 30,
  },

  // Botón para cerrar sesión
  logoutButton: {
    backgroundColor: '#ff0000',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },

  // Estilo para los inputs (AgregarTestigo y similares)
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },

  // Tarjetas reutilizables
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    color: '#333',
  },

    // Estilos para la página de Historial
    eventContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      },
      eventImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
      },
      eventTextContainer: {
        flex: 1,
      },
      eventDate: {
        fontSize: 14,
        color: '#999',
        marginBottom: 5,
      },
      eventTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      eventDescription: {
        fontSize: 16,
        color: '#555',
      },
});

export default styles;
