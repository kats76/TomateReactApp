import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { saveCultivo } from '../Storage';
import * as Notifications from 'expo-notifications';
import { schedulePushNotification } from '../NotificationHandler';


const CrearCultivoScreen = ({ navigation }) => {
  const [metrosCuadrados, setMetrosCuadrados] = useState('');

  const handleGuardarCultivo = async () => {
    // Validar que el campo no esté vacío y que sea un número
    if (!metrosCuadrados || isNaN(metrosCuadrados)) {
      alert('Por favor, ingrese un número válido en el campo de metros cuadrados.');
      return;
    }

    // Calcular fechas
    const currentDate = new Date();
    const dates = [currentDate];

    for (let i = 1; i <= 6; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i * 7);
      dates.push(nextDate);
    }

    const fechas = dates.map(date => date.toISOString()); // Convertir fechas a cadenas ISO
    // Convertir a entero
    const metrosCuadradosInt = parseInt(metrosCuadrados);

    // Realizar los cálculos
// Realizar los cálculos para la semana 1
const canplite1 = (2800 * metrosCuadradosInt) / 1000;
const magma1 = (60 * metrosCuadradosInt) / 1000;
const acidoFosforico1 = (120 * metrosCuadradosInt) / 1000;
const welgro1 = (20 * metrosCuadradosInt) / 1000;
const nutriquimica1 = (1000 * metrosCuadradosInt) / 1000;
const sulfatoMagnesio1 = (290 * metrosCuadradosInt) / 1000;
const alcaplant1 = (250 * metrosCuadradosInt) / 1000;

const semana1 = {
  canplite: canplite1,
  magma: magma1,
  acidoFosforico: acidoFosforico1,
  welgro: welgro1,
  nutriquimica: nutriquimica1,
  sulfatoMagnesio: sulfatoMagnesio1,
  alcaplant: alcaplant1,
  metrosCuadradosInt
};

// Realizar los cálculos para la semana 7
const canplite7 = (6200 * metrosCuadradosInt) / 1000;
const magma7 = (70 * metrosCuadradosInt) / 1000;
const acidoFosforico7 = (130 * metrosCuadradosInt) / 1000;
const welgro7 = (20 * metrosCuadradosInt) / 1000;
const nutriquimica7 = (5000 * metrosCuadradosInt) / 1000;
const sulfatoMagnesio7 = (1820 * metrosCuadradosInt) / 1000;
const alcaplant7 = (254 * metrosCuadradosInt) / 1000;

const semana7 = {
  canplite: canplite7,
  magma: magma7,
  acidoFosforico: acidoFosforico7,
  welgro: welgro7,
  nutriquimica: nutriquimica7,
  sulfatoMagnesio: sulfatoMagnesio7,
  alcaplant: alcaplant7,
};

// Crear objeto con los resultados
 
 const resultados = {
  semana1: { ...semana1 }, 
  semana7: { ...semana7 }, 
  fechas: fechas,
};

    // Guardar los resultados junto con los metros cuadrados
    const cultivoData = {
      resultados,
    };

    // Guardar el cultivo
    await saveCultivo(cultivoData);

// Iterar a través de las fechas y programar notificaciones para cada semana
for (let i = 0; i < fechas.length; i++) {
  const notificacionCultivo = {
    title: `Semana ${i + 1} `,
    body: getNotificationContent(i === 6 ? semana7 : semana1),
    data: {
      semana: i === 6 ? semana7 : semana1,
      fecha: fechas[i],
    },
    trigger: {
      seconds: Date.parse(fechas[i]) / 1000, // Convierte la fecha a segundos para el trigger
    },
  };

  // Programar la notificación utilizando la función del primer código
  await schedulePushNotification(notificacionCultivo);
}

// Función para obtener el contenido del cuerpo de la notificación
function getNotificationContent(semanaData) {
  return `
    Tanque A: Canplite - ${semanaData.canplite},
    Magma - ${semanaData.magma}
    Tanque B: Acido Fosforico - ${semanaData.acidoFosforico},
    Welgro - ${semanaData.welgro},
    Nutriquimica - ${semanaData.nutriquimica},
    Sulfato de Magnesio - ${semanaData.sulfatoMagnesio}
    Tanque C: Alcaplant - ${semanaData.alcaplant}
  `;
}
    // Navegar de vuelta a Home y enviar la señal de actualización
    navigation.navigate('Cultivos', { actualizado: true });
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.title}>Cultivo</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Ingrese los metros cuadrados del cultivo:</Text>
        <TextInput
          style={styles.input}
          placeholder=" (m^2)"
          keyboardType="numeric"
          value={metrosCuadrados}
          onChangeText={(text) => setMetrosCuadrados(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleGuardarCultivo}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ffff',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 64,
    color: '#3b3b3b',
  },
  formContainer: {
    width: '80%',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 16,
    color: '#000', 
    textAlign: 'center',
  },
  input: {
    marginTop: 16,
    height: 55,
    fontSize: 18,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 26,
    paddingLeft: 8,
    paddingRight: 8,
    width: '100%',
    color: '#333',
    borderRadius: 9,
  },
  button: {
    backgroundColor: '#4285F4', 
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 9,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CrearCultivoScreen;
