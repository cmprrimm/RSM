import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

class SignUpScreen extends React.Component {

  state = {
    email: "",
    password: "",
    fullName: "",
    address: "",
    gender: "",
    DOB: "",
    cNumber: "",
  }
  //Page layout
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Sign Up!</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
    
            style={styles.inputText}
            placeholder="Full Name "
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ fullName: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            
            style={styles.inputText}
            placeholder="Address"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ address: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            
            style={styles.inputText}
            placeholder="Gender"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ gender: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            
            style={styles.inputText}
            placeholder="Date Of Birth"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ DOB: text})} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            
            style={styles.inputText}
            placeholder="Contact Number"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ cNumber: text})} />
        </View>
           <TouchableOpacity style={styles.SignUpbtn}
          onPress={() =>
            this.props.navigation.navigate('Login')
          }>
          <Text style={styles.loginText}>Save!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

//style attributes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41B6E6',
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
    color: "black",
    alignItems: "center"
  },
  forgotPass: {
    color: "blue",
    fontSize: 14
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "green",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "black"
  },
  signUpText: {
    color: "red",
  },
  SignUpbtn: {
    width: "80%",
    backgroundColor: "red",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
});
export default SignUpScreen