import React, {Component} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import store from "./store/store";
/**Styling**/
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
/*********Components**********/
import Header from "./components/layout/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route to="/dashboard" componnet={Dashboard} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
