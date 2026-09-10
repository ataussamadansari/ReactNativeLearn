/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, Pressable, Text, View } from 'react-native';
import Welcome from './src/components/Welcome';
import First from './src/components/First';

const App = () => {
  const name = 'Samad';
  const getAge = (a: any) => {
    return a;
  };

  const handlePress = () => {
    console.warn('Hello Samad');
  };

  return (
    <View style={{ margin: 16 }}>
      <Text>Hello World!</Text>
      <First />
      <Welcome />
      <Text>{name}</Text>
      <Text>{getAge(23)}</Text>
      <Button title="click" onPress={() => handlePress} />

      <Pressable
        onPress={handlePress}
        style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 12,
          alignItems: 'center',
          margin: 12,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: '700' }}>Login</Text>
      </Pressable>
    </View>
  );
};

export default App;
