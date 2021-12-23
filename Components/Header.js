import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Header = () => {
    return(
        <View style={ styles.contenido }>
            <Text style={styles.title} >0615</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: '#667eea',
        width: '100%',
        height: 100,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        // fontWeight: '300',
        marginBottom: 10,
        // backgroundColor: 'blue',
    }
})

export default Header;