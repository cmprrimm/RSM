import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Alert } from 'react-native';

class UpdateSymptoms extends React.Component {
render() {
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Select Symptoms</Text>
            <Text style={styles.subLogo}>Select as many of the symptoms that apply to you</Text>
            <View style={styles.inputView} >
            <Text style={styles.text}>A high Temprature (fever)</Text>
            <Text style={styles.subText}>This means that you feel hot to touch on your chest or back - you don't need to measure your 
            temprature with a themometer.</Text>
                </View>
            <View style={styles.inputView} >
            <Text style={styles.text}>A new continuous cough</Text>
            <Text style={styles.subText}>This means coughing a lot for more than an hour, or three or more coughing episodes in 24 hours 
            (if you usually have a cough, it may be worse than usual).</Text>
                </View>
            <View style={styles.inputView} >
            <Text style={styles.text}>A change to your sense of smell or taste</Text>
            <Text style={styles.subText}>This means you have noticed that you cannot smell or taste anyting, or that things smell or 
            taste differnt to normal.</Text>
                </View>
            <TouchableOpacity  onPress={alert='Submitted Covid Symptoms'}
                        style={styles.submitButton}>
                <Text style={styles.submitText}>Submit</Text>
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
        marginBottom: 40,
    },
    subLogo: {
        fontWeight: "bold",
        fontSize: 25,
        color: "#fb5b5a",
        marginBottom: 40,
    },
    text: {
        height: 20,
        color: "black",
        fontSize: 14.5,
        fontWeight:"bold",
    },
    subText: {
        color: "black",
        fontSize: 13, 
    },
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        height: 115,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    submitButton:{
        width:"80%",
        backgroundColor:"red",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      submitText:{
        color:"white"
      }
});

export default UpdateSymptoms;