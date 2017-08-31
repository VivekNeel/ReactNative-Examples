import React from 'react'
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Blink extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showText: true
    };

    setInterval(() => {
      // update state
      this.setState(previousState => ({
        showText: !previousState.showText
      }))
    }, 1000);
  }
  render() {
    let displayText = this.state.showText
      ? this.props.text
      : ' '
    return (
      <Text>{displayText}</Text>
    );
  }
}