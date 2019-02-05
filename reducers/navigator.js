import {createNavigationReducer} from "react-navigation-redux-helpers";
import AppContainer from "../src/app-navigator";
const navegacion=createNavigationReducer(AppContainer);
export default navegacion;