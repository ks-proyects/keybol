import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./sections/components/splash";
import Manager from "./screens/containers/manager";
import Register from "./screens/containers/register";
import Login from "./screens/containers/login";
import Home from "./screens/containers/home";

import {createSwitchNavigator } from "react-navigation";


const SwitchNav = createSwitchNavigator(
    {
        Splash,Manager,Register,Login,Home
    },
    {
        initialRouteName:'Manager'
    });
    
const AppContainer = createAppContainer(SwitchNav);
export default AppContainer;
