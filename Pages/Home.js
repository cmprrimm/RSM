import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

class Home extends React.Component {

    UserProfileFunction = () =>{
        this.props.navigation.navigate('UserProfile', { ID: this.props.route.params.ID,
                                                        name: this.props.route.params.name,
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
        <Text style={styles.logo}>Welcome {this.props.route.params.name}</Text>
        <TouchableOpacity  onPress={this.UserProfileFunction}
          style={styles.Button}>
          <Text style={styles.buttonText}>View Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={this.UpdateSymptomsFunction} 
          style={styles.Button}>
          <Text style={styles.buttonText}>Update Symptoms</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ ()=> Linking.openURL('https://www.gov.uk/coronavirus')}
          style={styles.Button}>
          <Text style={styles.buttonText}>Read Latest Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={ () => goBack(null) }
          style={styles.Button}>
          <Text style={styles.buttonText}>Log Out</Text>
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
  fontSize: 40,
  color:"#fb5b5a",
  marginBottom: 40
},
Button:{
  width:"80%",
  backgroundColor:"#fb5b5a",
  borderRadius:25,
  height:50,
  alignItems:"center",
  justifyContent:"center",
  marginTop:40,
  marginBottom:10
},
buttonText:{
  color:"white",
  fontWeight:"bold",
}
});

export default Home;