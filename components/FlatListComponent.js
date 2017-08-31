import React from 'react'
import {FlatList, Text, StyleSheet, View} from 'react-native'

export default class FlatListComponent extends React.Component {

  render() {
    return (

      <FlatList
        data={[
        {
          key: 'Vivek'
        }, {
          key: 'Neel'
        }, {
          key: 'Vivek Kumar'
        }, {
          key: 'Neel Kumar'
        }
      ]}
        renderItem={({item}) => <Text style={container.item}>{item.key}
      </Text>}></FlatList>
    );
  }
}

const container = StyleSheet.create({
  item: {
    color: 'red',
    fontSize: 44,
    padding: 20
  },
  c: {
    color: 'blue',
    padding: 10
  }
})