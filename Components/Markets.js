import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Markets = ({ title, onPress, propietario, description }) => {
  return(
    <TouchableOpacity onPress={onPress} style={styles.container} >
      <Text style={styles.title} >{ title }</Text>
      <Text style={styles.propietario} >{ propietario }</Text>
      <Text style={styles.description} >{ description }</Text>
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
        // backgroundColor: 'red'
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
      marginRight: 5
    },
     description: {
      fontSize: 10,
      // color: '',
      // fontWeight: '300',
      textAlign: 'justify',
      marginRight: 5,
      // backgroundColor: 'red',
      marginLeft: 80,
      
     }
})

export default Markets;