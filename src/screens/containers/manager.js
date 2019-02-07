import React, { Component } from "react";
import Splash from "../../sections/components/splash";
import { connect } from "react-redux";
class Manager extends Component{
    async componentDidMount(){
        if (this.props.user) {
            this.props.navigation.navigate('DrawwerNav');
        } else {
            this.props.navigation.navigate('Login');
        }
    }
    render(){
        return <Splash/>
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Manager)