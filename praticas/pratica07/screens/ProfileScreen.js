import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: 'https://placekitten.com/200/200' }} // Exemplo de imagem de perfil
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.name}>Mariele Fernandes</Text>
      <Text style={styles.email}>marielefernandes.mf.mf@gmail.com</Text>
      <Text style={styles.phone}>(61) 99999-9999</Text>
      <View style={styles.editButtonContainer}>
        <Button title="Editar Perfil" onPress={() => { /* Lógica de navegação ou edição */ }} />
      </View>
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  email: {
    fontSize: 16,
    color: '#555',
  },
  phone: {
    fontSize: 16,
    color: '#555',
    marginVertical: 8,
  },
  editButtonContainer: {
    marginTop: 20,
    width: '100%',
  },
});
