import React, { Component } from 'react';

import Landing from './Landing';
import Header from './Header';
import Onboarding from './Onboarding';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Landing />
        <Header />
        <Onboarding />
        <Footer />
      </div>
    )
  }
}

export default Home;
