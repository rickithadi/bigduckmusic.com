import React from 'react';
import {Link} from 'gatsby';

import logo from '../img/Big Duck_Transparent.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';

const Footer = class extends React.Component {
  render() {
    return (
      <footer style={{backgroundColor: 'black', height: '10vh'}}>
        <h2
          className="has-text-centered bike is-vcentered"
          style={{color: 'white', paddingTop: '4vh'}}>
          Big Duck Pte Ltd &copy; 2020 - All Rights Reserved
        </h2>
      </footer>
    );
  }
};

export default Footer;
