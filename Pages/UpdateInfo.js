import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Alert } from 'react-native';

class SignUp extends React.Component {
    // state = {
    //     email: "",
    //     password: "",
    //     fullName: "",
    //     address: "",
    //     gender: "",
    //     DOB: "",
    //     contactNo: "",
    // }

    // UserRegistrationFunction = () =>{

    //  const { email }  = this.state ;
    //  const { password }  = this.state ;
    //  const { fullName }  = this.state ;
    //  const { address }  = this.state ;
    //  const { gender }  = this.state ;
    //  const { DOB }  = this.state ;
    //  const { contactNo }  = this.state ;

    // fetch('https://rsmcovidapp.000webhostapp.com//User_Registration.php', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({

    //     email: email,

    //     password: password,

    //     fullName: fullName,

    //     address: address,

    //     gender: gender,

    //     DOB: DOB,

    //     contactNo: contactNo

    //   })

    // }).then((response) => response.json())
    //       .then((responseJson) => {

    //         // If server response message same as Data Matched
    //        if(responseJson === 'User Registered Successfully')
    //         {

    //             //Then Alert User and Send back to Login Page.
    //             Alert.alert(responseJson)
    //             this.props.navigation.navigate('Login');
    //             //this.props.navigation.navigate('Second', { Email: UserEmail });

    //         }
    //         else{

    //           Alert.alert(responseJson);
    //         }

    //       }).catch((error) => {
    //         console.error(error);
    //       });

    //   }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Update Information</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        keyboardType="email-address"
                        autoCompleteType="email"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.address.focus(); }}
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.address = input; }}
                        style={styles.inputText}
                        placeholder="Address"
                        placeholderTextColor="#003f5c"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.number.focus(); }}
                        onChangeText={text => this.setState({ number: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.number = input; }}
                        style={styles.inputText}
                        placeholder="Contact Number"
                        placeholderTextColor="#003f5c"
                        autoCompleteType="tel"
                        returnKeyType="go"
                        onSubmitEditing={ () => this.props.navigation.navigate('Home') }
                        onChangeText={text => this.setState({ contactNo: text })} />
                </View>
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('Home') }
                  style={styles.updateButton}>
                  <Text style={styles.updateText}>Update Information</Text>
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
    updateButton: {
        width: "80%",
        backgroundColor: "red",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    updateText: {
        color: "white"
    }
});

export default SignUp;