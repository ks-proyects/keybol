import {createStackNavigator, createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from "react-navigation";
import Splash from "./sections/components/splash";
import Logo from "./sections/components/logo";
import Manager from "./screens/containers/manager";
import Register from "./screens/containers/register";
import Login from "./screens/containers/login";
import Home from "./screens/containers/home";
import Profile from "./screens/containers/profile";


const DrawwerNav = createDrawerNavigator(
    {
        Home,
        Profile
    },
    {
        initialRouteName: 'Profile'
    }
)
const LoginNav = createStackNavigator(
    {
        Login,
    },
    {
        defaultNavigationOptions: {
            header: Logo
        }
    }
);
const RegisterNav = createStackNavigator(
    {
        Register,
    },
    {
        defaultNavigationOptions: {
            header: Logo
        }
    }
);
const Tab = createBottomTabNavigator(
    {

        Login: {
            screen: LoginNav,
            navigationOptions: {
                title: "Inicio"
            }
        },
        Register: {
            screen: RegisterNav,
            navigationOptions: {
                title: "Registrarse"
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "white",
            activeBackgroundColor: "#65a721"
        },
        tabBarPosition:'top'
    },
    
)

const SwitchNav = createSwitchNavigator(
    {
        Splash, Manager, Tab, DrawwerNav
    },
    {
        initialRouteName: 'Manager'
    }
);

const AppContainer = createAppContainer(SwitchNav);
export default AppContainer;
