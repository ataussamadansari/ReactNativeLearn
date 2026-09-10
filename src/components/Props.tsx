import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Child from './child';

const Props = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Props</Text>
      <Child name="Samad" age={23} city="Varanasi" isDeveloper={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Props;
