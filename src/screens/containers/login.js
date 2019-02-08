import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { connect } from 'react-redux';

import InputIcon from "../../controls/imputs/components/inputIcon";

class Login extends Component {

    state = {
        cedula: '',
        clave: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    componentDidMount() {
        StatusBar.setHidden(true);
    }
    handleLogin = () => {
        debugger;
        this.props.dispatch({
            type: 'SET_USER',
            payload: {
                username: 'Freddy Castillo'
            }
        })
        this.props.navigation.navigate('Manager');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", width: "70%" }}>
                    <InputIcon
                        name="user"
                        placeholder="Cédula"
                        returnKeyType="next"
                        iconSize={30}
                        iconColor="red"
                        placeholderColor="red"
                        isSecureText={true}
                        onSubmitEditing={() => this.password2.focus()}
                        onChangeText={val => this.onChangeText('cedula', val)}
                    />
                    <InputIcon
                        name="send"
                        placeholder="Contraseña"
                        iconSize={30}
                        returnKeyType="send"
                        reference={input => (this.password2 = input)}
                        onChangeText={val => this.onChangeText('clave', val)} />
                    <TouchableOpacity width="100%"
                        onPress={this.handleLogin}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>Ingresar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#838383',
        color: 'white',
    },
    button: {
        backgroundColor: '#99c84a',
        borderRadius: 5,
    },
    buttonLabel: {
        color: 'white',
        padding: 5,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(null)(Login)