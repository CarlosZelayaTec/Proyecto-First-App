import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';

const FavoritesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Favoritos</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default FavoritesScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });