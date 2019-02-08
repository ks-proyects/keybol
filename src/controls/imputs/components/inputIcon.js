import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
/**
 * 
 * @param {*} props 
 */
function InputIcon(props) {
    return (
        <View style={style.inputIconStyle}>
            <Icon style={style.searchIcon} 
                name={props.name ? props.name : "default"}
                size={props.iconSize ? props.iconSize : 20}
                color={props.iconColor ? props.iconColor : "#000"} />
            <TextInput
                style={style.input}
                placeholderTextColor={props.placeholderColor ? props.placeholderColor : "#000"}
                placeholder={props.placeholder ? props.placeholder : ""}
                underlineColorAndroid={props.underlineColorAndroid ? props.underlineColorAndroid : "#fff"}
                returnKeyType={props.returnKeyType ? props.returnKeyType : "default"}
                secureTextEntry={props.isSecureText ? props.isSecureText : false}
                onChangeText={props.onChangeText ? props.onChangeText : (text) => { }}
                onSubmitEditing={props.onSubmitEditing ? props.onSubmitEditing : () => { }}
                ref={props.reference ? props.reference : input => (this.defaultText = input)}
            />
        </View>
    )
}
const style = StyleSheet.create({
    inputIconStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 10,
    },
    searchIcon: {
        padding: 5,
        paddingLeft: 10,
        margin: 5,
        alignItems: 'center',
    },
    input: {
        flex: 1,
        paddingTop: 5,
        paddingRight: 5,
        paddingBottom: 5,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
        margin: 5
    },

})
export default InputIcon;