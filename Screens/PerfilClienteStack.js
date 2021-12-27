import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';

const PerfilClienteStack = ({ navigation }) => {

    // const tiendas = navigation.getParam('tiendas');

    const id_tienda = navigation.getParam('id_tienda');
    const title = navigation.getParam('title');
    const description = navigation.getParam('description');
    const logo = navigation.getParam('logo');
    const productos = navigation.getParam('produc');

    return(
        <View style={styles.container}>
            <Image style={ styles.photoPortada } source={{uri: logo}} />
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.descripcion}>{description}</Text>
                </View>    

                <View style={styles.containerProducts}>         
                    <FlatList 
                        data={productos}
                        keyExtractor={x => x.id_produc}
                        renderItem={({item}) => {
                            return(
                                <View style={styles.forma}>
                                 <Image style={styles.photosProduc} source={{uri: item.img}} />
                                </View>
                            )
                        }}
                    />
                </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 5,
        // backgroundColor: 'blue'
    },
    photoPortada: {
        width: '99%',
        height: 200,
        borderRadius: 15,
    },
    info: {
        // flex: 1,
        alignSelf: 'stretch',
        marginHorizontal: 10,
        // backgroundColor: 'green'
    },
    title: {
        fontSize: 30,
        textAlign: 'left',
        marginTop: 10,
        // backgroundColor: 'red'
    },
    descripcion: {
        color: 'grey',
        textAlign: 'justify',
    },
    photosProduc: {
        width: 100,
        height: 100,
        borderRadius: 15,
        margin: 10,
    },
    containerProducts: {
        flex: 1,
        flexDirection: 'row',
        // alignSelf: 'stretch',
        backgroundColor: '#ccc',
    },
    forma: {
        flex: 1,
        flexDirection: 'row',
        // alignSelf: 'stretch',
        // width: 120,
        // height: 120,
        // backgroundColor: 'red',
        // alignSelf: 'flex-start'
    }
})

export default PerfilClienteStack;