import React, { Component } from 'react';

import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';

class Register extends Component {

    state = {
        nombres: '',
        email: '',
        clave: '',
        claveConfirm: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    handleLogin = async () => {
        const { nombres, email, clave ,claveConfirm} = this.state;
        if(claveConfirm!=clave){
            alert("Las calves no coinciden");
            return;
        }
        var newUser = { nombres, email, clave };
        //const user = await AsyncStorage.setItem("USER_KEY", JSON.stringify(newUser));
        this.props.dispatch({
            type: 'SET_USER',
            payload: newUser
        })
        this.props.navigation.navigate('Manager');
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Image
                        source={require('../../../assets/img/logo.png')}
                        style={styles.logo}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre y Apellido"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText('nombres', val)}
                        returnKeyType="next"
                        onSubmitEditing={() => this.emailInput.focus()}
                        require={true}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Correo Electronico"
                        placeholderTextColor="white"
                        onChangeText={val => this.onChangeText('email', val)}
                        ref={input => (this.emailInput = input)}
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordCInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        ref={input => (this.passwordCInput = input)}
                        onChangeText={val => this.onChangeText('clave', val)}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        returnKeyType="next"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirma la Contraseña"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                        onChangeText={val => this.onChangeText('claveConfirm', val)}
                        ref={input => (this.passwordInput = input)}
                    />
                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
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
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        width: 250,
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
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(null)(Register)