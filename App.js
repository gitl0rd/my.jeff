import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogInScreen from './Screens/LogIn';
import HomeScreen from './Screens/Home';

const RootStack = createStackNavigator(
  {
    LogIn: LogInScreen,
    Home: HomeScreen,
  },
  {
    initialRouteName: 'LogIn',
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