import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const PlagaCard = ({ titulo, imagen, informacion }) => (
  <View style={styles.card}>
    <Text style={styles.titulo}>{titulo}</Text>
    <Image source={imagen} style={styles.imagen} />
    <Text style={styles.informacion}>{informacion}</Text>
  </View>
);

const InformacionPlagasScreen = () => (
  <ScrollView style={styles.container}>
    <PlagaCard
      titulo="Mosca blanca"
      imagen={require('../assets/mosca_blanca.jpeg')}
      informacion="Pequeñas moscas de color blanco, síntomas aparición de manchas negras y aceitosas en las hojas. Posible manejo de la plaga aplicar por riego por 20 días colocar 12 g/m2 de Actara por cada gramo de Acta un 1 litro de agua."
    />

    <PlagaCard
      titulo="Pulgón"
      imagen={require('../assets/pulgon.jpeg')}
      informacion="Insecto pequeño de diferentes colores que se ubica en los brotes y tallos. Posible manejo de la plaga aplicar por riego por 20 días 0,12 g/m2 de Actara."
    />

    <PlagaCard
      titulo="Tizón tardío"
      imagen={require('../assets/tiznon_tardio.jpeg')}
      informacion="Síntomas manchas en las hojas de color pardo y frutos pequeños con polvillo blanco. Posible solución colocar 350 gramos de Mancozeb por cada 100 litros de agua y realizar el riego en intervalos de 10 a 14 días."
    />

    <PlagaCard
      titulo="Tizón Temprano"
      imagen={require('../assets/tiznon_temprano.jpeg')}
      informacion="Síntomas pequeñas manchas pardas tanto en el tallo, manchas marrones en los frutos y caída de flores. Posible solución colocar 350 gramos de Mancozeb por cada 100 litros de agua y realizar el riego en intervalos de 10 a 14 días."
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  imagen: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
    borderRadius: 8,
  },
  informacion: {
    fontSize: 16,
  },
});

export default InformacionPlagasScreen;


