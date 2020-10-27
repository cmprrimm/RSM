import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';


type Props = {}; 
export default class App extends Component<Props> {

  logInPage() {
    return;
  }

  signUpPage() {
    return;
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
        onPress={this.logInPage}
        title="Log In"
        color="#000000"
        accessibilityLabel="Click here to Log In"/>
        <Button
        onPress={this.signUpPage}
        title="Sign Up"
        color="#000000"
        accessibilityLabel="Click here to Sign Up"/>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
}
});
