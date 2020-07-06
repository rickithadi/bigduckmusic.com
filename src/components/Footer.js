import React from 'react';
import {Link} from 'gatsby';

import logo from '../img/Big Duck_Transparent.png';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';
import vimeo from '../img/social/vimeo.svg';
import duck from '../img/sex/footDuk.png';

const Footer = class extends React.Component {
  render() {
    return (
      <footer
        className='foot'
        style={{backgroundColor: 'black', height: '100%'}}>
        <h2
          className="has-text-centered bike is-vcentered"
          style={{color: 'white', paddingTop: '4vh'}}>
          Big Duck Pte Ltd &copy; 2020 - All Rights Reserved
        </h2>

          <img src={duck} alt="big duck" />

      </footer>
    );
  }
};

export default Footer;
