import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function PlaylistScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}> Playlist 1</Text>
        <Text style={styles.subtitle}>10 músicas</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}> Playlist 2</Text>
        <Text style={styles.subtitle}>5 músicas</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}> Playlist 3</Text>
        <Text style={styles.subtitle}>8 músicas</Text>
      </View>
    </View>
  );
}

export default PlaylistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    paddingVertical: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
});
