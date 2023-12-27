import * as SecureStore from 'expo-secure-store';

// Variable para almacenar la lista de cultivos
let cultivosList = [];

const saveCultivo = async (cultivoData) => {
  try {
    // Agregar el nuevo cultivo a la lista
    cultivosList.push(cultivoData);

    // Guardar la lista actualizada en el almacenamiento local
    await SecureStore.setItemAsync('cultivosList', JSON.stringify(cultivosList));

  } catch (error) {
  }
};

const getCultivos = async () => {
  try {
    // Obtener la lista de cultivos desde el almacenamiento local
    const storedCultivosList = await SecureStore.getItemAsync('cultivosList');

    // Parsear la lista o devolver una lista vacía si no hay datos almacenados aún
    cultivosList = storedCultivosList ? JSON.parse(storedCultivosList) : [];

    return cultivosList;
  } catch (error) {
    return [];
  }
};

export { saveCultivo, getCultivos};
