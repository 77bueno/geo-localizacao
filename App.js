import React from 'react';
import MapView from 'react-native-maps';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <MapView style={styles.mapa} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: '100%', height: '100%', },
});
