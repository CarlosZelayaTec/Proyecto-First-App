import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Markets = ({ title }) => {
  return(
    <TouchableOpacity>
      <Text style={ styles.title }>{ title }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    title: {
        height: 80,
      //   backgroundColor: 'green',
        margin: 10,
        borderWidth: 2,
        borderColor: '#ccc',
        borderRadius: 30,
        textAlign: 'center'
    }
})

export default Markets;