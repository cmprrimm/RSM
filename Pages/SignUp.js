import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import DatePicker from 'react-native-datepicker'
import { Alert } from 'react-native';

class SignUp extends React.Component {

    onChanged(text) {
        let newText = '';
        let numbers = '0123456789';

        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1) {
                newText = newText + text[i];
            }
            else {
                // your call back function
                alert("please enter numbers only");
            }
        }
        this.setState({ contactNo: text });
    }

    state = {
        email: "",
        password: "",
        fullName: "",
        address: "",
        gender: "",
        DOB: "",
        contactNo: "",
    }

    UserRegistrationFunction = () => {

        const { email } = this.state;
        const { password } = this.state;
        const { fullName } = this.state;
        const { address } = this.state;
        const { gender } = this.state;
        const { DOB } = this.state;
        const { contactNo } = this.state;

        fetch('https://rsmcovidapp.000webhostapp.com//User_Registration.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({

                email: email,

                password: password,

                fullName: fullName,

                address: address,

                gender: gender,

                DOB: DOB,

                contactNo: contactNo

            })

        }).then((response) => response.json())
            .then((responseJson) => {

                // If server response message same as Data Matched
                if (responseJson === 'User Registered Successfully') {

                    //Then Alert User and Send back to Login Page.
                    Alert.alert(responseJson)
                    this.props.navigation.navigate('Login');
                    //this.props.navigation.navigate('Second', { Email: UserEmail });

                }
                else {

                    Alert.alert(responseJson);
                }

            }).catch((error) => {
                console.error(error);
            });

    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <ScrollView style={styles.scroll}>
                    <View style={styles.container}>
                        <Text style={styles.logo}>Register!</Text>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="Email"
                                placeholderTextColor="#003f5c"
                                keyboardType="email-address"
                                autoCompleteType="email"
                                textContentType="emailAddress"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.password.focus(); }}
                                onChangeText={text => this.setState({ email: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.password = input; }}
                                secureTextEntry
                                style={styles.inputText}
                                placeholder="Password"
                                placeholderTextColor="#003f5c"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.fullName.focus(); }}
                                onChangeText={text => this.setState({ password: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.fullName = input; }}
                                style={styles.inputText}
                                placeholder="Full Name"
                                placeholderTextColor="#003f5c"
                                autoCompleteType="name"
                                textContentType="givenName"
                                textContentType="familyName"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.address.focus(); }}
                                onChangeText={text => this.setState({ fullName: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.address = input; }}
                                style={styles.inputText}
                                placeholder="Address"
                                textContentType="fullStreetAddress"
                                placeholderTextColor="#003f5c"
                                autoCompleteType="street-address"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.gender.focus(); }}
                                onChangeText={text => this.setState({ address: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.gender = input; }}
                                style={styles.inputText}
                                placeholder="Gender"
                                placeholderTextColor="#003f5c"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.DOB.focus(); }}
                                onChangeText={text => this.setState({ gender: text })} />
                        </View>
                        <View style={styles.inputView}>
                            <DatePicker date={this.state.DOB} showIcon={true} placeholder="Date of Birth" mode="date" format="DD-MM-YYYY"
                                customStyles={{
                                    dateInput: {
                                        borderWidth: 0,
                                        height: 50,
                                        width: 170,
                                        right: 30,
                                    },
                                    dateText: {
                                        height: 50,
                                        color: "black",
                                        marginTop: 20
                                    },
                                    placeholderText: {
                                        height: 50,
                                        color: "black",
                                        marginTop: 25,
                                        marginLeft: 20
                                    }
                                }
                                }
                                onDateChange={DOB =>  this.setState({ DOB: DOB }) }></DatePicker>
                        </View>

                        {/* <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.DOB = input; }}
                                style={styles.inputText}
                                placeholder="Date of Birth"
                                placeholderTextColor="#003f5c"
                                returnKeyType="next"
                                onSubmitEditing={() => { this.number.focus(); }}
                                onChangeText={text => this.setState({ DOB: text })} />
                        </View> */}
                        
                        <View style={styles.inputView} >
                            <TextInput
                                ref={(input) => { this.number = input; }}
                                style={styles.inputText}
                                placeholder="Contact Number"
                                placeholderTextColor="#003f5c"
                                textContentType="telephoneNumber"
                                autoCompleteType="tel"
                                returnKeyType="go"
                                onSubmitEditing={() => this.props.navigation.navigate('Login')}
                                onChangeText={(text) => this.setState({ contactNo: text })}
                                onChangeText={(text) => this.onChanged(text)}
                            />
                        </View>
                        <TouchableOpacity onPress={this.UserRegistrationFunction}
                            style={styles.registerBtn}>
                            <Text style={styles.signUpText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}
                            style={styles.registerBtn}>
                            <Text style={styles.signUpText}>Back</Text>
                        </TouchableOpacity>
                    </View >
                </ScrollView>
            </KeyboardAvoidingView>
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
        marginBottom: 40,
        marginTop: 50
    },
    scroll: {
        backgroundColor: '#00A9CE',
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
    signUpText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
});

export default SignUp;