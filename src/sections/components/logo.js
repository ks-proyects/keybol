import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
function Splash(props) {
    return (
        <View style={style.container}>
            <Image source={require('../../../assets/img/logo.png')} style={style.logo} resizeMode="contain" />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    logo: {
        marginBottom: 10, width: 300, height: 100
    }
})
export default Splash;