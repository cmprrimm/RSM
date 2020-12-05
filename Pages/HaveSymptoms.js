import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, StatusBar } from 'react-native';

class HaveSymptoms extends React.Component {
      render(){
        return (
          <View style={styles.container}>
            <Text style={styles.logo}>You are likely to have Coronavirus</Text>
            <Text></Text>
            <Text style={styles.subLogo}>If you haven't been tested already please isolate until you are tested. If you have a positive test result you must isolate for 14 days.</Text>
            <Text></Text>
            <Text style={styles.subLogo}>For further advice, please contact:</Text>
            <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.gov.uk/get-coronavirus-test')}
                style={styles.otherButton}>
                <Text style={styles.otherButtonText}>Get a test here!</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() =>
                this.props.navigation.navigate('Home')}
                style={styles.Button}>
                <Text style={styles.buttonText}>Go to Home Page</Text>
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
    logo:{
      fontWeight:"bold",
      fontSize:35,
      color:"#fb5b5a",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"white",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
      height:50,
      color:"black"
    },
    subLogo: {
    flexDirection: 'row',
    fontWeight: "bold",
    fontSize: 20,
    color: "#fb5b5a",
    marginBottom: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
        alignContent: "center"
    },
    buttonText:{
      color:"white",
      textTransform: "uppercase",
    },
    otherButtonText:{
        color:"#fb5b5a",
        textTransform: "uppercase",
        fontWeight:"bold",
        textDecorationLine: 'underline',
      },
    Button:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop: 20,
      marginBottom:10
    },
    otherButton:{
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginBottom:10
      }
  });

export default NoSymptoms;