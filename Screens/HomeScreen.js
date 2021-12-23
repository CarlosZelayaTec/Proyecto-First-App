import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { Header } from '../Components/index';

const HomeScreen = () => {
    return (
      <View style={styles.container}>
          <Header />
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