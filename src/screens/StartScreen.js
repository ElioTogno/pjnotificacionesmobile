import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'


export default function StartScreen({ navigation }) {
  return (


    <Background>
      <Logo />
      <Header>SIM - PJA </Header>
      <Paragraph>
       Sistema Automatizado Poder Judicial Mendoza
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Ingresar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Registrarse
      </Button>
    </Background>
  )
}
