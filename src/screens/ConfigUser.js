import React from 'react'

import BackgroundGral from '../components/BackgroundGral'
import Logo from '../components/Logo'



//No esta tomando valores de navigation
export default function ConfigUser({ navigation }) {
  return (
    <BackgroundGral>
    <Logo />
    
 


  
    </BackgroundGral>
  );
}

/*
  <Button
    mode="outlined"
    onPress={() =>
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
    }
  >
    Logout
  </Button>
  */