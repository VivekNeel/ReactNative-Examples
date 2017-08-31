import React from 'react'
import {StyleSheet, Image, Text, View} from 'react-native'

export default class StyleComponent extends React.Component {

  render() {
    return (
      <View style={{
        alignItems: 'center'
      }}>
        <Text style={styles.red}>Red font
        </Text>
        <Text style={styles.blue}>Blue font
        </Text>
      </View>
    );
  }

}
const styles = StyleSheet.create({

  red: {
    color: 'red',
    fontWeight: 'bold',
    alignItems: 'center',
    padding: 5,
    flexDirection: 'row'
  },

  blue: {
    color: 'blue',
    fontWeight: 'normal'
  }

})