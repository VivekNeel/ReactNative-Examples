import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Blink from './Blink'
import HeaderExample from './HeaderExample'
import {Font} from 'expo';
import StyleComponent from './StyleComponent'
import Translator from './components/Translator'
import ScrollViewComponent from './components/ScrollViewComponent'
import FlatListComponent from './components/FlatListComponent'
import SectionListComponent from './components/SectionListComponent'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from 'native-base';

class Apps extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    }
    return (
      <Image source ={pic} style={{
        width: 100,
        height: 100
      }}></Image>
    );
  }
}

class ProgrammingLanguages extends React.Component {

  render() {
    return (
      <Text>Hello {this.props.name}</Text>
    );
  }
}

export default class Appes extends React.Component {

  constructor() {
    super()
    this.state = {
      isReady: false
    }
  }

  async componentWillMount() {
    await Expo
      .Font
      .loadAsync({Roboto: require("native-base/Fonts/Roboto.ttf"), Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"), Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")});
    this.setState({isReady: true})
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading/>
    }
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back'/>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu'/>
            </Button>
          </Right>
        </Header>
        < SectionListComponent ></ SectionListComponent>
      </Container>
    );
  }

}
