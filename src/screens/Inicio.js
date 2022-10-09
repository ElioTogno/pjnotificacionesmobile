import React from 'react'
import { StyleSheet } from 'react-native'

import BackgroundGral from '../components/BackgroundGral'



import ModuloNotificaciones from '../components/modulos/ModuloNotificaciones'
import ModuloListasDiarias from '../components/modulos/ModuloListasDiarias'
import ModuloAnotaciones from '../components/modulos/ModuloAnotaciones'




//No esta tomando valores de navigation
export default function Inicio({ navigation }) {
  return (
    <BackgroundGral navigation={navigation}>
   
    <ModuloNotificaciones navigation={navigation}>{{navigation}}</ModuloNotificaciones>
    <ModuloListasDiarias></ModuloListasDiarias>
    <ModuloAnotaciones></ModuloAnotaciones>
  

    </BackgroundGral>
  );
}

const styles = StyleSheet.create({
  separador: {
    padding: 10,
    marginTop: 50,
  
  }
});
