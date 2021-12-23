import React from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';

const RapisScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Rapiditos</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  export default RapisScreen;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });