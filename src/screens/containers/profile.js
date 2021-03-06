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

class Home extends Component {
    logout = () => {
        this.props.dispatch({
            type: 'SET_USER',
            payload: null
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
                    <Text>Perfil</Text>
                    <TouchableOpacity
                        onPress={this.logout}
                        style={styles.button}>
                        <Text style={styles.buttonLabel}>Salir</Text>
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

export default connect(null)(Home)