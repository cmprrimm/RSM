import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView } from 'react-native';


export default function App()  {
    return (
      <SafeAreaView style={styles.container}>
       <StatusBar style="light" />

        <Button
        onPress={() => {
        alert('Everton will win the league!');
        }}
        title="Log In"
        color="#000000"
        accessibilityLabel="Click here to Log In"/>

        <Button
        onPress={() => {
        alert('Everton 2021 league champions!');
        }}
        title="Sign Up"
        color="#000000"
        accessibilityLabel="Click here to Sign Up"/>

      </SafeAreaView>
    );
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
}
});
