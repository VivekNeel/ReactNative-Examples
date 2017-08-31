import React from 'react'
import {SectionList, Text, StyleSheet, ListView, View} from 'react-native'

export default class SectionListComponent extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
          {
            key: 'firstKey',
            title: 'firstTitle',
            data: ['firstData']
          }, {
            key: 'secondKey',
            title: 'secondTitle',
            data: ['secondData', 'secondDuplicateData']
          }
        ]}
          renderItem={({item}) => <Text style={styles.item}>{item}
        </Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}
        </Text>}></SectionList>

      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
})
