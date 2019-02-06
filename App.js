import React, { Component } from 'react';
import { AsyncStorage } from "react-native";
import { store, persistor } from "./store";
import AppNavigatorWithState from "./src/app-navigator-with-state";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Splash from "./src/sections/components/splash";

type Props = {};
export default class App extends Component<Props> {
  async componentDidMount() {
    /*const userString = await AsyncStorage.getItem("USER_KEY");
    const user = await JSON.parse(userString);
    store.dispatch({
      type: "SET_USER",
      payload: user
    });*/
  }
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store} >
        <PersistGate loading={<Splash />} persistor={persistor}>
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}