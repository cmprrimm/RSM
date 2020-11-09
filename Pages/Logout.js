import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


class Logout extends React.Component {
render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>You have now Logged Out</Text>
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
      fontSize:40,
      color:"#fb5b5a",
      marginBottom:40
    },
});

export default Logout;