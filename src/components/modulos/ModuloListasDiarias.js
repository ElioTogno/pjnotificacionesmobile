import React from 'react'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native'

const LeftContent = props => <Avatar.Icon {...props} icon="file-document-multiple-outline" />

const ModuloListasDiarias = () => (
  <Card onPress={() => alert("Listas diarias")} style={styles.separador} >
    <Card.Title title="Listas Diarias" subtitle="Listas diarias almacenadas" left={LeftContent} />
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

export default ModuloListasDiarias;