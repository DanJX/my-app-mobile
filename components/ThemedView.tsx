import { Text,View, type TextProps, StyleSheet, ViewProps} from 'react-native';


import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProps} >
    <Text style={styles.title}>
      Inventario de la aplicacion
    </Text>
  </View>;
}

const styles = StyleSheet.create({

  title:{
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    backgroundColor:'white',
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 50,
  }

});
