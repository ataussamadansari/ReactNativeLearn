/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Button, Pressable, Text, TextInput, View } from 'react-native';
import Welcome from './src/components/Welcome';
import First from './src/components/First';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputTextField from './src/components/InputTextField';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';

const App = () => {
  // const name = 'Samad';
  // const getAge = (a: any) => {
  //   return a;
  // };

  // const handlePress = () => {
  //   console.warn('Hello Samad');
  // };

  return (
    <SafeAreaView>
      <View>
        {/* <Text>Hello World!</Text>
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
      </Pressable> */}

        <InputTextField />
        {/* <UseStateHook /> */}
        {/* <Props /> */}
      </View>
    </SafeAreaView>
  );
};

export default App;
