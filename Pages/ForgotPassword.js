import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';


class ForgotPassword extends React.Component {
    state = {
        email: "",
        DOB: "",
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
                    <TextInput
                        ref={(input) => { this.DOB = input; }}
                        style={styles.inputText}
                        placeholder="Date of Birth"
                        placeholderTextColor="#003f5c"
                        returnKeyType="go"
                        onSubmitEditing={ () => this.props.navigation.navigate('Login') }
                        onChangeText={text => this.setState({ DOB: text })} />
                </View>
                <TouchableOpacity
                    style={styles.registerBtn}
                    onPress={() =>
                        this.props.navigation.navigate('Login')}
                    >
                    <Text style={styles.forgotPasswordText}>Reset Password</Text>
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
    forgotPasswordText: {
        color: "white"
    }
});

export default ForgotPassword;