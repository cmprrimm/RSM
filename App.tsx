import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
const [value, onChangeText] = React.useState('Useless Placeholder');
const [value1, onChangeText1] = React.useState('Password');
  return (
    <SafeAreaView style={styles.container}>
      <Text>Everton!!!!</Text>
      <StatusBar style="auto" />
      <TextInput style = {styles.loginBox}
            onChangeText={text => onChangeText(text)}
            value={value}
            />
       </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
  },
  loginBox: {
     flex: 1,

     alignItems: 'center',
     justifyContent: 'center',
   },
});
