import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Alert } from 'react-native';

class UpdateInfo extends React.Component {
    state = {
        email: this.props.route.params.email,
        address: this.props.route.params.address,
        contactNo: this.props.route.params.contactNo,
    }

        UpdateInfoFunction = () =>{

         const { email }  = this.state ;
         const { address }  = this.state ;
         const { contactNo } = this.state;

         fetch('https://rsmcovidapp.000webhostapp.com/UpdateInfo.php', {
           method: 'POST',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({

             ID: this.props.route.params.ID,

             email: email,

             address: address,

             contactNo: contactNo

           })

         }).then((response) => response.json())
               .then((responseJson) => {

                 // If server response message same as Data Matched
                if(responseJson === 'Information Updated')
                 {

                     //Then Alert User and send to Home page.
                     Alert.alert("Information Updated")
                     this.props.navigation.navigate('UserProfile', { email: email, address: address, contactNo: contactNo });

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
                <Text style={styles.logo}>Update Information</Text>
                <View style={styles.inputView} >
                    <TextInput defaultValue = { this.props.route.params.email }
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
                    <TextInput defaultValue = { this.props.route.params.address }
                        ref={(input) => { this.address = input; }}
                        style={styles.inputText}
                        placeholder="Address"
                        placeholderTextColor="#003f5c"
                        returnKeyType="next"
                        onSubmitEditing={() => { this.contactNo.focus(); }}
                        onChangeText={text => this.setState({ address: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput defaultValue = { this.props.route.params.contactNo }
                        ref={(input) => { this.contactNo = input; }}
                        style={styles.inputText}
                        placeholder="Contact Number"
                        placeholderTextColor="#003f5c"
                        autoCompleteType="tel"
                        returnKeyType="go"
                        onSubmitEditing={ this.UpdateInfoFunction }
                        onChangeText={text => this.setState({ contactNo: text })} />
                </View>
                <TouchableOpacity onPress={ this.UpdateInfoFunction }
                  style={styles.updateButton}>
                  <Text style={styles.updateText}>Update Information</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('UserProfile')}
                  style={styles.updateButton}>
                  <Text style={styles.updateText}>Back</Text>
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
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    updateText: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 18
    }
});

export default UpdateInfo;