import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';


class SignUp extends React.Component {
    state = {
        email: "",
        password: "",
        fullName: "",
        address: "",
        gender: "",
        DOB: "",
        contactNo: "",
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Register!</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#003f5c"
                        keyboardType="email-address"
                        autoCompleteType="email"
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
                        returnKeyType="next"
                        onSubmitEditing={() => { this.address.focus(); }}
                        onChangeText={text => this.setState({ fullName: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.address = input; }}
                        style={styles.inputText}
                        placeholder="Address"
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
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.DOB = input; }}
                        style={styles.inputText}
                        placeholder="Date of Birth"
                        placeholderTextColor="#003f5c"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.number.focus(); }}
                        onChangeText={text => this.setState({ DOB: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.number = input; }}
                        style={styles.inputText}
                        placeholder="Contact Number"
                        placeholderTextColor="#003f5c"
                        autoCompleteType="tel"
                        returnKeyType="go"
                        onSubmitEditing={ () => this.props.navigation.navigate('Login') }
                        onChangeText={text => this.setState({ contantNo: text })} />
                </View>
                <TouchableOpacity
                    
                    style={styles.registerBtn}
                    onPress={() =>
                        this.props.navigation.navigate('Login')}
                    >
                    <Text style={styles.signUpText}>Register</Text>
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
        backgroundColor: "red",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    signUpText: {
        color: "white"
    }
});

export default SignUp;