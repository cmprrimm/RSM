import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { Alert } from 'react-native';

class HealthInformation extends React.Component {

    state = {
        selected: null,
        smoker: this.props.route.params.smoker,
        pregnant: this.props.route.params.pregnant,
        hospitalised: this.props.route.params.hospitalised,
        cardioProblem: this.props.route.params.cardioProblem,
        disability: this.props.route.params.disability,
        cancerTreatment: this.props.route.params.cancerTreatment,
        highRiskInfection: this.props.route.params.highRiskInfection,
        covidSymptoms: this.props.route.params.covidSymptoms
    };

    smoker(flag, button) {
        if (flag == 1) {
            this.setState({ smoker: true });
        }
        this.setState({ smoker: button })
    }

    pregnant(flag, button) {
        if (flag == 1) {
            this.setState({ pregnant: true });
        }
        this.setState({ pregnant: button })
    }


    hospitalised(flag, button) {
        if (flag == 1) {
            this.setState({ hospitalised: true });
        }
        this.setState({ hospitalised: button })
    }

    cardioProblem(flag, button) {
        if (flag == 1) {
            this.setState({ cardioProblem: true });
        }
        this.setState({ cardioProblem: button })
    }

    disability(flag, button) {
        if (flag == 1) {
            this.setState({ disability: true });
        }
        this.setState({ disability: button })
    }

    cancerTreatment(flag, button) {
        if (flag == 1) {
            this.setState({ cancerTreatment: true });
        }
        this.setState({ cancerTreatment: button })
    }

    highRiskInfection(flag, button) {
        if (flag == 1) {
            this.setState({ highRiskInfection: true });
        }
        this.setState({ highRiskInfection: button })
    }

    covidSymptoms(flag, button) {
        if (flag == 1) {
            this.setState({ covidSymptoms: true });
        }
        this.setState({ covidSymptoms: button })
    }

    UpdateSymptomsFunction = () =>{

         const { smoker }  = this.state ;
         const { pregnant }  = this.state ;
         const { hospitalised }  = this.state ;
         const { cardioProblem } = this.state ;
         const { disability } = this.state ;
         const { cancerTreatment } = this.state ;
         const { highRiskInfection } = this.state ;
         const { covidSymptoms }  = this.state ;

         fetch('https://rsmcovidapp.000webhostapp.com/UpdateSymptoms.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({

                ID: this.props.route.params.ID,

                smoker: smoker,

                pregnant: pregnant,

                hospitalised: hospitalised,

                cardioProblem: cardioProblem,

                disability: disability,

                cancerTreatment: cancerTreatment,

                highRiskInfection: highRiskInfection,

                covidSymptoms: covidSymptoms

              })
         }).then((response) => response.json())
               .then((responseJson) => {

                 // If server response message same as Data Matched
                if(responseJson === 'Symptoms Updated')
                 {

                     //If user has COVID symptoms send to COVID page if not send to home page
                     if (this.state.covidSymptoms === '1') {
                        this.props.navigation.navigate('UpdateCovidSymptoms', { ID: this.props.route.params.ID,
                                                                                smoker: smoker,
                                                                                pregnant: pregnant,
                                                                                hospitalised: hospitalised,
                                                                                cardioProblem: cardioProblem,
                                                                                disability: disability,
                                                                                cancerTreatment: cancerTreatment,
                                                                                highRiskInfection: highRiskInfection,
                                                                                covidSymptoms: covidSymptoms});
                     }
                     else {
                        Alert.alert("This information has now been submitted");
                        this.props.navigation.navigate('Home', { smoker: smoker,
                                                                 pregnant: pregnant,
                                                                 hospitalised: hospitalised,
                                                                 cardioProblem: cardioProblem,
                                                                 disability: disability,
                                                                 cancerTreatment: cancerTreatment,
                                                                 highRiskInfection: highRiskInfection,
                                                                 covidSymptoms: covidSymptoms});
                     }

                 }
                 else{

                   Alert.alert(responseJson);
                 }
                 

               }).catch((error) => {
                console.error(error)
               })

    }

    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.logo}>Health Information</Text>
                <Text style={styles.subLogo}>Select the choices that apply to you </Text>
                <ScrollView style={{width: "100%"}}>
                <View style={styles.container}>
                <View style={styles.inputView} >
                    <TouchableHighlight
                        onPress={() => this.smoker('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.smoker === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                Click here if you smoke.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView} >
                    <TouchableOpacity
                        onPress={() => this.pregnant('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.pregnant === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                Click here if you're Pregnant.
                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView} >
                    <TouchableHighlight
                        onPress={() => this.hospitalised('any flag', '1')}
                        backgroundColor="red">
                        <View style={{ backgroundColor: (this.state.hospitalised === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you have recently been hospitalised in the past 3 months.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text></Text>
                <Text></Text>
                <Text style={styles.subLogo}>Select the medical conditions that apply to you below</Text>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.cardioProblem('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.cardioProblem === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you have a cardio problem.
                </Text>
                            <Text style={styles.subText}>
                                E.G Heart or Lung problem or anything that affects your breathing.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView} >
                    <TouchableOpacity
                        onPress={() => this.disability('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.disability === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text}>
                                Click here if you have a disability. 
                </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputView} >
                    <TouchableHighlight
                        onPress={() => this.cancerTreatment('any flag', '1')}
                        backgroundColor="red">
                        <View style={{ backgroundColor: (this.state.cancerTreatment === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you are currently undergoing treatment for Cancer.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.highRiskInfection('any flag', '1')}
                        backgroundColor="red">
                        <View style={{ backgroundColor: (this.state.highRiskInfection === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you are at high risk of catching infections.
                </Text>
                <Text style={styles.subText}>
                                Such as SCID or sickle cell, or high doses of steroids or immunosuppressant medicine.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <Text></Text>
                <Text></Text>
                <Text style={styles.subLogo}>COVID-19 Questions</Text>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.covidSymptoms('any flag', '1')}
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.covidSymptoms === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you are experiencing any COVID-19 Symptoms.
                </Text>
                            <Text style={styles.subText}>
                                If selected further questions will be asked relating to COVID-19 symptoms.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <TouchableOpacity onPress={ this.UpdateSymptomsFunction }
                    style={styles.nextBtn}>
                    <Text style={styles.nextText}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}
                  style={styles.homeButton}>
                  <Text style={styles.nextText}>Home</Text>
                </TouchableOpacity>
                </View>
                </ScrollView>
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
        fontSize: 35,
        color: "#fb5b5a",
        marginBottom: 10,
        marginTop: 50,
    },
    subLogo: {
        flexDirection: 'row',
        fontWeight: "bold",
        fontSize: 20,
        color: "#fb5b5a",
        marginBottom: 20,
        alignContent: "center",
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    text: {
        height: 20,
        color: "black",
        fontSize: 14.5,
        fontWeight: "bold",
        flexWrap: 'wrap',
        textAlign: 'center',
    },
    text1: {
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
    inputView: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 15,
        height: 65,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    inputView1: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 15,
        height: 110,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    nextBtn: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 10
    },
    homeButton: {
        width: "80%",
        backgroundColor: "#fb5b5a",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
        marginBottom: 40,
    },
    nextText: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 18
    },
    scroll:{
        backgroundColor: '#00A9CE',
    },
});

export default HealthInformation;