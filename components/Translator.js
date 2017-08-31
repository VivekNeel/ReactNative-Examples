import React from 'react'
import {View, Text, TextInput} from 'react-native'

export default class Translator extends React.Component {

  constructor() {
    super()
    this.state = {
      text: ' '
    }
  }

  render() {
    return (
      <View style={{
        padding: 10
      }}>
        <TextInput
          style={{
          height: 40
        }}
          placeholder='Type your text'
          onChangeText={(text) => this.setState({text})}></TextInput>

        <Text style={{
          paddingTop: 10,
          height: 42
        }}>
          {this
            .state
            .text
            .split(' ')
            .map((typedText) => typedText && '🍕')
            .join(' ')}
        </Text>
      </View>
    );
  }

}