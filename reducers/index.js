import {combineReducers} from "redux";
import navegacion from "./navigator";
import user from "./user";
const reducer=combineReducers({
    navegacion,user
});
export default reducer;