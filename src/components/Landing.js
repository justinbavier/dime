import React, { Component } from "react";
import Carousel from "nuka-carousel";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

// IMAGES
import primaryLogo from "../images/primary-logo.svg";
import discover from "../images/discover.svg";
import coin from "../images/coin.svg";
import growth from "../images/growth.svg";
import phones from "../images/phones.svg";

// FONT AWESOME ICONS
import downArrow from "@fortawesome/fontawesome-free-solid/faChevronDown";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      autoplay: true,
      initialSlideWidth: 1,
      wrapAround: true
    };
  }
  render() {
    return (
      <div>
        <div className="landing-wrapper container">
          <div className="row hide-on-med-and-down">
            <div className="top-spacer" />
          </div>
          <div className="row show-on-small-only">
            <div className="vertical-spacer" />
          </div>
          {/*=======================*/}
          {/*===== TOP SECTION =====*/}
          {/*=======================*/}
          <div className="row">
            {/*---------------------*/}
            {/*----- LEFT SIDE -----*/}
            {/*---------------------*/}
            <div className="col s12 m6">
              {/*----- LOGO ROW -----*/}
              <div className="row">
                <img src={primaryLogo} className="primary-logo col s12 m12" />
              </div>
              {/*----- END LOGO ROW -----*/}

              <div className="vertical-spacer row" />

              {/*----- PITCH IMAGE ROW -----*/}
              <div className="row hide-on-small-only">
                <img
                  src={discover}
                  className="pitch-image responsive-img col s4 m4"
                />
                <img src={coin} className="pitch-image responsive-img col s4 m4" />
                <img
                  src={growth}
                  className="pitch-image responsive-img col s4 m4"
                />
              </div>
              {/*----- END PITCH IMAGE ROW -----*/}

              {/*----- PITCH TEXT ROW -----*/}
              <div className="row hide-on-small-only">
                <p className="pitch-text center-align col s4 m4">
                  {`Discover local`}
                  <br />
                  {`charities`}
                </p>
                <p className="pitch-text center-align col s4 m4">
                  {`Donate spare`}
                  <br />
                  {`change`}
                </p>
                <p className="pitch-text center-align col s4 m4">
                  {`Invest in your`}
                  <br />
                  {`community`}
                </p>
              </div>
              {/*----- END PITCH TEXT ROW -----*/}

              {/*----- MOBILE CAROUSEL PITCH GRAPHICS -----*/}
              <Carousel
                className="col s4 responsive-img hide-on-med-and-up"
                autoplay={this.state.autoplay}
                initialSlideHeight={this.state.initialSlideWidth}
                wrapAround={this.state.wrapAround}
              >
                <img src={discover} />
                <img src={coin} />
                <img src={growth} />
              </Carousel>
              {/*----- END MOBILE CAROUSEL PITCH GRAPHICS -----*/}

              {/*----- SIGNUP BUTTON ROW -----*/}
              <div className="row">
                <a
                  className="signup-button btn-large col s6 offset-s3 m6 offset-m3"
                  href="/signup"
                >
                  Get Started
                </a>
              </div>
              {/*----- END SIGNUP BUTTON ROW -----*/}

              {/*----- LOGIN LINK ROW -----*/}
              <div className="row">
                <a
                  className="login-link col s8 offset-s2 m12 center-align"
                  href="/login"
                >{` Already have an account? `}</a>
              </div>
              {/*----- END LOGIN LINK ROW-----*/}
            </div>
            {/*-------------------------*/}
            {/*----- END LEFT SIDE -----*/}
            {/*-------------------------*/}

            {/*----------------------*/}
            {/*----- RIGHT SIDE -----*/}
            {/*----------------------*/}
            <div className="col m6 hide-on-small-only">
              {/*----- PHONES ROW -----*/}
              <div className="row">
                <img src={phones} className="phones responsive-img" />
              </div>
              {/*----- END PHONES ROW -----*/}
            </div>
            {/*--------------------------*/}
            {/*----- END RIGHT SIDE -----*/}
            {/*--------------------------*/}
          </div>
          {/*===========================*/}
          {/*===== END TOP SECTION =====*/}
          {/*===========================*/}
        </div>
        <div>
          <div className="row">
            <div className="center-align">
              <div className="row">
                <a
                  href="#!"
                  className="learn-more col s6 offset-s3 m2 offset-m5"
                >
                  <p>{` Learn More `}</p>
                  <FontAwesomeIcon className="down-arrow" icon={downArrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
