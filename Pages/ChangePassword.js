import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Alert } from 'react-native';

class ChangePassword extends React.Component {
    state = {
        newPassword: "",
        confirmPassword: "",
    }

        ResetPasswordFunction = () =>{

         const { newPassword }  = this.state ;
         const { confirmPassword }  = this.state ;

         if (newPassword !== "") {

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
                            this.props.navigation.navigate('Home');

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
         else {
            Alert.alert("Please enter a new password!")
         }
      }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Change Password</Text>
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
                        placeholder="Confirm New Password" 
                        placeholderTextColor="#003f5c"
                        autoCompleteType="password"
                        returnKeyType="go"
                        onSubmitEditing={ this.ResetPasswordFunction }
                        onChangeText={text => this.setState({ confirmPassword: text })} />
                </View>
                <TouchableOpacity onPress={ this.ResetPasswordFunction }
                    style={styles.changePasswordButton}>
                    <Text style={styles.changePasswordText}>Change Password</Text>
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
        fontSize: 45,
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
    changePasswordButton: {
        width: "80%",
        backgroundColor: "red",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    changePasswordText: {
        color: "white"
    }
});

export default ChangePassword;