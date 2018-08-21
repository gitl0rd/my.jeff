import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LogInScreen from './Screens/LogIn';
import MovieScreen from './Screens/Movies';

const RootStack = createStackNavigator(
  {
    LogIn: LogInScreen,
    Movies: MovieScreen,
  },
  {
    //initialRouteName: 'LogIn',
    initialRouteName: 'Movies',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#0065a8',
      },
      headerTintColor: '#fff',
    },
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}