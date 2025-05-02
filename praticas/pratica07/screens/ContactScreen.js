import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>👤 Nome do Contato</Text>
        <Text style={styles.contactNumber}>(99) 99999-9999</Text>
      </View>

      <View style={styles.contactItem}>
        <Text style={styles.contactName}>👤 Nome do Contato</Text>
        <Text style={styles.contactNumber}>(99) 99999-9999</Text>
      </View>

      <View style={styles.contactItem}>
        <Text style={styles.contactName}>👤 Nome do Contato</Text>
        <Text style={styles.contactNumber}>(99) 99999-9999</Text>
      </View>
    </View>
  );
}

export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  contactItem: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 12,
  },
  contactName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  contactNumber: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
