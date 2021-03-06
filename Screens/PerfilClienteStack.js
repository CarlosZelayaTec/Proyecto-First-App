import React, {useState, useEffect} from 'react';
import { Text, StyleSheet, View, Image, FlatList, ActivityIndicator } from 'react-native';
import ListaProductos from '../Components/ListaProductos';

const PerfilClienteStack = ({ navigation }) => {

    // const [ loadLogo, setLoadLogo ] = useState(true);

    const id_tienda = navigation.getParam('id_tienda');
    const title = navigation.getParam('title');
    const description = navigation.getParam('description');
    const logo = navigation.getParam('logo');
    const productos = navigation.getParam('produc');
    const load = navigation.getParam('load');

    // const fetchLogo = async () => {
    //     await fetch(logo);
    //     setLoadLogo(false)
    // }

    // useEffect(() => {
    //     fetchLogo()
    // }, [])

    return(
        <View style={styles.container}>
            
                {/* { loadLogo && <ActivityIndicator size={'large'} color={'violet'} style={styles.activity} /> } */}
            
            <Image style={ styles.photoPortada } source={{uri: logo}} />

                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.descripcion}>{description}</Text>
                </View>    

                {/* <View style={styles.containerProducts}>          */}
                    <FlatList 
                    style={styles.containerProducts}
                        data={productos}
                        // numColumns={'2'}
                        keyExtractor={x => x.id_produc}
                        renderItem={({item}) => <ListaProductos productos={item.img} title={item.nombreProducto} 
                                            descripcionProduc={item.descripcionProducto} precio={item.precio} />}
                    />
                {/* </View> */}

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
        backgroundColor: '#667eea',
        marginHorizontal: 5,
        marginTop: 5,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#000'
    },
    activity: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})

export default PerfilClienteStack;