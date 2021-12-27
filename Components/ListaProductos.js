import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const ListaProductos = ({productos, precio, descripcionProduc, title}) => {
  return(
    <View style={styles.container}>
        <View style={styles.containerProducto}>
            <Image style={styles.photoProduc} source={{uri: productos}} />
            <View style={styles.infoProducto}>
                <Text style={styles.titleProducto} >{title}</Text>
                <Text style={styles.descripcionProducto} >{descripcionProduc}</Text>
                <Text style={styles.precioProducto} >{precio}.00$</Text>
            </View>        
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // container: {
    //     // flex: 1,
    //     // flexDirection: 'row',
    //     // backgroundColor: 'red',
    // },
    photoProduc: {
        width: 100,
        height: 100,
        borderRadius: 12,
        // margin: 10,
        // flexDirection: 'row'
    },
    containerProducto: {
        flexDirection: 'row',
        backgroundColor: '#eee',
        margin: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 12,
        padding: 5
    },
    infoProducto: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space-evenly',
        // backgroundColor: 'red'
    },
    titleProducto: {
        fontSize: 20,
        textAlign: 'center'
    },
    descripcionProducto: {
        fontSize: 15,
        color: 'grey',
        textAlign: 'justify',
        marginLeft: 10
    },
    precioProducto: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'orange',
        textAlign: 'right',
        alignItems: 'flex-end'
    }
})

export default ListaProductos;