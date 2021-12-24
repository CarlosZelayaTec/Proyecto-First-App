import React from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';
import { NavigationContext } from 'react-navigation';
import  Markets  from './Markets';

const Body = ({ tiendas }) => {
  return(
    <View style={styles.container} >
      <FlatList 
        style={styles.elemento}
        data={tiendas}
        keyExtractor={x => x.id}
        renderItem={({item}) => <Markets title={item.name} description={item.description} propietario={item.propietario}
         onPress={() => alert(`Hola ${item.name}`)} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      
    //  elemento: {
    //     // backgroundColor: 'green',
    //     flex: 1,
    //     // margin: 20,
    //  } 
})

export default Body;