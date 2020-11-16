import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';

class UpdateSymptoms extends React.Component {

    state = {
        selected: null,
        smoker: '',
        pregnant: '',
        MedicalConditions: '',
        Hospitalised:'',
        CovidSymptoms:''
    };

    Smoker(flag, button) {
        if (flag == 1) {
            this.setState({ smoker: true });
        }
        this.setState({ smoker: button })
    }

    Pregnant(flag, button) {
        if (flag == 1) {
            this.setState({ pregnant: true });
        }
        this.setState({ pregnant: button })
    }

    MedicalConditions(flag, button) {
        if (flag == 1) {
            this.setState({ MedicalConditions: true });
        }
        this.setState({ MedicalConditions: button })
    }

    Hospitalised(flag, button) {
        if (flag == 1) {
            this.setState({ Hospitalised: true });
        }
        this.setState({ Hospitalised: button })
    }

    CovidSymptoms(flag, button) {
        if (flag == 1) {
            this.setState({ covidSymptoms: true });
        }
        this.setState({ covidSymptoms: button })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Health Information</Text>
                <Text style={styles.subLogo}>Select the choices that apply to you </Text>
                <View style={styles.inputView} >
                    <TouchableHighlight
                        onPress={() => this.Smoker('any flag', '1')}
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
                        onPress={() => this.Pregnant('any flag', '1')}
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
                        onPress={() => this.MedicalConditions('any flag', '1') }
                        underlayColor="red">
                        <View style={{ backgroundColor: (this.state.MedicalConditions === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you have any underlying medical condtions.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                    style={styles.inputView}
                        onPress={() => this.Hospitalised('any flag', '1')}
                        backgroundColor="red">
                        <View style={{ backgroundColor: (this.state.Hospitalised === '1' ? '#fb5b5a' : 'white') }}>
                            <Text style={styles.text1}>
                                Click here if you have recently been hospitlised in the past 3 months.
                </Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.inputView1} >
                    <TouchableHighlight
                        onPress={() => this.CovidSymptoms('any flag', '1')}
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
                <TouchableOpacity onPress={() => { if (this.state.covidSymptoms === '1') { this.props.navigation.navigate('CovidSymptoms') } else { this.props.navigation.navigate('Home') } }}
                    style={styles.nextBtn}>
                    <Text style={styles.nextText}>Next</Text>
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
        marginBottom: 10,
    },
    subLogo: {
        flexDirection: 'row',
        fontWeight: "bold",
        fontSize: 25,
        color: "#fb5b5a",
        marginBottom: 20,
        marginLeft: 20,
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
        borderRadius: 25,
        height: 65,
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    inputView1: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
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
    nextText: {
        color: "white", 
        fontWeight: "bold",
        fontSize: 18
    }
});

export default UpdateSymptoms;