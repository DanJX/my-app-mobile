import { Card, Text, Button} from '@rneui/themed';
import { StyleSheet, View, ScrollView } from 'react-native';

export function NoticiasView({ navigation }: any) {

    const data = [
        {
            titulo: 'Noticia 1',
            categoria : 'Categoria 1',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  1',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        },
        {
            titulo: 'Noticia 2',
            categoria : 'Categoria 2',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  2',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        },
        {
            titulo: 'Noticia 3',
            categoria : 'Categoria 3',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  3',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        },
        {
            titulo: 'Noticia 4',
            categoria : 'Categoria 4',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  4',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        },
        {
            titulo: 'Noticia 5',
            categoria : 'Categoria 5',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  5',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        },
        {
            titulo: 'Noticia 6',
            categoria : 'Categoria 6',
            contenido: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales auctor erat, id rhoncus ante molestie in. Praesent feugiat orci ligula, vitae sodales massa consectetur malesuada. Pellentesque augue nisi, malesuada eu tincidunt non, volutpat nec felis. Ut ultrices dapibus mi ac venenatis. Curabitur eleifend turpis eget malesuada aliquam. Nullam vehicula, nibh eu fringilla posuere, magna erat scelerisque nulla, in iaculis ligula neque eu elit. Cras vel varius magna. Cras dignissim blandit ornare. Donec egestas leo eget lacus feugiat mattis. Curabitur at tincidunt nunc.  6',
            imagen: 'https://media.istockphoto.com/id/1147544807/es/vector/no-imagen-en-miniatura-gr%C3%A1fico-vectorial.jpg?s=612x612&w=0&k=20&c=Bb7KlSXJXh3oSDlyFjIaCiB9llfXsgS7mHFZs6qUgVk=',
        }
    ]

    return (
        <View>
            <View>
                <Text style={styles.title}>
                    Noticias
                </Text>
            </View>
            <ScrollView style={{ height:720}}>
                {data.map((d, index) => (
                    <Card key={index}>
                        <Text style={styles.titleNoticia}>{d.titulo}</Text>
                        <Card.Image source={{ uri: d.imagen }} />
                        <Text>{d.contenido}</Text>
                    </Card>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 32,
        backgroundColor: '#1B4965',
        color: 'white',
        padding: 20,
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    titleNoticia: {
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 24,
        padding: 10,
        textAlign: 'center',
    }
});

