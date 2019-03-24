import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export class App extends React.Component {
  render() {
    return (
      <View>
        <Text>I have a message for you</Text>
        <Message />
      </View>
    );
  }
}

class Message extends React.Component {
  render() {
    return <Text>And the message is: Hi!</Text>;
  }
}
