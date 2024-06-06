import { StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createStackNavigator } from '@react-navigation/stack';
import { VentasView } from '@/components/VentasView';
import { ProductosView } from '@/components/ProductosView';
import { CategoriasView } from '@/components/CategoriasView';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Bienvenido">
      <Stack.Screen name="Inicio" component={ThemedText} />

      <Stack.Screen name="Inventario" component={ThemedView} />
      <Stack.Screen name="Ventas" component={VentasView} />
      <Stack.Screen name="Productos" component={ProductosView} />
      <Stack.Screen name="Categorias" component={CategoriasView} />
    </Stack.Navigator>
  );
}
