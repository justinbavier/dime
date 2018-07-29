import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import About from './About';

import ResetPasswordPage from './resetPassword/ResetPasswordPage';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/resetPassword/:resetToken" component={ResetPasswordPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
