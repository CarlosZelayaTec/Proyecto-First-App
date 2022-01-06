import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity } from 'react-native';
import ListaProductos from '../Components/ListaProductos';
import { MaterialIcons } from '@expo/vector-icons';

const PerfilClienteStack = ({ navigation }) => {

    // const [ loadLogo, setLoadLogo ] = useState(true);

    const id_tienda = navigation.getParam('id_tienda');
    const title = navigation.getParam('title');
    const description = navigation.getParam('description');
    const logo = navigation.getParam('logo');
    const productos = navigation.getParam('produc');
    const load = navigation.getParam('load');

    const headerList = () => {
        
        const [icon, setIcon] = useState('favorite-outline');

        const changeIcon = () => {
            if(icon === 'favorite-outline'){
                setIcon('favorite')
            }else{
                setIcon('favorite-outline')
            }
        }

        return(
            <>
            <Image style={ styles.photoPortada } source={{uri: logo}} />

                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.descripcion}>{description}</Text>
                </View>    

                <View style={styles.botonFavs} >
                    <TouchableOpacity onPress={changeIcon}>
                        <MaterialIcons name={icon} size={40}/>
                        {/* <Text>Favoritos</Text> */}
                    </TouchableOpacity>
                </View>
                </>
        )
    }

    return(
        <View style={styles.container}>

                    <FlatList 
                    style={styles.containerProducts}
                        data={productos}
                        // numColumns={'2'}
                        keyExtractor={x => x.id_produc}
                        ListHeaderComponent={headerList}
                        renderItem={({item}) => <ListaProductos productos={item.img} title={item.nombreProducto} 
                                            descripcionProduc={item.descripcionProducto} precio={item.precio} load={load} />
                                        }
                    />
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
    containerProducts: {
        flex: 1,
        alignSelf: 'stretch',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        // borderWidth: 1,
        // borderColor: '#000'
    },
    botonFavs: {
        // flex: 1,
        alignSelf: 'flex-end',
        // backgroundColor: 'red',
        marginRight: 10
    },
})

export default PerfilClienteStack;