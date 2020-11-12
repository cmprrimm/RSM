import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Linking, localStorage } from 'react-native';

class Home extends React.Component {

    UserLogoutFunction = () =>{
        ;
      }

    UserProfileFunction = () =>{
        this.props.navigation.navigate('UserProfile', { name: this.props.route.params.name,
                                                        email: this.props.route.params.email,
                                                        contactNo: this.props.route.params.contactNo,
                                                        DOB: this.props.route.params.DOB,
                                                        gender: this.props.route.params.gender,
                                                        address: this.props.route.params.address});
      }

    UpdateSymptomsFunction = () =>{
        this.props.navigation.navigate('UpdateSymptoms');
      }

render(){

    const {goBack} = this.props.navigation;

  return (
      <View style={styles.container}>
        <Text style={styles.logo}> Welcome {this.props.route.params.name}</Text>
        <TouchableOpacity  onPress={this.UserProfileFunction}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this.UpdateSymptomsFunction} 
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Update Symptoms</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.gov.uk/coronavirus')}
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Read Latest Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ () => goBack(null) }
          style={styles.loginBtn}>
          <Text style={styles.loginText}>Log Out</Text>
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
  fontSize:50,
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
signUpText:{
    color:"red"
},
forgotText:{
  color:"red",
  fontSize:14
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

export default Home;