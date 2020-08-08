import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import WriteScreen from './screens/WriteScreen';
import ReadScreen from './screens/ReadScreen';

export default class App extends React.Component {
  render(){
    return(
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Read: {screen:ReadScreen},
  Write: {screen:WriteScreen},
})

const AppContainer = createAppContainer(TabNavigator);