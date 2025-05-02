import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.chatItem}>
        <Text style={styles.nameTime}>👤 Ana Souza                            08:45</Text>
        <Text style={styles.message}>Oi, tudo bem?</Text>
      </View>

      <View style={styles.chatItem}>
        <Text style={styles.nameTime}>👤 Carlos Lima                          09:30</Text>
        <Text style={styles.message}>Vamos marcar aquela reunião?</Text>
      </View>

      <View style={styles.chatItem}>
        <Text style={styles.nameTime}>👤 Mariana Santos                       10:10</Text>
        <Text style={styles.message}>Enviei o arquivo para vc.</Text>
      </View>
    </View>
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  chatItem: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 8,
  },
  nameTime: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
