import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import  Markets  from './Markets';

const Body = ({ tiendas, onPress }) => {
  return(
    <View style={styles.container} >
      <FlatList 
        style={styles.elemento}
        data={tiendas}
        keyExtractor={x => x.id}
        renderItem={({item}) => <Markets title={item.name} description={item.description} propietario={item.propietario}
         onPress={onPress} /> }
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