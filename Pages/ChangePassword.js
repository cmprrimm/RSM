import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


class ChangePassword extends React.Component {
    state = {
        Password: "",
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
                        returnKeyType="next"
                        onChangeText={text => this.setState({confirmPassword:text})}/>
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        ref={(input) => { this.confirmPassword = input; }}  
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Confirm New Password" 
                        placeholderTextColor="#003f5c"
                        returnKeyType="go"/>
                </View>
                <TouchableOpacity
                    style={styles.changePasswordButton}
                    onPress={() =>
                        this.props.navigation.navigate('Home')}
                    >
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