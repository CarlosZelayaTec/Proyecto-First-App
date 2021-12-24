import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Markets = ({ title, onPress, propietario }) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container} >
      <View style={styles.containerPhoto}>
        <Image style={ styles.photoPerfil } source={require('../assets/favicon.png')} />
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
        textAlign: 'center',
        paddingTop: 8,
        backgroundColor: '#F4F4F4'
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