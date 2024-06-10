import { StyleSheet, View, ScrollView } from 'react-native';
import { Card, Text, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

export function NoticiasView({ navigation }: any) {

    const data = [
        {
            titulo: 'Noticia 1',
            fecha: 'March 20 2024',
            categoria: 'Categoria 1',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'https://dam.ngenespanol.com/wp-content/uploads/2019/07/Costa-Rica-Naturaleza-770x514.png',
        },
        {
            titulo: 'Noticia 2',
            fecha: 'March 20 2024',
            categoria: 'Categoria 2',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'https://static.nationalgeographic.es/files/styles/image_3200/public/03-polar-bear-hunting-2011080852.jpg?w=1900&h=1351',
        },
        {
            titulo: 'Noticia 3',
            fecha: 'March 20 2024',
            categoria: 'Categoria 3',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'https://concepto.de/wp-content/uploads/2019/12/basquetbol-baloncesto-e1575657106339.jpg',
        },
        {
            titulo: 'Noticia 4',
            fecha: 'March 20 2024',
            categoria: 'Categoria 4',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'data:image/jpeg;base64,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',
        },
        {
            titulo: 'Noticia 5',
            fecha: 'March 20 2024',
            categoria: 'Categoria 5',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'https://tourscancun.org/cdn/shop/products/actividades-en-xel-ha-6.jpg?v=1562172001',
        },
        {
            titulo: 'Noticia 6',
            fecha: 'March 20 2024',
            categoria: 'Categoria 6',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada.',
            imagen: 'https://diario.mx/jrz/media/uploads/galeria/2024/06/10/20240610072913638-0-2181706.jpg',
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Noticias</Text>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {data.map((d, index) => (
                    <Card containerStyle={styles.card} key={index}>
                        <View style={styles.boxImage}>
                            <Text style={styles.titleImg}>News</Text>
                            <Card.Image style={styles.image} source={{ uri: d.imagen }} />
                        </View>
                        <Text style={styles.dateNoticia}>{d.fecha}</Text>
                        <Card.Title style={styles.titleNoticia}>{d.titulo}</Card.Title>
                        <Text style={styles.content}>{d.contenido}</Text>
                        <View style={styles.boxButton}>
                            <Button
                                icon={<Icon name="angle-right" size={15} style={styles.icon} />}
                                iconRight
                                title="Leer más"
                                titleStyle={styles.buttonTitle}
                                buttonStyle={styles.button}
                                type='clear'
                                onPress={() => navigation.navigate('DetalleNoticia', { noticia: d })}
                            />
                        </View>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        backgroundColor: '#1B4965',
        color: 'white',
        padding: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    scrollView: {
        paddingBottom: 20,
    },
    card: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    dateNoticia: {
        fontSize: 14,
        paddingTop: 10,
        paddingHorizontal: 20,
        textAlign: 'left',
        color: '#bfbfbf',
    },
    titleNoticia: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 10,
        paddingHorizontal: 20,
        textAlign: 'left',
    },
    boxImage: {
        position: 'relative',
    },
    image: {
        borderRadius: 10,
        height: 200,
    },
    titleImg:{
        position: 'absolute',
        left: 20,
        top: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        zIndex: 1,
        textShadowColor: '#000',  // Color de la sombra
        textShadowOffset: { width: 1, height: 1 },  // Desplazamiento de la sombra
        textShadowRadius: 4,  // Radio de desenfoque de la sombra
    },
    content: {
        fontSize: 16,
        paddingHorizontal: 20,
        textAlign: 'justify',
    },
    icon: {
        color: '#1B4965',
        paddingHorizontal: 10,
    },
    boxButton: {
        alignItems: 'flex-end',
    },
    button: {
        backgroundColor: 'transparent',
        borderBottomWidth: 0.5,
        borderBottomColor: '#1B4965',
        borderRadius: 20,
        width: 100,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    buttonTitle: {
        color: '#1B4965',
    },
});

