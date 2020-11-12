import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';

class UserProfile extends React.Component {
render() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>{this.props.route.params.name}'s Profile</Text>
            <Text></Text>
        <View style={styles.textViewContact} >
            <Text style={styles.text}>E-Mail Address</Text> 
            <Text style={styles.subText}>{this.props.route.params.email}</Text>
            <Text></Text>
            <Text style={styles.text}>Phone Number</Text>
            <Text style={styles.subText}>{this.props.route.params.contactNo}</Text>
        </View>
        <View style={styles.textViewDetails} >
            <Text></Text>
            <Text style={styles.text}>DOB</Text> 
            <Text style={styles.subText}>{this.props.route.params.DOB}</Text>
            <Text></Text>
            <Text style={styles.text}>Gender</Text>
            <Text style={styles.subText}>{this.props.route.params.gender}</Text>
            <Text></Text>
            <Text style={styles.text}>Address</Text>
            <Text style={[styles.subText, { marginBottom: 40 }]}>{this.props.route.params.address}</Text>
            
        </View>
        <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate('ChangePassword', { email: this.props.route.params.email })}
              style={styles.userButton}>
              <Text style={styles.loginText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate('UpdateInfo')}
              style={styles.userButton}>
              <Text style={styles.loginText}>Update Details</Text>
            </TouchableOpacity>
  </View>
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
    subContainer: {
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
    textViewContact:{
        width:"80%",
        borderRadius:25,
        height:100,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    textViewDetails:{
        marginTop: 40,
        width:"80%",
        borderRadius:25,
        height:100,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    userButton:{
        width:"80%",
        backgroundColor:"green",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
    text:{
        color: "#fb5b5a",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight:"bold",
    },
    subText:{
        color: "#fb5b5a",
        fontSize: 16,
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"green",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      }
});

export default UserProfile;