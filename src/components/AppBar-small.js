import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

export default function AppBarSmall() {

  const _goBack = () => (
   
    //Metodo para regresar a la pantalla anterior
    console.log('Se presiono boton de busqueda')
  );

  const _handleSearch = () => console.log('Se presiono boton de busqueda');

  const _handleMore = () => console.log('Se presiono boton de opciones');

  return (<Appbar.Header style={styles.container}>
  <Appbar.BackAction onPress={_goBack} />
  <Appbar.Content title="SISTEMA PJA" />
  <Appbar.Action icon="magnify" onPress={_handleSearch} />
  <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
</Appbar.Header> );
}

const styles = StyleSheet.create({
  
})
