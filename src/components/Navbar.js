import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/Big-Duck_Transparent.svg';
import facebook from '../img/social/facebook.svg';
import instagram from '../img/social/instagram.svg';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            });
      },
    );
  };

  render() {
    return (
      <nav
        className="navbar"
        role="navigation"
        style={{backgroundColor: 'black'}}
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h1 style={{color: 'white', fontWeight: 'bold'}}>
                Big Duck Music
              </h1>
              <img
                src={logo}
                alt="big duck"
                style={{height: '95px', width: '50px', color: 'orange'}}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            style={{backgroundColor: 'black'}}
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div
              className="navbar-start has-text-centered"
              style={{height: '100%'}}>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/features">
                Features & Reviews
              </Link>
              <Link className="navbar-item" to="/gigs">
                Gigs
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a className="navbar-item" rel="noopener noreferrer">
                <span className="icon">
                  <a
                    title="facebook"
                    href="https://www.facebook.com/pg/bigduckpteltd/"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img
                      src={facebook}
                      alt="Facebook"
                      style={{width: '1em', height: '1em'}}
                    />
                  </a>
                </span>
                <span className="icon">
                  <a
                    title="instagram"
                    href="https://instagram.com/bigduckpteltd"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img
                      src={instagram}
                      alt="Instagram"
                      style={{width: '1em', height: '1em'}}
                    />
                  </a>
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
