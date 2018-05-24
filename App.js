import { Navigation } from 'react-native-navigation';

import {registerScreens, registerScreenVisibilityListener} from './screens';

registerScreens(); // this is where you register all of your app's screens
registerScreenVisibilityListener();

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.GameScreen', // this is a registered name fo
      icon: require('./data/images/exit-gray.png'),
      selectedIcon: require('./data/images/exit-gray.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.GameScreen',
      icon: require('./data/images/exit-gray.png'),
      selectedIcon: require('./data/images/exit-gray.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
/*
import React from 'react';
import { Navigation } from 'react-native-navigation';
import Game from './Components/Game/index';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Game />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/