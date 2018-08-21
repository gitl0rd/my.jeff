import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LogInScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Log in</Text>
        <Button onPress={() => this.props.navigation.navigate('Movies')} title="CLICK MEEEEEEEE!!!!!!!!!!!"/>
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
