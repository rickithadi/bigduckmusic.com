import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/Big-Duck_Transparent.svg';
import duck from '../img/sex/dick.svg';
import facebook from '../img/social/fb.svg';
import instagram from '../img/social/ins.svg';

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
        className={`navbar bike ${this.state.navBarActiveClass}`}
        style={{padding: '10px'}}
        role="navigation"
        style={{backgroundColor: 'black'}}
        aria-label="main-navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" title="Logo">
            <img
              src={duck}
              alt="big duck"
              style={{
                height: '95px',
                width: '50px',
              }}
            />
          </Link>
          {/* Hamburger menu */}
          <a
            className={`navbar-burger bike burger ${this.state.navBarActiveClass}`}
            style={{marginLeft: '60vw !important'}}
            class="navbar-burger"
            data-target="navMenu"
            onClick={() => this.toggleHamburger()}
            style={{color: 'white'}}>
            <span />
            <span />
            <span />
          </a>
        </div>
        <div
          id="navMenu"
          className={`navbar-menu ${this.state.navBarActiveClass}`}>
          <div
            className={`navbar-start ${this.state.navBarActiveClass}`}>
            <Link
              className="navbar-item"
              style={{color: 'inherit'}}
              to="/about">
              <p style={{color: 'white'}}>About</p>
            </Link>
            <Link className="navbar-item" to="/features">
              <p style={{color: 'white'}}>Features & Reviews</p>
            </Link>
            <Link className="navbar-item" to="/gigs">
              <p style={{color: 'white'}}>Gigs</p>
            </Link>
          </div>
          <div
            className="navbar-end has-text-centered"
            style={{backgroundColor: 'black'}}>
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
      </nav>
    );
  }
};

export default Navbar;
