import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Layout from '../../components/Layout';
import GigRoll from '../../components/GigRoll';

export default class gigIndexPage extends React.Component {
  state = {isMobile: false};
  componentDidMount = () => {
    let hold = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.setState({isMobile: hold});
    console.log('monb', this.state.isMobile);
  };
  render() {
    return (
      <Layout style={{backgroundColor: 'black'}}>
        <div
          className="gigbg"
          style={{
            minHeight: '25vh',
            height: '100%',
          }}>
          <h1
            className="fHeader cen"
            style={{
              color: 'white',
            }}>
            Big Duck music gigs
          </h1>
        </div>
        <section className="section" style={{backgroundColor: 'black'}}>
          <div className="container">
            <GigRoll />
          </div>
        </section>
        <div
          className="gigbg"
          style={{
            minHeight: '25vh',
            height: '100%',
          }}></div>
      </Layout>
    );
  }
}
