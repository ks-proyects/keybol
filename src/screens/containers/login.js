import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
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
    handleRegister = () => {
        debugger;
        this.props.dispatch({
            type: 'SET_USER',
            payload: null
        })
        this.props.navigation.navigate('Register');
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
                        placeholder="Contraseña"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>Ingresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.handleRegister}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>Registrarse</Text>
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

export default connect(null)(Login)