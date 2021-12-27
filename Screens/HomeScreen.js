import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text } from 'react-native';
import { Body } from '../Components/index';
 
const tiendas = [
  {
    id: '1',
    name: 'Fashion Shop',
    propietario: 'Waldina Carcamo',
    description: 'Esta tienda encontrará lo mejor en Zapatos de la Marca Charly, contamos con una gran variedad de accesorios para varon y mujer, te Esperamos!!',
    logo: 'https://images.pexels.com/photos/176837/pexels-photo-176837.jpeg?cs=srgb&dl=pexels-stephen-niemeier-176837.jpg&fm=jpg', 
    productos: [
      { id_produc: 1, 
        nombreProducto: 'Tacones Estilo Kim Kardashan',
        descripcionProducto: 'Estos bellos tacones traidos desde Italia, tenemos en varios colores. Hay numero 6,7,8,9',
        precio: 400,
        img: 'https://images.pexels.com/photos/273930/pexels-photo-273930.jpeg?cs=srgb&dl=pexels-terje-sollie-273930.jpg&fm=jpg'
      }, 
      {id_produc: 2, 
        nombreProducto: 'Zapatos Rojos, Estilo katy Perry',
        descripcionProducto: 'Estos zapatos los uso la Reina Isabel en su segundo Divorcio. Hay numero 7',
        precio: 1500,
        img: 'https://images.pexels.com/photos/3682290/pexels-photo-3682290.jpeg?cs=srgb&dl=pexels-castorly-stock-3682290.jpg&fm=jpg'
      },
      {id_produc: 3, 
        nombreProducto: 'Zapatillas verdes, Hermosas',
        descripcionProducto: 'Estas zapatillas vienen desde el medio oriente, las uso Mama Coco. Hay numero 6,7,8',
        precio: 600,
        img: 'https://images.pexels.com/photos/8933060/pexels-photo-8933060.jpeg?cs=srgb&dl=pexels-taryn-elliott-8933060.jpg&fm=jpg'
      },
      {id_produc: 4, 
        nombreProducto: 'Tacones al Óleo',
        descripcionProducto: 'EStos tacones tienen una altura de 2 metros y los puedes limpiar con jabon. Hay numero 7,8,9,10',
        precio: 900,
        img: 'https://images.pexels.com/photos/134064/pexels-photo-134064.jpeg?cs=srgb&dl=pexels-monicore-134064.jpg&fm=jpg'
      },
      {id_produc: 5, 
        nombreProducto: 'Los Colgados',
        descripcionProducto: 'Gran estilo de Zapatillas para poder hacer Ejercicio, talla 8,9,10',
        precio: 300.00,
        img: 'https://images.pexels.com/photos/8933066/pexels-photo-8933066.jpeg?cs=srgb&dl=pexels-taryn-elliott-8933066.jpg&fm=jpg'
      },
      {id_produc: 6, 
        nombreProducto: 'Joyeria de la Buena',
        descripcionProducto: 'Estas hermosas piezas bañadas en los mares de la costa norte son las que necesitas en tu vida',
        precio: 80.00,
        img: 'https://images.pexels.com/photos/8706554/pexels-photo-8706554.jpeg?cs=srgb&dl=pexels-ron-lach-8706554.jpg&fm=jpg'
      },
      {id_produc: 7, 
        nombreProducto: 'Hermosa Joya Artesanal',
        descripcionProducto: 'Esta reliquia era de mi abuela hasta que se la caché de la gabeta, linda para tu día a día',
        precio: 5000.00,
        img: 'https://images.pexels.com/photos/10554498/pexels-photo-10554498.jpeg?cs=srgb&dl=pexels-kader-duygun-10554498.jpg&fm=jpg'
      },
      {id_produc: 8, 
        nombreProducto: 'Pulsera de la 2 Guerra mundial',
        descripcionProducto: 'Esta pulsera fue elaborada cuando acontecía la segunda guerra mundial, llevatela',
        precio: 480.00,
        img: 'https://images.pexels.com/photos/9890211/pexels-photo-9890211.jpeg?cs=srgb&dl=pexels-alexey-demidov-9890211.jpg&fm=jpg'
      },
      {id_produc: 9, 
        nombreProducto: 'Relojes de ultima generación',
        descripcionProducto: 'Son lo más viejo que tenemos en nuestro inventario, estan polvosos aún',
        precio: 2350.00,
        img: 'https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?cs=srgb&dl=pexels-giallo-859895.jpg&fm=jpg'
      },
      {id_produc: 10, 
        nombreProducto: 'Barcos de alta Gama',
        descripcionProducto: 'Estos barcos son los que usó mi hijo la primera vez que anduvo en el rio de Choluteca',
        precio: 25.00,
        img: 'https://images.pexels.com/photos/194094/pexels-photo-194094.jpeg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-194094.jpg&fm=jpg'
      },
    ],
  },
  {
    id: '2',
    name: 'La quesería y más',
    propietario: 'Mirian Carcamo',
    description: 'Aqui vendemos productos lacteos y gran variedad de alimentos y productos, esperamos tu visita!!',  
    logo: 'https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?cs=srgb&dl=pexels-magda-ehlers-1337380.jpg&fm=jpg',
    productos: [
      {id_produc: 1, 
        nombreProducto: 'Pulsera de la 2 Guerra mundial',
        descripcionProducto: 'Esta pulsera fue elaborada cuando acontecía la segunda guerra mundial, llevatela',
        precio: 480.00,
        img: 'https://images.pexels.com/photos/9890211/pexels-photo-9890211.jpeg?cs=srgb&dl=pexels-alexey-demidov-9890211.jpg&fm=jpg'
      },
    ],
   },
  {
    id: '3',
    name: 'OH LALA SHOP',
    propietario: 'Ana Luz Baca',
    description: 'En esta tienda tenemos los mejores productos para sus mascotas, tambien le ofrecemos productos para Fiestas de cumpleaños, Bodas, Anviersarios, etc. Te Esperamos!!!!',
    logo: 'https://images.pexels.com/photos/351263/pexels-photo-351263.jpeg?cs=srgb&dl=pexels-expect-best-351263.jpg&fm=jpg',
    productos: [],
  }
]

// const { description } = tiendas[2];
// console.log(description.length);

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
        {/* <Header /> */}
        <Body tiendas={tiendas} navigation={navigation}/>
      <StatusBar style="auto"/>
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