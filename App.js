import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HealthAdvice from './components/HealthAdvice';
export default function App() {
  return (
    <View style={styles.container}>
      <HealthAdvice/>
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
