import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button ,SafeAreaView, Linking } from 'react-native';

const mainApp = () => {
  const [value, onChangeText] = React.useState();
  const [value1, onChangeText1] = React.useState();

    return (
      <SafeAreaView style={styles.container}>
       <StatusBar style="light" />


        <View style={styles.title}>
        <Text style={{color: '#fff', fontSize: 40}}>Patient Access</Text>
        </View>


        <View style={{width: 300, height: 30, backgroundColor: '#89dee2', alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <TextInput
               placeholder="Your Email"
               placeholderTextColor="white"
               keyboardType="email-address"
               returnKeyType="next"
               value={value}
               style={styles.textInput}
               autoCapitalize="none"
             />
        </View>


        <View style={{width: 300, height: 30, backgroundColor: '#89dee2', alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <TextInput
               placeholder="Your Password"
               placeholderTextColor="white"
               returnKeyType="go"
               value={value1}
               style={styles.textInput}
               secureTextEntry={true}
               autoCapitalize="none"
             />
         </View>


        <View style={{flex: 3, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <Button
        onPress={this.login}
        title="Log In"
        color="#008000"
        accessibilityLabel="Click here to Log In"/>
         <Text style={{color: '#000000', marginTop: 20}}
            onPress={() => Linking.openURL('')}>
              Click to Reset Password
         </Text>
        </View>

        


        <View style={styles.signUp}>
        <Button
        onPress={() => {
        alert('Everton 2021 league champions!');
        }}
        title="Sign Up"
        color="#000000"
        accessibilityLabel="Click here to Sign Up"/>
        </View>

      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89dee2',
    alignItems: 'center',
    justifyContent: 'center',
},
  title: {
     flex: 2,
     flexDirection: 'column',
     color: '#888',
     backgroundColor: '#89dee2',
     justifyContent: 'flex-end',
},
login: {
     fontSize: 30,
     fontWeight: 'bold',
},
signUp: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#89dee2',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 70,
    fontWeight: 'bold',
},
textInput: {
  flex: 3,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  color: 'white',
},
});

export default mainApp;