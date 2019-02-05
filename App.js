import React, { Component } from 'react';
import { store, persistor } from "./store";
import AppNavigatorWithState from "./src/app-navigator-with-state";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import Splash from "./src/sections/components/splash";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} >
        <PersistGate loading={<Splash />} persistor={persistor}>
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}