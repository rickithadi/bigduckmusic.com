import React from 'react';
import {Link} from 'gatsby';
import logo from '../img/Big-Duck_Transparent.svg';

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
        className="navbar is-transparent"
        role="navigation"
        style={{backgroundColor: '#FFFF66'}}
        aria-label="main-navigation">
        <div className="container">
          <div className="navbar-brand" >
            <Link to="/" className="navbar-item" title="Logo">
              <h2 style={{color: 'pink', fontWeight: 'bold'}}>
                Big Duck Music
              </h2>
              <img src={logo} alt="Kaldi" style={{width: '88px',color:'white'}} />
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
            style={{backgroundColor: '#FFFF66'}}
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Features
              </Link>
              <Link className="navbar-item" to="/blog">
                Gigs
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
           </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
