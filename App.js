import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import WelcomeScreen from './Screens/WelcomeScreen'

export default class App extends React.Component{
  render() {
    return(
      <AppContainer />
    )
  }
}
var TabNavigator = createSwitchNavigator({
  WelcomeScreen:{screen:WelcomeScreen},
})
var AppContainer = createAppContainer(TabNavigator)
