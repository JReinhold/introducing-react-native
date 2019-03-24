import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Alert } from 'expo';

const me = 'Jeppe';

export class App extends React.Component {
  sayHi = () => {
    Alert.alert('Oh Hi Mark!');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button onPress={this.sayHi}>Say hi from {me}!</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
