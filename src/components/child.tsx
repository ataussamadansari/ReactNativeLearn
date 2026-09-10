import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Child = (props: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Child Container</Text>
      <View style={styles.profileCard}>
        <Text style={[styles.profileText, styles.name]}>
          Name: {props.name}
        </Text>
        <Text style={[styles.profileText, styles.age]}>Age: {props.age}</Text>
        <Text style={[styles.profileText, styles.city]}>
          City: {props.city}
        </Text>
        {props.isDeveloper && (
          <Text style={[styles.profileText, styles.developer]}>Developer</Text>
        )}
      </View>
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
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'blue',
    padding: 8,
    marginTop: 4,
  },
  profileText: {
    marginBottom: 2,
    fontSize: 14,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
  },
  age: {
    color: 'orange',
  },
  city: {
    color: 'green',
  },
  developer: {
    color: 'red',
  },
});

export default Child;
