import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Home from './Pages/Home';
import UserProfile from './Pages/UserProfile';
import HealthInformation from './Pages/HealthInformation';
import ChangePassword from './Pages/ChangePassword';
import UpdateInfo from './Pages/UpdateInfo';
import UpdateCovidSymptoms from './Pages/UpdateCovidSymptoms';
import NoSymptoms from './Pages/NoSymptoms';
import HaveSymptoms from './Pages/HaveSymptoms';

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
            name="HealthInformation"
            component={HealthInformation}
          />
          <Stack.Screen
            name="ChangePassword"
            component={ChangePassword}
          />
          <Stack.Screen
            name="UpdateInfo"
            component={UpdateInfo}
          />
          <Stack.Screen
            name="UpdateCovidSymptoms"
            component={UpdateCovidSymptoms}
          />
          <Stack.Screen
            name="NoSymptoms"
            component={NoSymptoms}
          />
          <Stack.Screen
            name="HaveSymptoms"
            component={HaveSymptoms}
          />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}


