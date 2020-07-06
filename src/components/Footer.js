import React from 'react';
import {Link} from 'gatsby';

import logo from '../img/Big Duck_Transparent.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import duck from '../img/sex/footDuk.png';

const Footer = class extends React.Component {
  state = {isMobile: false};
  componentDidMount = () => {
    let hold = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({isMobile: hold});
    console.log('monb', this.state.isMobile);
  };

  render() {
    return (
      <footer
        className="foot"
        style={{backgroundColor: 'black', height: '100%'}}>
        {this.state.isMobile && (
          <div>
            <h2
              className="has-text-centered bike is-vcentered"
              style={{color: 'white'}}>
              Big Duck Pte Ltd &copy; 2020 - All Rights Reserved
            </h2>

            <img src={duck} style={{paddingTop: '6vh'}} alt="big duck" />
          </div>
        )}
        {!this.state.isMobile && (
          <h2
            className="has-text-centered bike is-vcentered"
            style={{color: 'white', paddingBottom: '1vh', paddingTop: '1vh'}}>
            Big Duck Pte Ltd &copy; 2020 - All Rights Reserved
          </h2>
        )}
      </footer>
    );
  }
};

export default Footer;
