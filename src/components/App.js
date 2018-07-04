import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import About from './About';

import ResetPasswordPage from './ResetPasswordPage';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/about" component={About} />
          <Route exact path="/resetPassword"
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
