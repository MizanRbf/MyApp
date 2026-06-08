import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
});
const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/images/logo.png')} />
      <Text style={styles.title}>Hello Mizan! 🚀</Text>
      <Text style={styles.subtitle}>My First React Native App</Text>
      <Text style={styles.text}>My second title</Text>
    </View>
  );
};

export default App;
