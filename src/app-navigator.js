import { createAppContainer, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import Splash from "./sections/components/splash";
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

const SwitchNav = createSwitchNavigator(
    {
        Splash, Manager, Register, Login, DrawwerNav
    },
    {
        initialRouteName: 'Manager'
    }
);

const AppContainer = createAppContainer(SwitchNav);
export default AppContainer;
