import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="file" />

const ModuloAnotaciones = () => (
  <Card onPress={() => alert("Listado de Anotaciones")} style={styles.separador}>
    <Card.Title title="Anotaciones" subtitle="Ver todas las anotaciones" left={LeftContent} />
    <Card.Content>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  separador: {
    padding: 10
  
  }
});


export default ModuloAnotaciones;