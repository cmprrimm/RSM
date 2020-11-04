import React from 'react';
import { StyleSheet, Text, View, TextInput, Button ,SafeAreaView, TouchableOpacity } from 'react-native';


export default function mainApp({ navigation }) {
  const [value] = React.useState();
  const [value1] = React.useState();

  const pressHandler = () => {
    navigation.navigate('SignUp')
  }

    return (
      <SafeAreaView style={styles.container}>
        <Navigator>
        
       


        <View style={styles.title}>
        <Text style={{color: '#fff', fontSize: 40}}>Patient Access</Text>
        </View>


        <View style={{width: 300, height: 30, backgroundColor: '#89dee2', alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <TextInput
               placeholder="Your Email"
               placeholderTextColor="white"
               keyboardType="email-address"
               returnKeyType="next"
               value={value}
               style={styles.textInput}
               autoCapitalize="none"
             />
        </View>


        <View style={{width: 300, height: 30, backgroundColor: '#89dee2', alignItems: 'center', justifyContent: 'center', marginTop: 70}}>
        <TextInput
               placeholder="Your Password"
               placeholderTextColor="white"
               returnKeyType="go"
               value={value1}
               style={styles.textInput}
               secureTextEntry={true}
               autoCapitalize="none"
             />
         </View>


        <View style={{flex: 3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "90%"}}>
        <TouchableOpacity
        style={styles.LoginButton}>
        <Text style={styles.TextButton}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.Resetbutton}>
        <Text style={styles.TextButton}>Reset Password</Text>
        </TouchableOpacity>
        </View>

        


        <View style={styles.signUp}>
        <Button
        onPress={pressHandler}
        title="Sign Up"
        color="#000000"
        accessibilityLabel="Click here to Sign Up"/>
        </View>
        </Navigator>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89dee2',
    alignItems: 'center',
    justifyContent: 'center',
},
  title: {
     flex: 2,
     flexDirection: 'column',
     color: '#888',
     backgroundColor: '#89dee2',
     justifyContent: 'flex-end',
},
login: {
     fontSize: 30,
     fontWeight: 'bold',
},
signUp: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#89dee2',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 70,
    fontWeight: 'bold',
},
textInput: {
  flex: 3,
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 20,
  color: 'white',
},
LoginButton: {
  backgroundColor: "#008000",
  padding: 15, 
  width: "45%",
},
Resetbutton: {
  backgroundColor: "#FF0000",
  padding: 15, 
  width: "45%",
},
TextButton: {
  fontSize: 14,
  textAlign: "center",
}
});

