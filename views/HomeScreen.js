import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { getCultivos } from '../Storage';

const CultivoCard = ({ cultivo }) => (
  <View style={styles.cultivoContainer}>
    <Text style={styles.titulo}>{`Cultivo: ${cultivo.resultados.semana1.metrosCuadradosInt} Metros Cuadrados`}</Text>

    <Text style={styles.subtitulo}>{`Semana 1-6:`}</Text>
    <Text>{`Tanque A: Canplite - ${cultivo.resultados.semana1.canplite}, Magma - ${cultivo.resultados.semana1.magma}`}</Text>
    <Text>{`Tanque B: Acido Fosforico - ${cultivo.resultados.semana1.acidoFosforico}, Welgro - ${cultivo.resultados.semana1.welgro}, Nutriquimica - ${cultivo.resultados.semana1.nutriquimica}, Sulfato de Magnesio - ${cultivo.resultados.semana1.sulfatoMagnesio}`}</Text>
    <Text>{`Tanque C: Alcaplant - ${cultivo.resultados.semana1.alcaplant}`}</Text>

    <Text style={styles.subtitulo}>{`Semana 7:`}</Text>
    <Text>{`Tanque A: Canplite - ${cultivo.resultados.semana7.canplite}, Magma - ${cultivo.resultados.semana7.magma}`}</Text>
    <Text>{`Tanque B: Acido Fosforico - ${cultivo.resultados.semana7.acidoFosforico}, Welgro - ${cultivo.resultados.semana7.welgro}, Nutriquimica - ${cultivo.resultados.semana7.nutriquimica}, Sulfato de Magnesio - ${cultivo.resultados.semana7.sulfatoMagnesio}`}</Text>
    <Text>{`Tanque C: Alcaplant - ${cultivo.resultados.semana7.alcaplant}`}</Text>

    <Image source={require('../assets/tomate.jpg')} style={styles.imagen} />
  </View>
);

const HomeScreen = ({ route }) => {
  const [cultivoData, setCultivoData] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const data = await getCultivos();
      setCultivoData(data);
    } catch (error) {
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (route.params?.actualizado) {
      fetchData();
    }
  }, [route.params, fetchData]);

  return (
    <ScrollView style={styles.container}>
      {cultivoData ? (
        cultivoData.length > 0 ? (
          cultivoData.map((cultivo, index) => (
            <CultivoCard key={index} cultivo={cultivo} />
          ))
        ) : (
          <Text>No hay cultivos</Text>
        )
      ) : (
        <Text>Cargando...</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cultivoContainer: {
    marginBottom: 16,
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
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  imagen: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginTop: 16,
    borderRadius: 8,
  },
});

export default HomeScreen;

