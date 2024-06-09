import { StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { createStackNavigator } from '@react-navigation/stack';
import { VentasView } from '@/components/VentasView';
import { ProductosView } from '@/components/ProductosView';
import { CategoriasView } from '@/components/CategoriasView';
import { NoticiasView } from '@/components/NoticiasView';

// import { Button } from '@rneui/base';
// import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Bienvenido">
      <Stack.Screen name="Inicio" component={ThemedText} options={{ headerShown: false}} />

      <Stack.Screen name="Inventario" component={ThemedView} options={{ headerShown: false}} />
      <Stack.Screen name="Ventas" component={VentasView} options={{ headerShown: false}} />
      <Stack.Screen name="Productos" component={ProductosView} options={{ headerShown: false}} />
      <Stack.Screen name="Categorias" component={CategoriasView} options={{ headerShown: false}} />

      <Stack.Screen name="Noticias" component={NoticiasView} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}
