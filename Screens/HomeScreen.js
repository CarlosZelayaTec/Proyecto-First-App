import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { Body } from '../Components/index';
 
const tiendas = [
  {
    id: '1',
    name: 'Fashion Shop',
    propietario: 'Waldina Carcamo',
    description: 'Esta tienda encontrará lo mejor en Zapatos de la Marca Charly, contamos con una gran variedad de accesorios para varon y mujer, te Esperamos!!',
    logo: 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?cs=srgb&dl=pexels-stephen-niemeier-176837.jpg&fm=jpg', 
    productos: [
      {id_produc: 1, img: 'https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?cs=srgb&dl=pexels-terje-sollie-273930.jpg&fm=jpg'}, 
      {id_produc: 2, img: 'https://images.pexels.com/photos/3682290/pexels-photo-3682290.jpeg?cs=srgb&dl=pexels-castorly-stock-3682290.jpg&fm=jpg'}],
  },
  {
    id: '2',
    name: 'La quesería y más',
    propietario: 'Mirian Carcamo',
    description: 'Aqui vendemos productos lacteos y gran variedad de alimentos y productos, esperamos tu visita!!',  
    logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?cs=srgb&dl=pexels-magda-ehlers-1337380.jpg&fm=jpg',
   },
  {
    id: '3',
    name: 'OH LALA SHOP',
    propietario: 'Ana Luz Baca',
    description: 'En esta tienda tenemos los mejores productos para sus mascotas, tambien le ofrecemos productos para Fiestas de cumpleaños, Bodas, Anviersarios, etc. Te Esperamos!!!!',
    logo: 'https://images.pexels.com/photos/351263/pexels-photo-351263.jpeg?cs=srgb&dl=pexels-expect-best-351263.jpg&fm=jpg',
  }
]

// const { description } = tiendas[2];
// console.log(description.length);

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        {/* <Header /> */}
        <Body tiendas={tiendas} navigation={navigation}/>
      <StatusBar style="auto"/>
    </View>
  );
}


  export default HomeScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },
  });