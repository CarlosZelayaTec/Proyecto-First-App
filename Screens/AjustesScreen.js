import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';

const AjustesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Ajustes</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default AjustesScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });