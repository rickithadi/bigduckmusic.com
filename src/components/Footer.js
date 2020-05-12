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
      <footer className="footer " style={{backgroundColor: '#bc9cce'}}>
        <div
          className="content has-text-centered has-black-white-ter"
          style={{backgroundColor: '#bc9cce !important'}}>
          <div
            className="container has-text-black-ter"
            style={{backgroundColor: '#bc9cce !important'}}>
            <div className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link
                        to="/"
                        className="navbar-item"
                        style={{color: 'black'}}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/about"
                        style={{color: 'black'}}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/features"
                        style={{color: 'black'}}>
                        Features & Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="navbar-item"
                        to="/gigs"
                        style={{color: 'black'}}>
                        Gigs
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link
                        className="navbar-item"
                        to="/contact"
                        style={{color: 'black'}}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a
                  title="facebook"
                  target="_blank"
                  href="https://www.facebook.com/pg/bigduckpteltd/">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{width: '1em', height: '1em'}}
                  />
                </a>
                <a
                  title="instagram"
                  href="https://instagram.com/bigduckpteltd"
                  target="_blank">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{width: '1em', height: '1em'}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="content has-text-centered"
          style={{
            color: '#10559A',
          }}>
          <p> Big Duck Pte Ltd &copy; 2020 - All Rights Reserved</p>
        </div>
      </footer>
    );
  }
};

export default Footer;
