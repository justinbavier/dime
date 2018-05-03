import React, { Component } from "react";

import phoneWithCard from "../images/phone-with-card.svg";

class Onboarding extends Component {
  render() {
    return (
      <div className="onboarding">
        <div className="row">
          <h1 className="center-align">{` Welcome to Dime. `}</h1>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <p className="center-align">
              {` Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac justo et orci vestibulum
  interdum ac quis odio. Donec dapibus arcu ut convallis. `}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col s4 offset-s2">
            <img
              src={phoneWithCard}
              className="phone-with-card"
              alt="phone-with-card"
            />
          </div>
          <div className="onboarding-cards col s4">
            <div className="onboarding-card row">
              <p className="onboarding-title">
                {` Link in a payment method `}
              </p>
              <p className="onboarding-description">
              {` Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. In ac justo et orci vestibulum
                interdum ac quis odio. `}
              </p>
            </div>
            <div className="onboarding-card row">
              <p className="onboarding-title">
                {` Pick a chartiy (or a few!)`}
              </p>
              <p className="onboarding-description">
                {` Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In ac justo et orci vestibulum
                  interdum ac quis odio.  `}
              </p>
            </div>
            <div className="onboarding-card row">
              <p className="onboarding-title">{` Start giving `}</p>
              <p className="onboarding-description">
                {` Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. In ac justo et orci vestibulum
                  interdum ac quis odio.  `}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Onboarding;
