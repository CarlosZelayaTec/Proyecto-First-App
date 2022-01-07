import React, { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native';
import { Body } from '../Components/index';
import tiendas from '../Api/TiendasDB';

const renderTienda = (x) => {
  return x;
}

const HomeScreen = ({ navigation }) => {

  const memo = useMemo(() => {
    return renderTienda(tiendas)
  }, [tiendas]);
  
  return (
    <View style={styles.container}>
      <Text>¡Hola Carlangas!</Text>
        <Body tiendas={memo} navigation={navigation} />
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