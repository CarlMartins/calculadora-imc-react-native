import React from 'react';

import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>
        Inclua seu novo livro...
      </Text>
      <TextInput
        placeholder="Título"
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        style={styles.input}
        multiline={true}
        numberOfLines={4}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.cameraButton}>
          <Icon
            name="photo-camera"
            style={styles.icon}
            size={18}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#f39c12',
    borderBottomWidth: 1,
    marginBottom: 10
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    color: '#fff',
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 20
  },
  saveButton: {
    backgroundColor: '#f39c12',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    marginBottom: 20
  },
  saveButtonText: {
    color: '#fff'
  },
  buttonsContainer: {
    height: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column'
  },
  cancelButton: {

  },
  cancelButtonText: {
    color: '#95a5a6',

  }
});

export {
  Book
};