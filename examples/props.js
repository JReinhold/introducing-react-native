import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export class App extends React.Component {
  render() {
    return (
      <View>
        <Text>I have a message for you</Text>
        <Message to={'Karl-Emil'} />
        <Message to={'Mr. Kofod'} />
      </View>
    );
  }
}

class Message extends React.Component {
  render() {
    return <Text>And the message to you, {this.props.to}, is: Hi!</Text>;
  }
}
