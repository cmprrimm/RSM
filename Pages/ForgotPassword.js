import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DatePicker from 'react-native-datepicker';

class CheckUser extends React.Component {
    state = {
        email: "",
        DOB: "",
    }

        CheckUserFunction = () =>{

         const { email }  = this.state ;
         const { DOB }  = this.state ;

        fetch('https://rsmcovidapp.000webhostapp.com/CheckUser.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({

            email: email,

            DOB: DOB

          })

        }).then((response) => response.json())
              .then((responseJson) => {

                // If server response message same as Data Matched
               if(responseJson === 'Data Matched')
                {

                    //Then Alert User and send to Home page.
                    //THIS IS WHERE EMAIL IS PASSED TO NEXT PAGE
                    this.props.navigation.navigate('ResetPassword', { email: email });

                }
                else{

                  Alert.alert(responseJson);
                }

              }).catch((error) => {
                console.error(error)
              });

          }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Password Reset!</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        keyboardType="email-address"
                        autoCompleteType="email"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.DOB.focus(); }}
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <DatePicker date={this.state.DOB} showIcon={false} placeholder="Date of Birth" mode="date" format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateInput: {
                                borderWidth: 0,
                                height: 50,
                                width: 170,
                                right: 40,
                            },
                            dateText: {
                                height: 50,
                                color: "black",
                                marginTop: 35,
                                marginLeft: 20
                            },
                            placeholderText: {
                                height: 50,
                                color: "#003f5c",
                                marginTop: 35,
                                marginLeft: 20
                            }
                        }
                        }
                        onDateChange={DOB =>  this.setState({ DOB: DOB }) }></DatePicker>
                </View>
                <TouchableOpacity  onPress={ this.CheckUserFunction }
                    style={styles.registerBtn}>
                    <Text style={styles.forgotPasswordText}>Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}
                    style={styles.registerBtn}>
                    <Text style={styles.forgotPasswordText}>Back</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

class ResetPassword extends React.Component {

    state = {
        newPassword: "",
        confirmPassword: "",
    }

        ResetPasswordFunction = () =>{

         const { newPassword }  = this.state ;
         const { confirmPassword }  = this.state ;

         if (newPassword !== ""){

             if (newPassword === confirmPassword) {

                fetch('https://rsmcovidapp.000webhostapp.com/ResetPassword.php', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({

                    email: this.props.route.params.email,

                    newPassword: newPassword

                  })

                }).then((response) => response.json())
                      .then((responseJson) => {

                        // If server response message same as Data Matched
                       if(responseJson === 'Password Changed')
                        {

                            //Then Alert User and send to Home page.
                            Alert.alert("Password Changed")
                            this.props.navigation.navigate('Login');

                        }
                        else{

                          Alert.alert(responseJson);
                        }

                      }).catch((error) => {
                        console.error(error)
                      });

             }
             else{
                Alert.alert("New Password and Confirm Password do not match!")
             }
         }
         else{
            Alert.alert("Please enter a new password!")
         }
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Password Reset!</Text>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="New Password"
                        placeholderTextColor="#003f5c"
                        autoCompleteType="password"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.confirmPassword.focus(); }}
                        onChangeText={text => this.setState({ newPassword: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.confirmPassword = input; }}
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Confirm Password"
                        placeholderTextColor="#003f5c"
                        autoCompleteType="password"
                        returnKeyType="go"
                        onSubmitEditing={ this.ResetPasswordFunction }
                        onChangeText={text => this.setState({ confirmPassword: text })} />
                </View>
                <TouchableOpacity  onPress={ this.ResetPasswordFunction }
                    style={styles.registerBtn}>
                    <Text style={styles.forgotPasswordText}>Reset Password</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('CheckUser')}
                    style={styles.registerBtn}>
                    <Text style={styles.forgotPasswordText}>Back</Text>
                </TouchableOpacity>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00A9CE',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#fb5b5a",
        marginBottom: 40
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    registerBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    forgotPasswordText: {
        color: "white", 
        fontSize: 18,
        fontWeight: "bold",
    }
});

const Stack = createStackNavigator();
export default class ForgotPassword extends React.Component {
  render() {
    return (
        <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        >
          <Stack.Screen
            name="CheckUser"
            component={CheckUser}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
          />
        </Stack.Navigator>
    );
  }
}