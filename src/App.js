import React, {Component} from 'react';
import {connect} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import './App.css';

import Header from "./components/layout";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div>Bismillah</div>
      </div>
    );
  }
}
const ConnectedApp= connect(null, null)(App);

export default ConnectedApp;
