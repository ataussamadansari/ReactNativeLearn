import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const UseStateHook = () => {
  const [count, setCount] = useState(0);

  const inc = () => {
    setCount(prev => prev + 1);
  };

  const dec = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState Hook</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.btnContainer}>
        <Pressable
          style={[styles.button, count === 0 && styles.disableBtn]}
          onPress={dec}
          disabled={count === 0}
        >
          <Text style={styles.btnText}>-</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={inc}>
          <Text style={styles.btnText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  count: {
    textAlign: 'center',
    fontSize: 50,
    color: 'white',
    marginTop: 20,
    marginBottom: 20,
  },
  btnContainer: {
    margin: 16,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 8, 
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 3,
    borderColor: '#fff',
    borderRadius: 12,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 0.1,
    borderBottomColor: 'red',
    borderLeftColor: 'red',
    borderEndColor: 'red',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  disableBtn: {
    backgroundColor: '#c4c4c4',
  },
});

export default UseStateHook;
