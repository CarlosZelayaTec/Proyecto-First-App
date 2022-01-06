import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from "react-native";

const Markets = ({tiendas, id ,title, propietario, logo, navigation, description, productos, load, logosTodos}) => {

  return(
    <TouchableOpacity 
    onPress={() => navigation.navigate('Perfil', {tiendas: tiendas, id_tienda: id, title: title, propietario: propietario, logo: logo, description: description, produc: productos })} 
    style={styles.container} >
        <View style={styles.containerPhoto}>
          {/* { load ? <ActivityIndicator size={'small'} color={'violet'} /> : */}
          <Image style={ styles.photoPerfil } source={{uri: logo}} />
        </View> 
        <Text style={styles.title} >{ title }</Text>
        <Text style={styles.propietario} >{ propietario }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        margin: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 20,
        paddingTop: 8,
        backgroundColor: '#F4F4F4',
    },
    title: {
      textAlign: 'center',
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    propietario: {
      fontSize: 14,
      textAlign: 'right',
      color: 'grey',
      marginRight: 9,
      marginTop: 25,
    },
    photoPerfil: {
      height: 55,
      width: 55,
      borderRadius: 10,
    },
    photoPerfil1: {
      height: 10,
      width: 10,
      borderRadius: 10,
    },
    containerPhoto: {
      flex: 1,
      alignContent: 'center',
      // backgroundColor: 'red',
      width: 55,
      marginLeft: 10,
    }
})

export default Markets;