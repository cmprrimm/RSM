import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import UpdateSymptoms from './Pages/UpdateSymptoms';
import ChangePassword from './Pages/ChangePassword';
import UpdateInfo from './Pages/UpdateInfo';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
          />
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="UserProfile"
            component={UserProfile}
          />
          <Stack.Screen
            name="UpdateSymptoms"
            component={UpdateSymptoms}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
          />
          <Stack.Screen
            name="UpdateInfo"
            component={UpdateInfo}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}


