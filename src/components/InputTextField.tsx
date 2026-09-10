import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import commonStyles from '../style/commonStyles';

const InputTextField = () => {
  const [username, setUsername] = useState('');

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Text Input</Text>

      <Text style={styles.username}>UserName: {username}</Text>

      <TextInput
        style={styles.textInput}
        placeholder="John Snow"
        placeholderTextColor="#686868"
        onChangeText={setUsername}
        value={username}
      />

      <Pressable style={styles.button} onPress={() => setUsername('')}>
        <Text style={styles.btnText}>CLEAR</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    color: '#fff',
    fontWeight: '600',
    marginBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 12,
    padding: 12,
    color: '#fff',
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontWeight: 'bold',
  },
});

export default InputTextField;
