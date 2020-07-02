import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/Big-Duck_Transparent.svg';
import duck from '../img/sex/Group.png';
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
              <img
                src={logo}
                alt="big duck"
                style={{
                  height: '95px',
                  width: '50px',
                  backgroundColor: 'white',
                }}
              />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{color: 'white'}}>
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div

            className={`navbar-start ${this.state.navBarActiveClass}`}
               style={{height: '100%'}}>
              <Link className="navbar-item" to="/about">
                <p style={{color: 'white'}}>About</p>
              </Link>
              <Link className="navbar-item" to="/features">
                <p style={{color: 'white'}}>Features & Reviews</p>
              </Link>
              <Link className="navbar-item" to="/gigs">
                <p style={{color: 'white'}}>Gigs</p>
              </Link>
              <Link className="navbar-item" to="/contact">
                <p style={{color: 'white'}}>Contact</p>
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
