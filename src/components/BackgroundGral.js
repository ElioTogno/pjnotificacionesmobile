import React from 'react'
import { ImageBackground, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../core/theme'
import AppBarSmall from '../components/AppBar-small'
import  BottomNavigation  from '../components/BottomNavigation'

//Elemento padre donde aplica lo demas a los elementos hijos (Pantalla General para todas las demas pantallas)
export default function BackgroundGral({ children }) {
  return (
    
    <ImageBackground
      source={require('../assets/background_dot.png')}
      resizeMode="repeat"
      style={styles.background}
    >
      
      <AppBarSmall/>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>

      
     
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
  //  maxWidth: 340,
   // alignSelf: 'center',
  //  alignItems: 'center',
   // justifyContent: 'center',
  },
})
