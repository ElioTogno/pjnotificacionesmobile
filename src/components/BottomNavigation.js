import React from 'react'
//REACT
import { StyleSheet } from 'react-native'


//Librerias
import { Button as PaperButton } from 'react-native-paper'
import { BottomNavigation, Text } from 'react-native-paper';


//APP

import Inicio from '../screens/Inicio';
import ConfigUser from '../screens/ConfigUser';

// BottomNavigation Muestra la barra de navegacion inferior
export default function BottomNavig({navigation}) {

const InicioRoute = () => <Inicio navigation={navigation}></Inicio>;

const ListasRoute = () => <ConfigUser></ConfigUser>;
  
const ConfiguracionRoute = () => <Text>Configuracion</Text>;

const NotificacionesRoute = () => <Text>Notificaciones</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'inicio', title: 'Inicio', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'listas', title: 'Listas', focusedIcon: 'album' },
    { key: 'config', title: 'Configuración', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notificacion', focusedIcon: 'bell', unfocusedIcon: 'bell-outline'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    inicio: InicioRoute,
    listas: ListasRoute,
    config: ConfiguracionRoute,
    notifications: NotificacionesRoute,
  });

  return (
    <BottomNavigation style={styles.container}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: 'red',
    color: 'red',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  
  },
  red: {
    color: 'red',
  },
});