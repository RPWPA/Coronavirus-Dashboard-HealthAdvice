import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HealthAdvice from './components/HealthAdvice';
import HADV from './components/HADV';
export default function App() {
  return (
    <View style={styles.container}>
      <HADV/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
