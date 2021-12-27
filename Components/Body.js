import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import  Markets  from './Markets';

const Body = ({ tiendas, navigation }) => {

  

  return(
    <View style={styles.container} >
      <FlatList 
        data={tiendas}
        keyExtractor={x => x.id}
        renderItem={({item}) => <Markets tiendas={tiendas} id={item.id} title={item.name} description={item.description} 
                                          propietario={item.propietario} logo={item.logo} productos={item.productos}
         navigation={navigation} /> }
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
      
})

export default Body;