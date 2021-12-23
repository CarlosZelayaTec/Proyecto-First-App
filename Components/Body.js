import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { Markets } from './index';

const Body = ({ tiendas }) => {
  return(
    <View style={styles.container} >
      <FlatList 
        style={styles.elemento}
        data={tiendas}
        keyExtractor={x => x.id}
        renderItem={({item}) => <Markets title={item.name} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      
    //  elemento: {
    //     backgroundColor: 'red',
    //     margin: 20,
    //  } 
})

export default Body;