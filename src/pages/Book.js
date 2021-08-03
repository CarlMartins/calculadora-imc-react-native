import React, { useEffect, useState } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  AsyncStorage
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = ({ navigation }) => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    AsyncStorage.getItem('books')
      .then(data => {
        const book = JSON.parse(data);
        setBooks(book);
      });
  }, []);

  const isValid = () => {
    if ((title !== undefined) && (title !== '')) {
      return true;
    }
    return false;
  };

  const onSave = async () => {
    if (isValid()) {

      const id = Math.random(5000).toString();
      const data = {
        id,
        title,
        description,
        photo
      };

      books.push(data);

      await AsyncStorage.setItem('books', JSON.stringify(books));
      navigation.goBack();
    } else {
      alert('Dados invalidos, preencha todos os campos!');
    }
  };

  return (
    <View style={ styles.container }>
      <Text style={ styles.pageTitle }>
        Inclua seu novo livro...
      </Text>
      <TextInput
        placeholder="Título"
        style={ styles.input }
        value={ title }
        onChangeText={ (text) => { setTitle(text); } }
      />
      <TextInput
        placeholder="Descrição"
        style={ styles.input }
        multiline={ true }
        numberOfLines={ 4 }
        value={ description }
        onChangeText={ (text) => setDescription(text) }
      />

      <View style={ styles.buttonsContainer }>
        <TouchableOpacity style={ styles.cameraButton }>
          <Icon
            name="photo-camera"
            style={ styles.icon }
            size={ 18 }
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={ [styles.saveButton, (!isValid()) ? styles.saveButtonInvalid : ''] }
          onPress={ onSave }
        >
          <Text style={ styles.saveButtonText } >
            Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.cancelButton }
          onPress={ () => navigation.goBack() }
        >
          <Text style={ styles.cancelButtonText }>Cancelar</Text>
        </TouchableOpacity>
      </View>

    </View >
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
  saveButtonInvalid: {
    opacity: 0.5
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