import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import  Markets  from './Markets';

const Body = ({ tiendas, navigation, load, logosTodos }) => {

  return(
    <View style={styles.container} >
      <FlatList 
      style={styles.todo}
        data={tiendas}
        keyExtractor={x => x.id}
        renderItem={({item}) => <Markets tiendas={tiendas} id={item.id} title={item.name} description={item.description} 
                                          propietario={item.propietario} logo={item.logo} productos={item.productos} load={load}
                                          logosTodos={logosTodos}
         navigation={navigation} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf:'stretch',
        // flexDirection: 'row',
        // backgroundColor: 'red',
        // alignItems: 'flex-start',
        justifyContent: 'flex-start',
      },
      // todo: {
      //   flex: 1,
      //   backgroundColor: 'blue',
      // }
      
})

export default Body;