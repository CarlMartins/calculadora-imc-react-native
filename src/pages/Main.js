import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Main = () => {
  const data = [
    {
      id: 1,
      title: 'Código Limpo',
      annotations: 'Livro muito bom!',
      read: false,
      photo: null
    },
    {
      id: 2,
      title: 'C Completo e Total',
      annotations: 'Livro muito bom!',
      read: false,
      photo: null
    },
    {
      id: 3,
      title: 'A Bíblia do PHP',
      annotations: 'Livro muito bom!',
      read: false,
      photo: null
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.toolBox}>
        <Text style={styles.title}>
          Lista de Leitura
        </Text>
        <TouchableOpacity style={styles.toolboxButton}>
          <Icon name="add" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <TouchableOpacity style={styles.itemButton}>
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20
  },
  toolBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  toolboxButton: {
    backgroundColor: '#3498db',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  icon: {
    fontSize: 14,
    color: '#fff'
  },
  title: {
    fontSize: 16,
    color: '#3498db',
  },
  itemText: {
    fontSize: 16
  },
  itemButton: {

  }
});

export {
  Main
};