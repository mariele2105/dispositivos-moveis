import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-address"
      />
      <TextInput 
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha? Recuperar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  input: {
    height: 48,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 12,
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 12,
    borderRadius: 4,
    marginBottom: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPasswordText: {
    color: '#6200EE',
    fontSize: 14,
    textAlign: 'center',
  },
});
