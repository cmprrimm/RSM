import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//specifying location of pages to be imported for navigation.
import LoginScreen from './Pages/LoginScreen';
import SignUpScreen from './Pages/SignUpScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      //creates a navigation container
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        //creating screens for different pages
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App;