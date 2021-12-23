import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { Header, Body } from '../Components/index';

const tiendas = [
  {
    id: '1',
    name: 'Fashion Shop',
    propietario: 'Waldina Carcamo',
    description: 'Esta tienda encontrará lo mejor en Zapatos de la Marca Charly, contamos con una gran variedad de accesorios para varon y mujer, te Esperamos!!'
  },
  {
    id: '2',
    name: 'La quesería y más',
    propietario: 'Mirian Carcamo',
    description: 'Aqui vendemos productos lacteos y gran variedad de alimentos y productos, esperamos tu visita!!1',  
  },
  {
    id: '3',
    name: 'OH LALA SHOP',
    propietario: 'Ana Luz Baca',
    description: 'En esta tienda tenemos los mejores productos para sus mascotas, tambien le ofrecemos productos para Fiestas de cumpleaños, Bodas, Anviersarios, etc. Te Esperamos!!!!'
  
  }
]

const HomeScreen = () => {
    return (
      <View style={styles.container}>
          <Header />
          <Body tiendas={tiendas} />
        <StatusBar style="auto" />
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