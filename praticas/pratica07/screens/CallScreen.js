import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CallScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.callItem}>
        <Text style={styles.nameIcon}>👤   Campos Sales                          📞</Text>
        <Text style={styles.dateTime}>28/02/2024 12:03</Text>
      </View>

      <View style={styles.callItem}>
        <Text style={styles.nameIcon}>👤   Rui Barbosa                           📞</Text>
        <Text style={styles.dateTime}>04/12/2023 21:10</Text>
      </View>
    </View>
  );
}

export default CallScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  callItem: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 12,
  },
  nameIcon: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dateTime: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
});
