import React from 'react'
import {ScrollView, Image, View, Text} from 'react-native'

export default class ScrollViewComponent extends React.Component {

  render() {
    let path = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <ScrollView minimumZoomScale={1} maximumZoomScale={2} centerContent={true}>
        <Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        < Image source={require('./kotlin.png')}/>
        <Image source={require('./kotlin.png')}/>

      </ScrollView>
    );
  }
}