import { Text, type TextProps, StyleSheet, Button, View } from 'react-native';

export function ThemedText({ navigation }: any) {

  return (
    <>
      <Text style={styles.title}>
        Bienvenido a la aplicación React Native
      </Text>
      <View style={styles.botones}>
        <Button
        title={'Ver Inventario'}
        onPress={() => navigation.navigate('Inventario')}
      />
      <Button
      title={'Ver Ventas'}
      onPress={() => navigation.navigate('Ventas')}
      />
      <Button
      title={'Ver Productos'}
      onPress={() => navigation.navigate('Productos')}
      />
      <Button
      title={'Ver Categorias'}
      onPress={() => navigation.navigate('Categorias')}
      />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    margin: 30,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    backgroundColor:'white',
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  botones: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    display: 'flex',
    gap: 10,
  }
});

