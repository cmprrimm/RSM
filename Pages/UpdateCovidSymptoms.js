import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableHighlight} from 'react-native';
import { Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

class UpdateCovidSymptoms extends React.Component {

    state = {
        selected: null,
        cough: '',
        highTemperature: '',
        changeSmellTaste: '',
    };

    cough(flag, button) {
        if (flag == 1) {
            this.setState({ cough: true });
        }
        this.setState({ cough: button })
    }

    highTemperature(flag, button) {
        if (flag == 1) {
            this.setState({ highTemperature: true });
        }
        this.setState({ highTemperature: button })
    }

    changeSmellTaste(flag, button) {
        if (flag == 1) {
            this.setState({ changeSmellTaste: true });
        }
        this.setState({ changeSmellTaste: button })
    }

    UpdateSymptomsFunction = () =>{

         const { Smoker }  = this.state ;
         const { Pregnant }  = this.state ;
         const { MedicalConditions }  = this.state ;
         const { Hospitalised }  = this.state ;
         const { CovidSymptoms }  = this.state ;

         fetch('https://rsmcovidapp.000webhostapp.com/UpdateSymptoms.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({

                email: this.props.route.params.email,

                Smoker: Smoker,

                Pregnant: Pregnant,

                MedicalConditions: MedicalConditions,

                Hospitalised: Hospitalised,

                CovidSymptoms: CovidSymptoms

              })

         }).then((response) => response.json())
               .then((responseJson) => {

                 // If server response message same as Data Matched
                if(responseJson === 'Symptoms Updated')
                 {

                     //Then Alert User and send to Home page.
                     { if (this.state.CovidSymptoms === '1') { this.props.navigation.navigate('CovidSymptoms') } else { this.props.navigation.navigate('Home') } };

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
            <SafeAreaView style={styles.container}>
                <Text style={styles.logo}>Covid Symptoms</Text>
                <Text style={styles.subLogo}>Select the choices that apply to you</Text>
                <ScrollView style={styles.scroll}>
                <View style={styles.inputView} >
                    <TouchableHighlight
                        onPress={() => this.cough('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.cough === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                Do you have a continuous cough
                </Text>
                            <Text style={styles.subText}>
                                This means coughing a lot for more than an hour, or three or more coughing 
                                episodes in 24 hours (if you usually have a cough, it may be worse than usual).
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.highTemperature('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.highTemperature === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                Do you have a high temperature
                </Text>
                            <Text style={styles.subText}>
                                This means that you feel hot to touch on your chest or back - you don't need to measure 
                                your temperature with a thermometer.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.changeSmellTaste('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.changeSmellTaste === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                A change to your sense of smell or taste
                </Text>
                            <Text style={styles.subText}>
                                This means you have noticed that you cannot smell or taste anyhting, or that things smell
                                or taste different to normal.
                </Text>
                        </View>
                    </TouchableHighlight>
                    </View>
                <View style={styles.textInputView} >
                <Text style={styles.text}>
                        Please enter the amount of days you have had symptoms.
                </Text>
                <Text></Text>
                <TextInput  
                    style={styles.daysSubText}
                    placeholder="Here" 
                    placeholderTextColor="black"
                    keyboardType="number-pad"
                    onSubmitEditing={() => { this.password.focus(); }}
                    onChangeText={text => this.setState({email:text})}/>
                </View>
                <TouchableOpacity onPress={ this.UpdateSymptomsFunction }
                    onPress={() => this.props.navigation.navigate('UpdateCovidSymptoms')}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('NoSymptoms')}
                    style={styles.otherButton}>
                    <Text style={styles.otherButtonText}>I don't have any of these symptoms</Text>
                </TouchableOpacity>
            </ScrollView>
            </SafeAreaView>
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
    scroll: {
        backgroundColor: '#00A9CE',
        width: '80%',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 38,
        color: "#fb5b5a",
        marginBottom: 10,
        marginTop: 20,
        alignContent: "center"
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
    text: {
        height: 40,
        color: "black",
        fontSize: 14.5,
        fontWeight: "bold",
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    subText: {
        color: "black",
        fontSize: 13,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    daysSubText: {
        color: "black",
        fontSize: 15,
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    inputView: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        height: 140,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    inputView1: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        height: 135,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    textInputView: {
        width: "100%",
        backgroundColor: "white",
        borderRadius: 15,
        height: 100,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    button: {
        width: "100%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    otherButton: {
        width: "100%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 10
    },
    buttonText: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 18
    },
    otherButtonText: {
        color: "#fb5b5a",
        fontWeight: "bold",
        fontSize: 16
    },
});

export default UpdateCovidSymptoms;