import React, {Component} from 'react';
import {Provider} from "react-redux";
import {BrowserRouter, Route } from "react-router-dom";
import store from "./store/store";
/**Styling**/
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
/*********Components**********/
import Header from "./components/layout/Header";
import Dashboard from "./components/Dashboard";
import File from "./components/File";
import LandingPage from "./components/layout/LandingPage";
import Signin from "./components/layout/Signin";
import Signup from "./components/layout/Signup";
/*******************************/
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
              <Header />
              <Route path="/" component={LandingPage} exact={true} />
              <Route path="/signin" component={Signin} exact={true} />
              <Route path="/signup" component={Signup} exact={true} />
              <Route path="/dashboard" component={Dashboard} exact={true}/>
              <Route path="/addFile" component={File} exact={true} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
