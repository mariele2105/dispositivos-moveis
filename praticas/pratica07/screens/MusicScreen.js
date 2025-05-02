import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function MusicScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>🎵 Música 1</Text>
        <Text style={styles.artist}>Artista 1</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>🎵 Música 2</Text>
        <Text style={styles.artist}>Artista 2</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>🎵 Música 3</Text>
        <Text style={styles.artist}>Artista 3</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>🎵 Música 4</Text>
        <Text style={styles.artist}>Artista 4</Text>
      </View>
    </View>
  );
}

export default MusicScreen;

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
  artist: {
    fontSize: 14,
    color: '#555',
  },
});
