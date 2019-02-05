import { createStore ,applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducer from "./reducers/index";
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";
const persistConfig = {
    key: 'root',
    storage,
    blacklist:['navegacion']
}
const persistedReducer = persistReducer(persistConfig, reducer);
const navigationMiddleware= createReactNavigationReduxMiddleware(
    "root",
    state=>state.navegacion
);
const store = createStore(persistedReducer,applyMiddleware(navigationMiddleware));
const persistor = persistStore(store);
export {store,persistor};