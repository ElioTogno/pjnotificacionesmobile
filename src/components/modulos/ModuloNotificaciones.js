import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const LeftContent = props => <Avatar.Icon {...props} icon="alarm-light" />

const ModuloNotificaciones = ({navigation}) => (

  <Card style={styles.separador} onPress={() => navigation.navigate('Notificaciones')}>
    <Card.Title title="Notificaciones Judiciales" subtitle="Listado de notificaciones" left={LeftContent} />
    <Card.Content>
    </Card.Content>
  </Card>
 
);

const styles = StyleSheet.create({
  separador: {
    padding: 10,
   // backgroundColor: theme.colors.tercero,
    marginBottom:10
  }
});

export default ModuloNotificaciones;

