import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from './Header';
import Landing from './Landing';
import Signup from './Signup';
import Login from './Login';
const EmailSignup = () => <h2>EmailSignup</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
