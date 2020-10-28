import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Linking } from 'react-native';

const mainApp = () => {
  const [value, onChangeText] = React.useState();
  const [value1, onChangeText1] = React.useState();

    return (
      <SafeAreaView style={styles.container}>
       <StatusBar style="light" />


        <View style={styles.title}>
        <Text style={{color: '#fff', fontSize: 32}}>Patient Access!</Text>
        </View>


        <View style={{width: 200, height: 30, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <TextInput
               onChangeText={text => onChangeText(text)}
               value={value}
             />
        </View>


        <View style={{width: 200, height: 30, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', marginTop: 40}}>
        <TextInput
               onChangeText1={text1 => onChangeText1(text1)}
               value1={value1}
             />
         </View>


        <View style={styles.login}>
        <Button
        onPress={() => {
        alert('Everton will win the league!!!!');
        }}
        title="Log In"
        color="#008000"
        accessibilityLabel="Click here to Log In"/>

         <Text style={{color: 'blue', marginTop: 20}}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO')}>
              Click to Reset Password
         </Text>
        </View>


        <View style={styles.signUp}>
        <Button
        onPress={() => {
        alert('Everton 2021 league champions!');
        }}
        title="Sign Up"
        color="#FF0000"
        accessibilityLabel="Click here to Sign Up"/>
        </View>

      </SafeAreaView>
    );
  }




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
},
  title: {
     flex: 2,
     flexDirection: 'column',
     color: '#888',
     backgroundColor: '#000000',
     justifyContent: 'flex-end',
},
login: {
     flex: 3,
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
},
signUp: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
},
});

export default mainApp;