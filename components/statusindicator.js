import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function StatusIndicator({ status }) {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        Status: {status.connected ? 'Connected' : 'Disconnected'}
      </Text>
      <Text style={styles.lastUpdated}>
        Last updated: {new Date(status.lastUpdated).toLocaleTimeString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 20
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  lastUpdated: {
    fontSize: 12,
    color: '#666',
    marginTop: 5
  }
});